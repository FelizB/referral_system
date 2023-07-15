import React from "react";
import "./css/dashboard.css";
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from "@mui/material";


function DashboardNavbar (){
        return(
            <nav id="nav" className="navbar dashnavbar">
            <div className="navbar-search-section">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            <div id="navitems" className="nav-items-container">
                <ul>
                    <li className="nav-items"><a href="#Faq">FAQ</a></li>
                    <li className="nav-items"><a href="#Footer">Contacts</a></li>
                </ul>
            </div>
            <div className="profile2 btn-group">
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                        <SettingsIcon/>
                    </button>
                    <ul className="dropdown-menu">
                            <li>Profile</li>
                            <li>Inbox</li>
                            <li>Chat</li>
                            <li>settings</li>
                    </ul>
            </div>
        </nav>
        )
}
export default DashboardNavbar;