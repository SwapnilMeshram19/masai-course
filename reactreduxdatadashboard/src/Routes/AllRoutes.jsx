import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import CoffeeData from "../Components/CoffeeData";
import EmployeeData from "../Components/EmployeeData";
import RestaurantData from "../Components/RestaurantData";

const AllRoutes = () => {
  return <div>
    <Routes>
      <Route path="/coffee-data" element={<CoffeeData/>}></Route>
      <Route path="/employee-data" element={<EmployeeData/>}></Route>
      <Route path="/restaurant-data" element={<RestaurantData/>}></Route>
      <Route path="/" element={<CoffeeData/>}></Route>

    </Routes>
  </div>;
};

export { AllRoutes };
