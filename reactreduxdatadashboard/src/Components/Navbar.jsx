import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      {/*Provide the three links here */}

      <NavLink to="/coffee-data">
        <div>Coffee Data</div>
      </NavLink>
      <NavLink to="/employee-data">
        <div>Employee Data</div>
      </NavLink>
      <NavLink to="/restaurant-data">
        <div>Restaurant Data</div>
      </NavLink>
    </div>
  );
}

export { Navbar };
