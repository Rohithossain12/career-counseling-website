import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdOutlineFeedback } from "react-icons/md";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";


const ServiceDetails = () => {
  
  const [review, setReview] = useState("");
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

  const handleReview = (event) => {
    event.preventDefault();
    const review = event.target.review.value;
    setReview(review);
    toast.success("Successfully Submitted");
    event.target.reset();

  };

  return (
    <div className=" mt-24 md:mt-10 mb-16 container mx-auto px-5">
      <Helmet>
        <title>Career Counseling | Service Details</title>
      </Helmet>
      <div className="  bg-[#F1F0EA] p-5 rounded-lg ">
        <div className=" md:h-[400px] grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className=" border rounded-lg ">
            <img
              className="h-[400px] w-full object-cover rounded-lg "
              src={image}
              alt=""
            />
          </div>
          <div className=" border rounded-lg space-y-2 ">
            <h1 className="ml-5 mt-4 text-xl md:text-2xl font-bold">
              Service Name : {serviceName}
            </h1>
            <h2 className="ml-5 text-lg md:text-xl font-semibold">
              Category : {category}
            </h2>
            <h3 className="ml-5 text-lg md:text-xl font-semibold">
              Description : {description}
            </h3>
            <h4 className="ml-5 text-lg md:text-xl font-semibold">
              Counselor : {counselor}
            </h4>
            <p className="ml-5 font-semibold">Pricing : {pricing}</p>
            <p className="ml-5 font-semibold">Duration : {duration}</p>
            <p className="ml-5 font-semibold pb-5">Rating : {rating}</p>
          </div>
        </div>
      </div>

      {/* Review / Feedback */}
      <div className="grid grid-cols-1 bg-[#F1F0EA] rounded-lg md:grid-cols-2 mt-10 border p-16 gap-5">
        <form onSubmit={handleReview} className="flex items-center gap-5">
         <textarea className=" w-80 h-20 p-2 rounded-lg" name="review" id="" placeholder="Write a feedback"></textarea>
          <button className="px-3 py-2 bg-[#6D8CA0] text-white rounded-lg">Submit</button>
        </form>
        <div className="bg-white rounded-lg flex p-2 gap-2 ">
        <MdOutlineFeedback  size={30} className="text-gray-400"/>
          <p className="text-xl text-gray-400">{review}</p>
        </div>
      </div>
      
    </div>
  );
};

export default ServiceDetails;
