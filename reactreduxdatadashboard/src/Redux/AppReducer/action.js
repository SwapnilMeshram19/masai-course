import { ERROR, GET_COFFEE_DATA_SUCCESS, GET_EMPLOYEE_DATA_SUCCESS, GET_RESTAURANT_DATA_SUCCESS, LOADING } from "./actionType"


export const loading = () => {
    return {
        type:LOADING,
    }
}

export const error = () =>{
    return {
        type:ERROR,
    }
}

export const getCoffeeDataSuccess = (payload) =>{
    return {
        type:GET_COFFEE_DATA_SUCCESS,
        payload
    }
}


export const getEmployeeDataSuccess = (payload) =>{
    return {
        type:GET_EMPLOYEE_DATA_SUCCESS,
        payload
    }
}

export const getRestaurantDataSuccess = (payload) =>{
    return {
        type:GET_RESTAURANT_DATA_SUCCESS,
        payload
    }
}