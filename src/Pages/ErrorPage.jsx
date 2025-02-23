import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen  flex flex-col justify-center items-center space-y-3">
      <h1 className=" text-2xl md:text-4xl lg:text-7xl font-bold">404</h1>
      <p className="md:text-xl font-bold">Page Not Found</p>
      <Link
        className="bg-[#6D8CA0] text-white px-5 py-3 rounded-full font-bold"
        to="/"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
