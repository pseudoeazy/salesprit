import Search from "components/search";
import Notification from "assets/icons/notification";
import ProductCard from "components/product-card";
import products from "data/products";

const MainContent = () => {
  return (
    <div className="flex-1  min-h-screen ">
      <header className="flex items-center justify-center  pt-10 pb-12 px-8">
        <div>
          <Search />
        </div>
        <div className="hover:cursor-pointer">
          <Notification />
        </div>
      </header>
      <section className="grid grid-cols-3 gap-4 px-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default MainContent;
