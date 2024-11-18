import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Home = () => {

const services =useLoaderData();
console.log(services)   

    return (
        <div className='container mx-auto px-5'>
         <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10 pb-10'>
          {
           services.map(service =><ServiceCard service={service}></ServiceCard>) 
          }  
         </section>
         <section></section>
         <section></section>
        </div>
    );
};

export default Home;