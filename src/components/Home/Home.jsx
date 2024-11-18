import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import Banner from "../Banner/Banner";

const Home = () => {
  const services = useLoaderData();
  

  return (
    <div className="container mx-auto px-5">
      <section className="pt-8">
        <Banner></Banner>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10 pb-10">
        {services.slice(0, 6).map((service) => (
          <ServiceCard service={service}></ServiceCard>
        ))}
      </section>
      <div className="pb-8 text-center">
        <Link to="/allService" className="btn btn-primary">
          View All
        </Link>
      </div>

      <section></section>
    </div>
  );
};

export default Home;
