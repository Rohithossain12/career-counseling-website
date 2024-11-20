import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";


const AllService = () => {
const services =useLoaderData();    
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pt-24 md:pt-10 pb-10 container mx-auto px-5 ">
        <Helmet>
         <title>Career Counseling | All Service</title>   
        </Helmet>    

           {services.map((service) => (
          <ServiceCard service={service}></ServiceCard>
        ))}
        </div>
    );
};

export default AllService;