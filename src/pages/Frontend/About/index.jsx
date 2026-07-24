import React from "react";

const About = () => {
    return (
        <main>
            <div className="container">

                {/* 1. Header Banner */}
                <div className="text-center mb-5 mt-5">
                    <span className="badge bg-danger-subtle text-danger fs-6 px-3 py-2 rounded-pill fw-bold mb-2">
                        Who We Are
                    </span>
                    <h1 className="display-5 fw-bold text-dark">
                        Crafting Unforgettable Culinary Experiences
                    </h1>
                    <p className="lead text-muted col-lg-8 mx-auto">
                        We are more than just a food delivery platform. We are a community of food lovers, dedicated chefs, and fast drivers working together to bring happiness to your doorstep.
                    </p>
                </div>

                {/* 2. Brand Story Section */}
                <div className="row align-items-center mb-5 gy-4">
                    <div className="col-lg-6">
                        <div className="position-relative">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1743169050535-da784dcceb5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXBwJTIwc3RvcmUlMjBmb29kc3xlbnwwfHwwfHx8MA%3D%3D"
                                alt="Chef Preparing Food"
                                className="img-fluid rounded-4 shadow-lg"
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 ps-lg-4">
                        <h2 className="fw-bold text-dark mb-3">
                            Driven By Passion, Fueled By Freshness
                        </h2>
                        <p className="text-secondary">
                            Founded in 2024, Food Store started with a simple vision: making restaurant-quality food accessible to everyone at home without compromising on taste, heat, or nutrition.
                        </p>
                        <p className="text-secondary">
                            We partner directly with local organic farms and top-rated suppliers to ensure that every dish served is packed with real flavor and top-grade ingredients.
                        </p>

                        <div className="p-3 bg-white border-start border-danger border-4 rounded shadow-sm my-4">
                            <p className="fst-italic text-dark mb-0 fw-medium">
                                "Our promise is simple: If it isn't fresh enough for our own family, it doesn't leave our kitchen."
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. Core Values / Why Choose Us */}
                <div className="my-5 py-4">
                    <div className="text-center mb-4">
                        <h2 className="fw-bold">Why Food Lovers Choose Us</h2>
                        <p className="text-muted">The pillars that define our service every single day.</p>
                    </div>

                    <div className="row g-4">
                        {/* Card 1 */}
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 border-0 shadow-sm p-3 rounded-4 text-center">
                                <div className="card-body">
                                    <div className="bg-danger-subtle text-danger rounded-circle d-inline-flex p-3 mb-3 fs-3">
                                        🥗
                                    </div>
                                    <h5 className="card-title fw-bold">100% Farm Fresh</h5>
                                    <p className="card-text text-muted small">
                                        Ingredients are sourced daily to guarantee maximum flavor and nutrition in every bite.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 border-0 shadow-sm p-3 rounded-4 text-center">
                                <div className="card-body">
                                    <div className="bg-danger-subtle text-danger rounded-circle d-inline-flex p-3 mb-3 fs-3">
                                        ⚡
                                    </div>
                                    <h5 className="card-title fw-bold">Hyper-Fast Delivery</h5>
                                    <p className="card-text text-muted small">
                                        Smart route optimization ensures your order arrives piping hot within 30 minutes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 border-0 shadow-sm p-3 rounded-4 text-center">
                                <div className="card-body">
                                    <div className="bg-danger-subtle text-danger rounded-circle d-inline-flex p-3 mb-3 fs-3">
                                        👨‍🍳
                                    </div>
                                    <h5 className="card-title fw-bold">Master Chefs</h5>
                                    <p className="card-text text-muted small">
                                        Recipes curated and crafted by certified culinary experts with years of experience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 border-0 shadow-sm p-3 rounded-4 text-center">
                                <div className="card-body">
                                    <div className="bg-danger-subtle text-danger rounded-circle d-inline-flex p-3 mb-3 fs-3">
                                        🛡️
                                    </div>
                                    <h5 className="card-title fw-bold">Zero Contact Safety</h5>
                                    <p className="card-text text-muted small">
                                        Strict hygiene protocols, sealed packaging, and safe delivery options for peace of mind.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Dark Mode Stats Banner (Redesigned) */}
                <div className="bg-dark text-white rounded-4 p-5 my-5 shadow-lg">
                    <div className="row text-center gy-4">
                        <div className="col-6 col-md-3">
                            <h2 className="display-5 fw-bold text-danger">150+</h2>
                            <p className="text-light-50 mb-0">Daily Dishes</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <h2 className="display-5 fw-bold text-danger">50K+</h2>
                            <p className="text-light-50 mb-0">Happy Foodies</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <h2 className="display-5 fw-bold text-danger">99.8%</h2>
                            <p className="text-light-50 mb-0">On-Time Orders</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <h2 className="display-5 fw-bold text-danger">4.9★</h2>
                            <p className="text-light-50 mb-0">Customer Rating</p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default About;