import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./components/Home/Home";
import MyProfile from "./components/MyProfile/MyProfile";
import Login from "./components/Login/Login";
import Register from "./components/Resgister/Register";
import AuthProvider from "./Provider/AuthProvider";
import Banner from "./components/Banner/Banner";
import AllService from "./components/AllService/AllService";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/allService",
        element: <AllService></AllService>,
        loader: () => fetch("/service.json"),
      },

      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: async ({ params }) => {
          const response = await fetch("/service.json");
          const services = await response.json();
          const singleService = services.find(
            (service) => service.id == params.id
            
           
          );
          return singleService;
        },
      },
      {
        path: "profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
