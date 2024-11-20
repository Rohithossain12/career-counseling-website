import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Toaster } from "react-hot-toast";



const MainLayout = () => {
    return (
        <div>
        <header className="space-y-8">
        <Header></Header>  
       
        </header>
        <main className="">
        <Outlet></Outlet>    
        </main>
       <footer>
       <Footer></Footer> 
        </footer>  
          <Toaster></Toaster>  
        </div>
    );
};

export default MainLayout;