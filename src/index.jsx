
import ReactDOM from "react-dom/client"
import "./style.css"
import Footer  from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import ProductCard from "./Components/ProductCard/ProductCard";
import ProductLayout from "./Components/ProductLayout/ProductLayout";
import { ProductData } from "./api/ProductData";
// import Counter from "./Components/Counter/Counter";
// import Comment from "./Components/Comment/Comment";
import Error from "./Components/Error/Error";
import { createBrowserRouter, Outlet, Router, RouterProvider } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
// import Contact from "./Components/Contact/Contact-OLD";
import Contact from "./Components/Contact/Contact";
import DemoImages from "./Components/DemoImages/DemoImages";
import {lazy, Suspense } from "react";
import UserContext from "./Context/UserContext";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Context/CartContext";




const Comment = lazy(()=>import("./Components/Comment/Comment"))
const Counter = lazy(()=>import("./Components/Counter/Counter"))



 const Body =()=>{
    return(
        <>
        <HeroSection/>
        <ProductLayout/>
        </>
    )
 }

 const AppLayout=()=>{
    return(
        <>
       <CartProvider>
       <Header/>
         <Outlet/>
        <Footer/>
       </CartProvider>
      
       
       
        
  
        </>
    )
 }

 const approuter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
    children:[
        {
            path:"/",
            element:<Body/>
        },
        {
            path:"/Counter",
             element:<Suspense fallback={"Loading..."}>
                <Counter/>
             </Suspense>,
        },
        {
            path:"/Comment",
            element:<Suspense fallback={"Loading..."}>
                <Comment/>
            </Suspense>,
        },
        {
            path:"/products/:id",
            element:<ProductDetails/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/DemoImages",
            element:<DemoImages/>
        },
        {
            path:"/Cart",
            element:<Cart/>
        }
    ],
    errorElement:<Error/>
}
 ])



 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={approuter}/>)

