import React from "react";
import { Link } from "react-router-dom";

const SpecialOffers = () => {
    return (
        <section className="container py-5">

            <div
                className="p-5 rounded text-center text-white"
                style={{
                    background:
                        "linear-gradient(135deg,#ff4d4d,#ff8c00)"
                }}
            >

                <h1 className="fw-bold">
                    🔥 50% OFF
                </h1>

                <h3 className="my-3">
                    On Your First Order
                </h3>

                <p>
                    Use Coupon Code
                </p>

                <h2 className="bg-white text-danger d-inline-block px-4 py-2 rounded">
                    FOOD50
                </h2>

                <br />

                <Link to="/products">
                    <button className="btn btn-light mt-4 px-5">
                        Order Now
                    </button></Link>

            </div>

        </section>
    );
};

export default SpecialOffers;