//Complete the reducer function logic inside the curly braces {}

import { CHANGE_THEME } from "./actionTypes";

// the theme initstate shouldbe light
const initialState = {
  theme: "light",
};
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        theme: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export { themeReducer };
