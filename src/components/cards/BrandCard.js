import React from "react";
import { Link } from "react-router-dom";

const BrandCard = ({item}) => {
  return (
    <Link  to={`/designers_details/${item._id}`} className="border">
      <img
        src={item?.logo}
        className=""
        alt=""
      />
    </Link>
  );
};

export default BrandCard;
