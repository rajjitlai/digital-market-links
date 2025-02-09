import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { getProd } from "../../lib/getProd";

const Women = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const gotProd = await getProd();
        setProducts(gotProd);
        console.log("Fetched products:", gotProd);
      } catch (err) {
        console.error("Error fetching products", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ✅ Filter products that contain the "women" tag
  const womenProducts = products.filter((product) => {
    if (Array.isArray(product.tags)) {
      return product.tags.includes("women");
    } else if (typeof product.tags === "string") {
      return product.tags.split(",").map(tag => tag.trim()).includes("women");
    }
    return false;
  });

  // ✅ Function to truncate long descriptions
  const truncateDescription = (desc, length = 80) => {
    return desc.length > length ? `${desc.substring(0, length)}...` : desc;
  };

  return (
    <div className="container mx-auto px-6 lg:px-16 pt-16">
      <h2 className="font-semibold text-3xl text-center pb-6 text-primary">Women Products</h2>

      {isLoading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center">Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12 xl:gap-16">
          {womenProducts.length > 0 ? (
            womenProducts.map((product) => (
              <div key={product.$id}>
                <ProductCard
                  id={product.$id}
                  img={product.item_image}
                  title={product.item_name}
                  desc={truncateDescription(product.item_description)}
                  price={product.item_price}
                  tags={product.tags}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No women products found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Women;
