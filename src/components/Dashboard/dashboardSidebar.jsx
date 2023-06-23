import React from "react";
import "./css/dashboard.css";
import { NavLink, Outlet } from "react-router-dom";
import WidgetsIcon from '@mui/icons-material/Widgets';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';


function DashBoardSidebar(){
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<DashboardIcon className="sidebar-icons"/>
        },
        {   
            path:"/analytics",
            name:"Analytics",
            icon:<DashboardIcon className="sidebar-icons"/>
        },
        {   
            path:"/products",
            name:"Products",
            icon:<DashboardIcon className="sidebar-icons"/>
        }
    ]
    return(
        <div>
            <div className="sidebar">
            <div className="d-flex flex-column flex-shrink-0 p-3" >
                
                    <div className="navbar-logo">
                        <a class="navbar-brand" href="#Land">
                        <span>Rf</span> Board
                        </a>
                        <div className="navbar-menu-icon">
                        <MenuIcon />
                        </div>
                    </div>
                    
                   
                    <br />

                    <ul className="nav nav-pills flex-column mb-auto">
                        
                        {menuItem.map((items, index)=>(
                        <li>
                            <NavLink to={items.path} key={index} className="nav-item">
                                
                                <div >{items.icon}</div>
                                <div className="nav-link">
                                {items.name}
                                </div>
                            </NavLink>
                        </li>
                        ))};
                        
                    </ul>
                    <hr />
                    
                </div>
            </div>
        </div> 
        
    )
}
export default DashBoardSidebar;