import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { getProd } from "../../lib/getProd";

const Health = () => {
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

  // ✅ Filter products that contain the "health" tag
  const healthProducts = products.filter((product) => {
    if (Array.isArray(product.tags)) {
      return product.tags.includes("health");
    } else if (typeof product.tags === "string") {
      return product.tags.split(",").map(tag => tag.trim()).includes("health");
    }
    return false;
  });

  // ✅ Function to truncate long descriptions
  const truncateDescription = (desc, length = 80) => {
    return desc.length > length ? `${desc.substring(0, length)}...` : desc;
  };

  return (
    <div className="container mx-auto px-8 lg:px-16 pt-16">
      <h2 className="font-semibold text-3xl text-center pb-6 text-primary">Health Products</h2>

      {isLoading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center">Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {healthProducts.length > 0 ? (
            healthProducts.map((product) => (
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
              No health products found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Health;
