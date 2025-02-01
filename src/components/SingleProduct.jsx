import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProdById } from "../lib/getProdById";
import { getProdByTags } from "../lib/getProductByTags";
import SingleProductCard from "./SingleProduct/SingleProductCard";
import RelatedProducts from "./SingleProduct/RelatedProducts";

const SingleProduct = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [relatedProd, setRelatedProd] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProdData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const prodData = await getProdById(id);
                setProduct(prodData);

                // Fetch related products based on tags
                if (prodData?.tags?.length > 0) {
                    const relatedProds = await getProdByTags(prodData.tags);
                    setRelatedProd(relatedProds);
                }
            } catch (err) {
                setError("Failed to fetch product. Please try again later.");
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProdData();
    }, [id]);

    return (
        <div className="container mx-auto mt-8 px-4">
            {isLoading && <h2 className="text-center text-lg">Loading...</h2>}
            {error && <h2 className="text-red-500 text-center">{error}</h2>}

            {product && !isLoading && (
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                    <div className="lg:w-2/3 w-full">
                        <SingleProductCard product={product} />
                    </div>
                </div>
            )}

            {/* Related Products Section */}
            {relatedProd.length > 0 && (
                <RelatedProducts relatedProd={relatedProd} />
            )}
        </div>
    );
};

export default SingleProduct;
