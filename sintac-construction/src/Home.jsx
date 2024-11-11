import React from "react";
import { Link } from "react-router-dom";
import All from "./All";
import "./style.css"

const Home = () =>{
    return(
        <React.Fragment>
            <main>
                <section className="hero">
                    <section className="hero-inner container text-center ">
                        <h2 className="py-2">Future construction</h2>
                        <div className="line-bottom mb-1"></div>
                        <h1>Make your dream home
                        with sintac</h1>
                        <a className="btn mt-5" href={"/"}>GET A QUOTE</a>
                    </section>
                </section>
                <section className="container py-5">
                    <div className="row py-5">
                        <div className="col-lg-6 d-none d-lg-flex">
                            <div>
                                <img src="../public/images/illustration/about1.png" alt="about1" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 py-5">
                            <div className="about-details offset-lg-3 py-5">
                                <h2 className="py-2">WE ARE ON EXPERT THIS FIELD BUILDINGS SOLUTIONS SINCE 1974.</h2>
                                <p className="pt-2 pb-4">Void gathering midst together you're shall. Beast set he likeness spirit winged two all fourth they're gathered seasons very may heaven saying. Fly image th</p>
                                <a className="btn" href={"/"}>LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="provide py-5">
                    <section className="container text-center py-5">
                        <div className="line-top my-3"></div>
                        <h2>What We Provide</h2>
                        <p className="py-1">Together female let signs for for fish fowl may first.</p>
                        <div className="row py-5">
                            <div className="col-12 col-md-6 col-lg-3 pb-4 pb-lg-0">
                                <div className="provide-card text-center">
                                    <img className="my-3" src="../public/images/illustration/i1.png" alt="provide-img" />
                                    <h3 className="py-2">Architecture Design</h3>
                                    <p className="pb-1">You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 pb-4 pb-lg-0">
                                <div className="provide-card text-center">
                                    <img className="my-3" src="../public/images/illustration/i2.png" alt="provide-img" />
                                    <h3 className="py-2">Building Construction</h3>
                                    <p className="pb-1">You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 pb-4 pb-lg-0">
                                <div className="provide-card text-center">
                                    <img className="my-3" src="../public/images/illustration/i3.png" alt="provide-img" />
                                    <h3 className="py-2">Building Renovation</h3>
                                    <p className="pb-1">You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 pb-4 pb-lg-0">
                                <div className="provide-card text-center">
                                    <img className="my-3" src="../public/images/illustration/i4.png" alt="provide-img" />
                                    <h3 className="py-2">Building Maintenance</h3>
                                    <p className="pb-1">You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="High-Quality-Service">
                    <section className="container pt-5">
                        <section className="row">
                            <div className="col-12 col-lg-6">
                                <div className="offset-1 personalize-section">
                                    <img src="../public/images/illustration/about2.png" alt="about2" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 py-5">
                                <div className="personalize-section-details py-3">
                                    <h2>Providing Personalized And
                                    High Quality Service .</h2>
                                    <p className="py-4">Grass bearing make open multiply that may fly cattle gathering be unto void moving. Blessed one evening had them heaven divide said heaven whose brought he. Give It fowl green.</p>
                                    <div className="counter d-flex">
                                        <div className="counters pe-5">
                                            <span className="span1 d-block">15K+</span>
                                            <span className="span2">Happy customer</span>
                                        </div>
                                        <div className="counters pe-5">
                                            <span className="span1 d-block">10K+</span>
                                            <span className="span2">Project Done</span>
                                        </div>
                                        <div className="counters pe-5">
                                            <span className="span1 d-block">9/10</span>
                                            <span className="span2">Average Rating</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
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
                <section className="news container text-center py-5 my-5">
                        <div className="line-top mb-3"></div>
                        <h2>Our Recent News</h2>
                        <p className="pb-5">Together female let signs for for fish fowl may first.</p>
                        <div className="row">
                        <div className="col-12 col-md-4 mb-3">
                                <div className="blog w-100">
                                    <div className="rounded-3 mb-4 w-100">
                                        <img className="w-100 h-auto" src="../public/images/illustration/blog1.jpg" alt="blogimg" />
                                    </div>
                                    <span className="pe-3"><i class="bi bi-calendar pe-2"></i>Feb 14, 2019</span>|
                                    <span className="ps-3"><i class="bi bi-folder pe-2"></i>company</span>
                                    <p className="pt-3">Yielding called winged years they are
                                    likeness hath morning</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mb-3">
                                <div className="blog w-100">
                                    <div className="rounded-3 mb-4 w-100">
                                        <img className="w-100 h-auto" src="../public/images/illustration/blog2.jpg" alt="blogimg" />
                                    </div>
                                    <span className="pe-3"><i class="bi bi-calendar pe-2"></i>Feb 14, 2019</span>|
                                    <span className="ps-3"><i class="bi bi-folder pe-2"></i>company</span>
                                    <p className="pt-3">Yielding called winged years they are
                                    likeness hath morning</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mb-3">
                                <div className="blog w-100">
                                    <div className="rounded-3 mb-4 w-100">
                                        <img className="w-100 h-auto" src="../public/images/illustration/blog3.jpg" alt="blogimg" />
                                    </div>
                                    <span className="pe-3"><i class="bi bi-calendar pe-2"></i>Feb 14, 2019</span>|
                                    <span className="ps-3"><i class="bi bi-folder pe-2"></i>company</span>
                                    <p className="pt-3">Yielding called winged years they are
                                    likeness hath morning</p>
                                </div>
                            </div>
                        </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export default Home;