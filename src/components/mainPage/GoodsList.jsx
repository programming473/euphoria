import React from "react";
import Title from "./Title";

import ProductCard from "../common/ProductCard";

const GoodsList = (props) => {
  return (
    <div className="mb-[100px]">
      <Title title="In The Limelight" />
      <ProductCard {...props} />
    </div>
  );
};

export default GoodsList;
