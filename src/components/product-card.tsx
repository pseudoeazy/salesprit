import React from "react";
import { Product } from "types/product";
import CURRENCY from "constants/currency";
import { useCart } from "contexts/cart/cart-provider";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        className="w-full h-48 rounded-lg cursor-pointer"
        src={`/images/${product?.imgUrl}`}
        alt={product?.name}
        onClick={() => addItem({ product, id: product.id })}
      />

      <div className="p-5">
        <div
          onClick={() => addItem({ product, id: product.id })}
          role="button"
          className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {product?.name}
        </div>

        <span className="text-secondary font-bold">
          {CURRENCY}
          {product?.price?.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
