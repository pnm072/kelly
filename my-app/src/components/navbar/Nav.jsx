import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
 function Nav() {
  return (
   <>
     <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <a class="navbar-brand logo me-auto" href="#">KELLY</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav m-auto">
                    <li class="nav-item active">
                        <Link to={"/"} class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link to={"/about"} class="nav-link">About</Link>
                    </li>
                    <li class="nav-item">
                    <Link to={"/resume"} class="nav-link">Resume</Link>
                    </li>
                    <li class="nav-item">
                    <Link to={"/services"} class="nav-link">Services</Link>
                    </li>
                    <li class="nav-item">
                    <Link to={"/portfolio"} class="nav-link">Portfolio</Link>
                    </li>
                    <li class="nav-item">
                    <Link to={"/contact"} class="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
            <div class="nav-icon">
                <a href="#" class="twitter text-muted"><i class="fa-brands fa-twitter"></i></a>
                <a href="#" class="facebook text-muted"><i class="fa-brands fa-facebook"></i></a>
                <a href="#" class="instagram text-muted"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" class="linkedin text-muted"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </nav>
    </div>
   </>
  )
}
export default Nav
