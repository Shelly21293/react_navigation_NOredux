import React from 'react'
import { useState } from 'react';
import { Outlet, Link, useParams, useNavigate } from "react-router-dom";
import { getCar, deleteCar } from "./MyCars"


const Car_2021 = () => {
    let params = useParams();
    let navigate = useNavigate();
    let car = getCar(params.carmodel)
    // const [myCar, setmyCar] = useState(car)
    console.log(car);
    return (
        <div>
            <main style={{ padding: "1rem", backgroundColor: "red" }}>
                <p><h3>Model: {car.model}</h3>
                    Year: {car.year}<br></br>
                    Color: {car.color}
                </p>
                <p><img src={`/media/${car.img}`} alt="" /></p>
                <p>
                    <button
                        onClick={() => {
                            deleteCar(car.model);
                            navigate("/cars/cars_2021");
                        }}
                    >
                        Delete
                    </button>
                </p>
            </main>
        </div>
    )
}

export default Car_2021