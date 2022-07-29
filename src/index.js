import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cars from './Cars';
import Cars_2021 from './Cars_2021';
import Cars_2022 from './Cars_2022';
import Car_2021 from './Car_2021';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="cars" element={<Cars />}>
            <Route path="cars_2021" element={<Cars_2021 />}>
              <Route
                index
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>Select a car</p>
                  </main>
                }
              />
              <Route path=":carmodel" element={<Car_2021 />} />


            </Route>
            <Route path="cars_2022" element={<Cars_2022 />}></Route>
          </Route>

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

