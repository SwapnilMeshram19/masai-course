import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployeeDataSuccess,
  loading,
  error,
} from "../Redux/AppReducer/action";

export default function EmployeeData() {
  const { employeeData, isLoading, isError } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loading());
    fetch(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees"
    )
      .then((res) => res.json())
      .then((data) => dispatch(getEmployeeDataSuccess(data.data)))
      .catch((error) => dispatch(error()));
  }, []);

  return (
    <div>
      <h2>Employee Data</h2>
      <div className="employee_data">
        {/* Map the below div against yoru employee data */}
        {isLoading ? (
          <div>loading...</div>
        ) : isError ? (
          <div>Something wrong happen...</div>
        ) : (
          <div className="data">
            {employeeData &&
              employeeData.map((data) => (
                <div key={data.id}>
                  <img src={data.image} />
                  <div className="title">{data.name}</div>
                  <div>{data.salary}</div>
                </div>
              ))}
          </div>
        )}

        {/* Show image name, gender, and department */}
      </div>
    </div>
  );
}
