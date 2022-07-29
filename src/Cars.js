import React from 'react'
import { Outlet, Link } from "react-router-dom";


const Cars = () => {
  return (
    <div>
        <Link to="cars_2021">Cars_2021</Link> | <Link to="cars_2022">Cars_2022</Link> <hr></hr>
        <Outlet />
    </div>
  )
}

export default Cars