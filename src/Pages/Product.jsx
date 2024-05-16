import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import { ShopContext } from "../Context/ShopContext";
import Descriptionbox from "../Components/DescriptionBax/Descriptionbox";
import RelatedProducts from "../Components/RelativeProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div className="">
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <Descriptionbox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
