import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import Banner from "../Banner/Banner";
import PerfectCareer from "../PerfectCareer/PerfectCareer";
import CareerGuidance from "../CareerGuidance/CareerGuidance";
import { Helmet } from "react-helmet";

const Home = () => {
  const services = useLoaderData();

  return (
    <div className="container mx-auto px-5">
      <Helmet>
        <title>Career Counseling | Home</title>
      </Helmet>

      <section className="pt-24 md:pt-8">
        <Banner></Banner>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10 pb-10">
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
