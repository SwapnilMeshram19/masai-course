import React, { useEffect } from "react";
import {
  loading,
  error,
  getRestaurantDataSuccess,
} from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";

export default function RestaurantData() {
  const { restaurantData, isLoading, isError } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loading());
    fetch(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants"
    )
      .then((res) => res.json())
      .then((data) => dispatch(getRestaurantDataSuccess(data.data)))
      .catch((error) => dispatch(error()));
  }, []);

  console.log(restaurantData);
  return (
    <div>
      <h2> Restaurant Data </h2>
      <div className="restaurant_data">
        {/* Map the below div against your restaurant Data */}
        {isLoading ? (
          <div>loading...</div>
        ) : isError ? (
          <div>Something wrong happen...</div>
        ) : (
          restaurantData &&
          restaurantData.map((data) => (
            <div key={data.id}>
              <img src={data.image} />
              <div className="title">{data.name}</div>
              <div>{data.rating}</div>
            </div>
          ))
        )}
        {/* show image, name, type, rating and number_of_votes */}
      </div>
    </div>
  );
}
