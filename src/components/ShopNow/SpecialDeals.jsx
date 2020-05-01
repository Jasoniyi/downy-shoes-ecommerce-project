import React from "react";

import s1 from "../../images/s1.jpg";
import s2 from "../../images/s2.jpg";
import s3 from "../../images/s3.jpg";
import s4 from "../../images/s4.jpg";
import s5 from "../../images/s5.jpg";

const products = [
  {
    image: `${s4}`,
    name: "Shuberry Heels",
    price: "$180.00",
  },
  {
    image: `${s2}`,
    name: "Chikku Loafers",
    price: "$99.00",
  },
  {
    image: `${s1}`,
    name: "Bella Toes",
    price: "$165.00",
  },
  {
    image: `${s5}`,
    name: "Red Bellies",
    price: "$225.00",
  },
  {
    image: `${s3}`,
    name: "(SRV) Sneakers",
    price: "$169.00",
  },
];

const SpecialDeals = () => {
  return (
    <div>
      {products.map((product, i) => (
        <div className="product-wrapper" key={i}>
          <div className="pdct-img">
            <img
              src={product.image}
              alt={product.name}
              width="90%"
              className="img-responsive"
            />
          </div>
          <div className="pdct-text">
            <div className="pdct-name"> {product.name}</div>
            <div className="pdct-price">{product.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialDeals;
