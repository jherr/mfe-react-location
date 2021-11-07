import React, { useEffect, useRef } from "react";
import { useMatch } from "react-location";

import { getProductById, currency } from "home/products";
import placeAddToCart from "addtocart/placeAddToCart";

export default function PDPContent() {
  const { data: product } = useMatch();

  const addToCart = useRef(null);

  useEffect(() => {
    if (addToCart.current) {
      placeAddToCart(addToCart.current, product?.id);
    }
  }, [product]);

  if (!product) return null;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
          <div className="font-bold text-3xl flex-end">
            {currency.format(product.price)}
          </div>
        </div>
        <div ref={addToCart}></div>
        <div className="mt-10">{product.description}</div>
        <div className="mt-10">{product.longDescription}</div>
      </div>
    </div>
  );
}
