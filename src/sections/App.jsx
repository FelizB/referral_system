import React from "react";
import Sign from "./Sign";
import SignUp from "../components/AuthSign/SignUp"
import Landingpage from "./Landingpage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App(){
    const router= createBrowserRouter([
        {path:"/", element:<Landingpage/>},
        {path:"sign", element:<Sign/>},
        {path:"signup", element:<SignUp />}

    ])
    return(
        <RouterProvider router={router} />
    )
}

export default App;