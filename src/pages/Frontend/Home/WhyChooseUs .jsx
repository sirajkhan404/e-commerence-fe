import React from "react";

const services = [
    {
        title: "Fast Delivery",
        icon: "🚚",
        desc: "Get your order delivered within 30 minutes."
    },
    {
        title: "Fresh Ingredients",
        icon: "🥗",
        desc: "Only fresh and premium quality ingredients."
    },
    {
        title: "Best Chefs",
        icon: "👨‍🍳",
        desc: "Prepared by experienced professional chefs."
    },
    {
        title: "Secure Payment",
        icon: "💳",
        desc: "Multiple secure payment methods available."
    },
];

const WhyChooseUs = () => {
    return (
        <section className="container py-5">

            <h2 className="text-center fw-bold mb-5">
                Why Choose Us
            </h2>

            <div className="row">

                {services.map((item, index) => (

                    <div className="col-md-3 mb-4" key={index}>

                        <div className="card border-0 shadow h-100 text-center p-4">

                            <h1>{item.icon}</h1>

                            <h4 className="mt-3">{item.title}</h4>

                            <p className="text-muted">
                                {item.desc}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default WhyChooseUs;