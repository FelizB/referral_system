import React from "react";
import Sign from "./Sign";
import SignUp from "../components/AuthSign/SignUp"
import Landingpage from "./Landingpage";
import DashBoard from "./Dashboard";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
 
     /* Used router to all the webpages implementd   */
function App(){
    const router= createBrowserRouter([
        {path:"me", element:<DashBoard/>},
        {path:"/", element:<Landingpage/>},
        {path:"sign", element:<Sign/>},
        {path:"signup", element:<SignUp />}

    ])
    return(
        <RouterProvider router={router} />
    )
}

export default App;