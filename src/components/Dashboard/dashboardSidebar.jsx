import React from "react";
import "./css/dashboard.css";
import WidgetsIcon from '@mui/icons-material/Widgets';
import DashboardIcon from '@mui/icons-material/Dashboard';


function DashBoardSidebar(){
    return(
        <div>
            <div className="sidebar">
            <div className="d-flex flex-column flex-shrink-0 p-3" >
                    <br />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link nav-link-title">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link ">
                            <DashboardIcon className="sidebar-icons"/>
                                Default
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link">
                            <DashboardIcon className="sidebar-icons"/>
                                Analytics
                            </a>
                        </li>
                    </ul>
                    <hr/>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link nav-link-title">
                                Application
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">
                            <DashboardIcon className="sidebar-icons"/>
                                Default
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link">
                            <DashboardIcon className="sidebar-icons"/>
                               Analytics
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">
                            <DashboardIcon className="sidebar-icons"/>
                                Products
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <div class="dropdown">
                    <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
                        <strong>mdo</strong>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#">New project</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default DashBoardSidebar;