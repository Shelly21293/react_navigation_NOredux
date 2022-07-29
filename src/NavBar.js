import React from 'react'
import { Outlet, Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <a className="nav-link">
                                <Link to="/cars">Cars</Link> |{" "}
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li> */}
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default NavBar