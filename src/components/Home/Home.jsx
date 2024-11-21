import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import Banner from "../Banner/Banner";
import PerfectCareer from "../PerfectCareer/PerfectCareer";
import CareerGuidance from "../CareerGuidance/CareerGuidance";
import { Helmet } from "react-helmet";
import 'animate.css';

const Home = () => {
  const services = useLoaderData();

  return (
    <div className="container mx-auto px-5">
      <Helmet>
        <title> Quick Career | Home</title>
      </Helmet>

      <section className="pt-24 md:pt-8">
        <Banner></Banner>
      </section>

      <section className="mt-10 mb-4 ">
      <div className="">
        <h1 className="text-center lg:text-4xl font-bold md:text-2xl text-xl text-green-500 mx-auto animate__animated  animate__zoomIn animate__slower	3s  animate__infinite	infinite"> Our Services</h1>
        <p className="text-center pt-2 text-gray-500 animate__animated animate__backInRight animate__slow	2s ">
       Empowering individuals to make informed career choices through personalized guidance and expert advice.<br/></p>
       <p className="text-center text-gray-500 animate__animated  animate__backInLeft animate__slow	2s"> Discover your potential and achieve your professional goals with our dedicated support.</p>
      </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3  gap-5 pt-10 pb-10">
        {services.slice(0, 6).map((service) => (
          <ServiceCard service={service}></ServiceCard>
        ))}
      </section>
      <div className="pb-8 text-center">
        <Link to="/allService" className="py-3 px-5 rounded-full bg-[#6D8CA0] text-white">
          View All
        </Link>
      </div>

      <section>
        <PerfectCareer></PerfectCareer>
      </section>

      <section>
        <CareerGuidance></CareerGuidance>
      </section>
    </div>
  );
};

export default Home;
