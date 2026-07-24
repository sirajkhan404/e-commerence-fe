import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="container py-5">
            <div className="row align-items-center">

                {/* Image */}
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <img
                        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700"
                        alt="About Food Store"
                        className="img-fluid rounded-4 shadow opacity-100"
                    />
                </div>

                {/* Content */}
                <div className="col-lg-6">

                    <h2 className="fw-bold mt-2 mb-4">
                        Fresh, Healthy & Delicious Food For Everyone
                    </h2>

                    <p className="text-muted">
                        Welcome to <strong>Food Store</strong>, where every meal is
                        prepared with passion and the freshest ingredients. Our mission is
                        to provide delicious food that satisfies your taste while ensuring
                        quality, hygiene, and affordability.
                    </p>

                    <p className="text-muted">
                        From mouth-watering burgers and crispy pizzas to healthy salads,
                        refreshing drinks, and delightful desserts, we offer a wide variety
                        of meals carefully prepared by our experienced chefs. Every order is
                        made fresh to guarantee the best taste and quality.
                    </p>

                    <p className="text-muted">
                        We believe that great food brings people together. That's why we
                        focus on fast delivery, premium ingredients, excellent customer
                        service, and affordable prices so you can enjoy your favorite meals
                        anytime, anywhere.
                    </p>

                    {/* Stats */}
                    <div className="row mt-4 text-center">

                        <div className="col-6 col-md-3 mb-3">
                            <h3 className="text-danger fw-bold">100+</h3>
                            <p className="mb-0">Food Items</p>
                        </div>

                        <div className="col-6 col-md-3 mb-3">
                            <h3 className="text-danger fw-bold">10K+</h3>
                            <p className="mb-0">Customers</p>
                        </div>

                        <div className="col-6 col-md-3 mb-3">
                            <h3 className="text-danger fw-bold">30 Min</h3>
                            <p className="mb-0">Delivery</p>
                        </div>

                        <div className="col-6 col-md-3 mb-3">
                            <h3 className="text-danger fw-bold">24/7</h3>
                            <p className="mb-0">Support</p>
                        </div>

                    </div>

                    <Link to="/about">
                        <button className="btn btn-danger mt-4 px-4 py-2">
                            Learn More
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default About;