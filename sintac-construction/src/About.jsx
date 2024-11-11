import React from "react";
import "./style.css"


const About = () =>{
    return(
        <React.Fragment>
            <section className="aboutPage py-5">
                <section className="aboutPage-section container py-5 text-center">
                    <h2>About Us</h2>
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
export default About;