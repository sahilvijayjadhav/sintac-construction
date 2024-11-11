import React from "react";
import './style.css';
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Services from "./Services";
import Project from "./Project";
import Blog from "./Blog";
import Contact from "./Contact";

const App = () =>{
    return(
        <React.Fragment>
            <header>
                <section className="TopHeader d-none d-md-flex">
                    <section className="container d-flex justify-content-between align-items-center">
                        <div className="top-right-header">
                            <a className="pe-5" to="/">
                                <i className="bi bi-phone pe-2"></i>
                                <span>+1 (205) 325-1235</span>
                            </a>
                            <a to="/">
                                <i className="bi bi-geo-alt pe-2"></i>
                                <span>4256 Marshville Road, Poughkeepsie, NY 12601</span>
                            </a>
                        </div>
                        <div className="top-left-header">
                            <span className="px-3">Follow us:</span>
                            <a to="/" className="px-2"><i className="bi bi-facebook"></i></a>
                            <a to="/" className="px-2"><i className="bi bi-twitter"></i></a>
                            <a to="/" className="px-2"><i className="bi bi-instagram"></i></a>
                            <a to="/" className="px-2"><i className="bi bi-skype"></i></a>
                            <a to="/" className="px-2"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </section>
                </section>
                <section className="navbar navbar-expand-lg py-0">
                    <section className="container">
                        <Link to="/" className="navbar-brand">
                            <img className="img-fluid" src="../public/images/illustration/logo.png" alt="logo" />
                        </Link>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mymenu">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <nav id="mymenu" className="collapse navbar-collapse">
                            <ul className="navbar-nav ms-auto me-5">
                                <li className="nav-item px-3"><Link to={"/"} className="nav-link">HOME</Link></li>
                                <li className="nav-item px-3"><Link to={"/About"} className="nav-link">ABOUT</Link></li>
                                <li className="nav-item px-3"><Link to={"/Services"} className="nav-link">SERVICES</Link></li>
                                <li className="nav-item px-3"><Link to={"/Project"} className="nav-link">PROJECT</Link></li>
                                <li className="nav-item px-3"><Link to={"/Blog"} className="nav-link">BLOG</Link></li>
                                <li className="nav-item px-3"><Link to={"/Contact"} className="nav-link">CONTACT</Link></li>
                            </ul>
                        </nav>
                        <div className="cart-search d-none d-lg-flex">
                            <Link to="/" className="px-3"><i className="bi bi-cart"></i></Link>
                            <Link to="/" className="px-3"><i className="bi bi-search"></i></Link>
                        </div>
                    </section>
                </section>    
            </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Services" element={<Services/>}/>
                <Route path="/Project" element={<Project/>}/>
                <Route path="/Blog" element={<Blog/>}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
        </React.Fragment>
    )
}

export default App;