import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="container py-4 py-lg-5">
            <div className="row align-items-center gy-4">

                {/* Text Content Block */}
                <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="display-4 fw-bold">
                        Fresh &amp; Delicious Food Delivered To Your Door
                    </h1>

                    <p className="text-muted my-3 my-md-4 fs-5">
                        Order your favorite meals anytime. We deliver fresh, healthy,
                        and delicious food at affordable prices.
                    </p>

                    {/* Action Buttons */}
                    <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
                        <Link to="/products" className="text-decoration-none">
                            <button className="btn btn-danger btn-lg w-100 px-4">
                                Order Now
                            </button>
                        </Link>

                        <Link to="/auth/register" className="text-decoration-none">
                            <button className="btn btn-outline-dark btn-lg w-100 px-4">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Hero Image Block */}
                <div className="col-lg-6 text-center">
                    <img
                        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700"
                        alt="Delicious Food"
                        className="img-fluid rounded-4 shadow"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;