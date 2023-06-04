import React, { useState } from "react";
import Login from "../components/LogIn";
import SignUp from "../components/SignUp"
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";

function Sign(){
    const router= createBrowserRouter([
        {path:"/", element:<Login/>},
        {path:"signup", element:<SignUp />}
    ])
    return(
        <RouterProvider router={router} />
    )
}

export default Sign;