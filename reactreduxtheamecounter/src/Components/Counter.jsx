import React from "react";
import CounterValue from "./CounterValue";
import CounterButtons from "../Components/CounterButtons";
import "./counter.css";
import Theme from "./Theme";
import { useSelector } from "react-redux";
import { themeReducer } from "../Redux/themeReducer";

const Counter = () => {
  const { theme } = useSelector((state) => state.themeReducer);
  return (
    // the following div classname should be chnaged accrding to the theme
    <div
      data-testid="counter"
      className={`counter ${theme == "dark" && "counter-dark"}`}
    >
      <h1>Counter</h1>

      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
      <CounterValue />

      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
      <CounterButtons />
    </div>
  );
};

export default Counter;
