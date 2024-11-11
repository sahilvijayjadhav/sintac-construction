import React from "react";
import "./style.css"

const Contact = () =>{
    return(
        <React.Fragment>
            <section className="contactPage py-5">
                <section className="contactPage-section container py-5 text-center">
                    <h2>Contact Us</h2>
                </section>
            </section>
            <section className="container py-5">
                <section className="map">
                    <iframe className="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70906508758!2d73.69815015734062!3d18.524870614044374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1730874163520!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </section>
                <section className="row">
                    <section className="col-12 col-lg-7 py-5">
                        <form className="py-5">
                            <h3 className="pb-3">Get in Touch</h3>
                            <textarea className="form-control w-100 pb-5 mb-4" placeholder="Enter Message"></textarea>
                            <input type="text" className="form-control textInput d-inline mb-4 me-4" placeholder="Enter Your Name"/>
                            <input type="email" className="form-control emailInput d-inline mb-4" placeholder="Enter Email Address"/>
                            <input type="email" className="form-control w-100 d-inline mb-5" placeholder="Enter Subject"/>
                            <button type="submit" className="contact-btn rounded-2">SEND MESSAGE</button>
                        </form>
                    </section>
                    <section className="class col-8 col-lg-4">
                        <div className="d-flex pb-4">
                             <span className="contactIcon">
                                <i className="bi bi-house-door"></i>
                             </span>
                             <div className="iconInfo">
                                <h3>Buttonwood, California.</h3>
                                <p>Rosemead, CA 91770</p>
                             </div>
                        </div>
                        <div className="d-flex pb-4">
                             <span className="contactIcon">
                                <i className="bi bi-phone"></i>
                             </span>
                             <div className="iconInfo">
                                <h3>00 (440) 9865 562</h3>
                                <p>Mon to Fri 9am to 6pm</p>
                             </div>
                        </div>
                        <div className="d-flex pb-4">
                             <span className="contactIcon">
                                <i className="bi bi-envelope"></i>
                             </span>
                             <div className="iconInfo">
                                <h3>support@colorlib.com</h3>
                                <p>Send us your query anytime!</p>
                             </div>
                        </div>
                    </section>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Contact;