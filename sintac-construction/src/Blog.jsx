import React from "react";
import "./style.css"

const Blog = () =>{
    return(
        <React.Fragment>
            <section className="blogPage py-5">
                <section className="blogPage-section container py-5 text-center">
                    <h2>Our Blog</h2>
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
        </React.Fragment>
    )
}

export default Blog;