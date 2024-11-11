import React from "react";
import "./style.css"


const Footer = () =>{
    return(
        <React.Fragment>
            <section className="footer py-5">
                <section className="container py-5">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="menu">
                                <h2 className="pb-3">Userful Links</h2>
                                <hr />
                                <menu className="Userful-Links ps-0 d-flex justify-content-between flex-column flex-md-row">
                                    <ul className="py-md-2 ps-0">
                                        <li className="pb-3"><a href="/"><i class="bi bi-arrow-right-short"></i>Home</a></li>
                                        <li className="pb-3"><a href="/"><i class="bi bi-arrow-right-short"></i>About Us</a></li>
                                        <li className="pb-3"><a href="/"><i class="bi bi-arrow-right-short"></i>Company News</a></li>
                                        <li className="pb-3"><a href="/"><i class="bi bi-arrow-right-short"></i>Projects</a></li>
                                        <li className="pb-3"><a href="/"><i class="bi bi-arrow-right-short"></i>Careers</a></li>
                                    </ul>
                                    <ul className="py-md-2 ps-0">
                                        <li className="pb-3"><a href="/"><i class="bi bi-arrow-right-short"></i>Our Services</a></li>
                                        <li className="pb-3"><a href="/"><i class="bi bi-arrow-right-short"></i>Terms And Condition</a></li>
                                        <li className="pb-3"><a href="/"><i class="bi bi-arrow-right-short"></i>Shop</a></li>
                                        <li className="pb-3"><a href="/"><i class="bi bi-arrow-right-short"></i>Contact Us</a></li>
                                    </ul>
                                </menu>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="Business">
                                <h2 className="pb-3">Business Hours</h2>
                                <hr />
                                <div className="hours d-flex justify-content-between pt-2 pb-4">
                                    <span>Monday - Friday :</span>
                                    <span>9:00 am - 18:00 pm</span>
                                </div>
                                <div className="hours d-flex justify-content-between pb-4">
                                    <span>Saturday :</span>
                                    <span>9:00 am - 16:00 pm</span>
                                </div>
                                <div className="hours d-flex justify-content-between pb-4">
                                    <span>Sunday :</span>
                                    <span>Closed</span>
                                </div>
                                <span className="mb-3">We work all the holidays!</span>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="newsletter">
                                <h2 className="pb-3">Email Newsletter</h2>
                                <hr />
                                <form className="py-3">
                                    <input type="email" placeholder="Your Email Address"/>
                                    <button type="submit">SUBSCRIBE</button>
                                </form>
                                <p className="pt-2">Sign up for new Recover Construction Company content, updates, surveys & offers.</p>
                                <strong className="policy">Privacy Policy</strong>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Footer