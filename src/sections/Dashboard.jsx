import React from "react";
import "../../src/components/Dashboard/css/dashboard.css";
import DashboardNavbar from "../components/Dashboard/dashboardnavbar";
import DashBoardSidebar from "../components/Dashboard/dashboardSidebar";

function DashBoard(){
    return(
        <div className="dashboard">
            <DashboardNavbar />
           <DashBoardSidebar />
        </div>
    )
}
export default DashBoard;