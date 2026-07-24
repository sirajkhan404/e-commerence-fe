import React from "react";

const categories = [
    {
        id: 1,
        name: "Pizza",
        image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    },
    {
        id: 2,
        name: "Burger",
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    },
    {
        id: 3,
        name: "Pasta",
        image:
            "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400",
    },
    {
        id: 4,
        name: "Drinks",
        image:
            "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400",
    },
];

const Categories = () => {
    return (
        <section className="container py-5">

            <h2 className="text-center mb-5 fw-bold">
                Shop By Categories
            </h2>

            <div className="row">

                {categories.map((item) => (
                    <div className="col-md-3 mb-4" key={item.id}>

                        <div className="card border-0 shadow text-center h-100">

                            <img
                                src={item.image}
                                className="card-img-top"
                                alt={item.name}
                                style={{ height: "200px", objectFit: "cover" }}
                            />

                            <div className="card-body">

                                <h5>{item.name}</h5>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default Categories;