import axios from "axios";
export const GET_SMURF_START = "GET_SMURF_START";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAIL = "GET_SMURF_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "GET_SMURF_FAIL";

export const getSmurf = () => dispatch => {
    dispatch({ type: GET_SMURF_START })
    axios.get("http://localhost:3333/smurfs")
        .then(res => {
            dispatch({ type: GET_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: GET_SMURF_FAIL, payload: err })
        })
}

export const addSmurf = aSmurf => dispatch => {
    dispatch({ type: ADD_SMURF })
    axios.post("http://localhost:3333/smurfs", aSmurf)
        .then(res => {
            dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: ADD_SMURF_FAIL, payload: err })
        })
}