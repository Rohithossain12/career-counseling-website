import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const MainLayout = () => {
    return (
        <div>
        <header>
        <Header></Header>   
        </header>
        <main className="">
        <Outlet></Outlet>    
        </main>
       <footer>
       <Footer></Footer> 
        </footer>  
            
        </div>
    );
};

export default MainLayout;