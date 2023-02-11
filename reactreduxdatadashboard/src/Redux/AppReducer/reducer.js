import * as types from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  coffeeData: [],
  restaurantData: [],
  employeeData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.GET_COFFEE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        coffeeData: action.payload,
      };

    case types.GET_EMPLOYEE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        employeeData: action.payload,
      };

    case types.GET_RESTAURANT_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        restaurantData: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export { reducer };
