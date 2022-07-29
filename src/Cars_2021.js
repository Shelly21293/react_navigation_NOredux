import React, {useState} from 'react'
import { getCars } from './MyCars'
import { Outlet, Link } from "react-router-dom";

const Cars_2021 = () => {
  let cars = getCars()
  const [myCars, setmyCar] = useState(cars)
  console.log(myCars)

  return (
    <div>Cars_2021 <hr></hr>

      {myCars.map(car => <div><Link to={car.model}>
        <table>
          {car.model}
        </table>
      </Link></div>)}
      <Outlet />
    </div>
  )
}

export default Cars_2021

{/* <Link to="cars_2021">Cars_2021</Link> */ }

// {cars.map(car => <div><Link to={car.model}>{car.model}</Link></div>)}
