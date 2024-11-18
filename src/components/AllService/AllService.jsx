import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";



const AllService = () => {
const services =useLoaderData();    
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10 pb-10 container mx-auto px-5 ">
           {services.map((service) => (
          <ServiceCard service={service}></ServiceCard>
        ))}
        </div>
    );
};

export default AllService;