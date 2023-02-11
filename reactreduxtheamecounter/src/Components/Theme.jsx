import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleTheme } from "../Redux/action";

const Theme = () => {
  const { theme } = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();

  return (
    <div className="theme-button">
      {theme == "light" ? (
        <button disabled>Switch to Light</button>
      ) : (
        <button onClick={() => dispatch(handleTheme("light"))}>
          Switch to Light
        </button>
      )}
      {theme == "dark" ? (
        <button disabled>Switch to Dark</button>
      ) : (
        <button onClick={() => dispatch(handleTheme("dark"))}>
          Switch to Dark
        </button>
      )}
    </div>
  );
};

export default Theme;
