import React from "react";
import { NavLink,Outlet } from "react-router-dom";
import "../../src/components/Dashboard/css/dashboard.css";
import DashboardNavbar from "../components/Dashboard/dashboardnavbar";
import DashBoardSidebar from "../components/Dashboard/dashboardSidebar";
import Analytics from "../components/Dashboard/pages/Analytics";
import Dashboard from "../components/Dashboard/pages/Dashboard";
import Products from "../components/Dashboard/pages/Products";

function DashBoard(){

    return(
        <div className="dashboard">
                <DashBoardSidebar />  
                <main className="dashboardMainContainer">{
                    <DashboardNavbar/>}
                    {<Outlet />}
                    
                </main>              
        </div>
    )
}
export default DashBoard;
