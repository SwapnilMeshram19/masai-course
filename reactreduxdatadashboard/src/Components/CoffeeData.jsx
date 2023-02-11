import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCoffeeDataSuccess,
  loading,
  error,
} from "../Redux/AppReducer/action";

export default function CoffeeData() {
  const { coffeeData, isLoading, isError } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loading());
    fetch(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee"
    )
      .then((res) => res.json())
      .then((data) => dispatch(getCoffeeDataSuccess(data.data)))
      .catch((error) => dispatch(error()));
  }, []);

  return (
    <div>
      <h2>Coffee Data</h2>
      <div className="coffee_data">
        {/* map the below div against your coffee data */}
        {isLoading ? (
          <div>loading...</div>
        ) : isError ? (
          <div>Something wrong happen...</div>
        ) : (
          coffeeData &&
          coffeeData.map((data) => (
            <div key={data.id}>
              <img src={data.image} />
              <div className="title">{data.title}</div>
              <div>{data.price}</div>
            </div>
          ))
        )}
        {/* Show image, title and price  */}
      </div>
    </div>
  );
}
