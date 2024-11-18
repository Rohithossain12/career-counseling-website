import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const {
    description,
    image,
    serviceName,
    category,
    pricing,
    duration,
    counselor,
    rating,
  } = useLoaderData();

  return (
    <div className="mt-10 mb-16 container mx-auto px-5">
      <div className="  bg-base-200 p-5 rounded-lg ">
        <div className=" md:h-[400px] grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className=" border rounded-lg ">
            <img
              className="h-[400px] w-full object-cover rounded-lg "
              src={image}
              alt=""
            />
          </div>
          <div className=" border rounded-lg space-y-2 ">
            <h1 className="ml-5 mt-4 text-xl md:text-2xl font-bold">Service Name : {serviceName}</h1>
            <h2 className="ml-5 text-lg md:text-xl font-semibold">Category : {category}</h2>
            <h3 className="ml-5 text-lg md:text-xl font-semibold">Description : {description}</h3>
            <h4 className="ml-5 text-lg md:text-xl font-semibold">Counselor : {counselor}</h4>
             <p className="ml-5 font-semibold">Pricing : {pricing}</p>
             <p className="ml-5 font-semibold">Duration : {duration}</p>
             <p className="ml-5 font-semibold pb-5">Rating : {rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
