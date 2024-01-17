import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Contact from "./components/Contact";
import Cart from "./components/Cart"
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { restaurantData } from "./config";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";

const LetsEatMart=lazy(()=>import ("./components/LetsEatMart"))






const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {

                        path: "profile",
                        element: <Profile />
                    }
                ],
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "restaurant/:id",
                element: <RestaurantMenu restaurantData={restaurantData} />
            },
            {
                path:"/letsEatMart",
                element:<Suspense fallback={<Shimmer />}>
                    <LetsEatMart />
                    </Suspense>
            }
        ]
    },

])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)


