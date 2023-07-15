import React from "react";
import Sign from "./Sign";
import SignUp from "../components/AuthSign/SignUp"
import Landingpage from "./Landingpage";
import DashBoard from "./Dashboard";
import Analytics from "../components/Dashboard/pages/Analytics";
import Dashboard from "../components/Dashboard/pages/Dashboard";
import Products from "../components/Dashboard/pages/Products";
import {createBrowserRouter, RouterProvider,createRoutesFromElements, Route} from "react-router-dom";
 
     /* Used router to all the webpages implementd   */
const router= createBrowserRouter(
    createRoutesFromElements(
        <Route>
        <Route path="me" element={<Landingpage/>} />,
        <Route path="sign" element={<Sign/>}/>,
        <Route path="signup" element={<SignUp />}/>,
        <Route path="landing" element={<Landingpage/>}>
            
        </Route>,
        <Route path="/" element={<DashBoard />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="analytics" element={<Analytics />}/>
            <Route path="products" element={<Products />}/>
        </Route>
        </Route>
));
function App(){
 
    return(
        <RouterProvider router={router} />
    )
}

export default App;