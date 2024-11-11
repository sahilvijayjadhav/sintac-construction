import React from "react";
import "./style.css"
import { Link } from "react-router-dom";
import All from "./All";

const Project = () =>{
    return(
        <React.Fragment>
            <section className="projectPage py-5">
                <section className="projectPage-section container py-5 text-center">
                    <h2>Our Project</h2>
                </section>
            </section>
            <section className="projects py-5">
                    <section className="container text-center py-5">
                        <div className="line-top mb-3"></div>
                        <h2>Our Recent Project</h2>
                        <p className="pb-5">Together female let signs for for fish fowl may first.</p>
                        <ul className="d-flex project-menu py-3">
                            <li className="pe-5"><Link to={"/"}>ALL</Link></li>
                            <li className="pe-5"><Link to={"/"}>BUILDINGS</Link></li>
                            <li className="pe-5"><Link to={"/"}>OFFICES</Link></li>
                            <li className="pe-5"><Link to={"/"}>REBUILD</Link></li>
                            <li className="pe-5"><Link to={"/"}>ARCHITECTURE</Link></li>
                        </ul>
                        <All/>
                    </section>
            </section>
            <section className="customer-reviews py-5">
                    <section className="container text-center py-5">
                        <div className="line-top mb-3"></div>
                        <h2>Customer reviews</h2>
                        <p className="pb-5">Together female let signs for for fish fowl may first.</p>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <a className="reviews d-flex flex-row rounded-2" href="#">
                                    <div className="pe-4">
                                        <img className="rounded-circle" src="../public/images/illustration/tes1.jpg" alt="customer" />
                                    </div>
                                    <div className="review-details">
                                        <strong className="d-block pb-1">Adame Nesane</strong>
                                        <span>Chief Customer</span>
                                        <p className="pt-4">You're had. Subdue grass Meat us winged years you'll doesn't. fruit two also won one yielding creepeth third give may never lie alternet food.</p>
                                    </div>
                                    <img className="cotation" src="../public/images/illustration/cotation.png" alt="" />
                                </a>
                            </div>
                            <div className="d-none d-lg-block col-lg-6">
                                <a className="reviews d-flex flex-row rounded-2" href="#">
                                    <div className="pe-4">
                                        <img className="rounded-circle" src="../public/images/illustration/tex2.jpg" alt="customer" />
                                    </div>
                                    <div className="review-details">
                                        <strong className="d-block pb-1">Adame Nesane</strong>
                                        <span>Chief Customer</span>
                                        <p className="pt-4">You're had. Subdue grass Meat us winged years you'll doesn't. fruit two also won one yielding creepeth third give may never lie alternet food.</p>
                                    </div>
                                    <img className="cotation" src="../public/images/illustration/cotation.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </section>
            </section>
        </React.Fragment>
    )
}

export default Project;