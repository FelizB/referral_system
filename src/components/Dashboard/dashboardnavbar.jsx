import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


function DashboardNavbar (){
        return(
            <nav id="nav" className="navbar dashnavbar">
            <div className="navbar-logo">
                <a class="navbar-brand" href="#Land">
                 <span>Rf</span> Board
                </a>
            </div>
            <div className="navbar-menu-icon">
                <MenuIcon />
            </div>
            <div div="navbar-search-section">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            <div id="navitems" className="nav-items-container">
                <ul>
                    <li className="nav-items"><a href="#Faq">FAQ</a></li>
                    <li className="nav-items"><a href="#Footer">Contacts</a></li>
                </ul>
            </div>
            <div>
                <Button endIcon={<SettingsIcon/>}></Button>
            </div>
        </nav>
        )
}
export default DashboardNavbar;