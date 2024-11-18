import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { id, image, serviceName, category, pricing, counselor } = service || {};
  return (
    <div className="transition hover:scale-105 border  overflow-hidden rounded-lg p-3">
      <figure className="w-full h-48 overflow-hidden rounded-lg ">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </figure>
      <div className="p-2 space-y-2"></div>
      <div className="space-y-2">
        <h1 className="text-xl font-bold">Service: {serviceName}</h1>
        <p className="text-lg font-bold">Category : {category}</p>
        <p className="font-semibold">Counselor: {counselor}</p>
        <p className="pb-4">Pricing : {pricing}</p>
        <Link to={`/serviceDetails/${id}`} className=" py-2 px-5 rounded-full bg-[#9538E2] text-white ">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
