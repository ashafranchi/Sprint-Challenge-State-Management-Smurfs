import { GET_SMURF_START, GET_SMURF_SUCCESS, GET_SMURF_FAIL, ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAIL} from "../actions/a-index";

const initialState = {
    smurfs: [],
    getSmurf: false,
    addSmurf: false,
    updateSmurf: false,
    deleteSmurf: false,
    error: ""
};

const reducer = (state = initialState, action) => {
    console.log('reducer', action);
    switch (action.type) {
      case GET_SMURF_START:
        return {
          ...state,
          getSmurf: true,
          error: ''
        }
    case ADD_SMURF:
          return {
              ...state,
              getSmurf: false,
              addSmurf: true,
              error: ''
          }
    case ADD_SMURF_SUCCESS:
        return {
            ...state,
            smurfs: action.payload,
            getSmurf: false,
            addSmurf: false,
            error: ''
        }
    case ADD_SMURF_FAIL:
        return {
            ...state,
            getSmurf: false,
            addSmurf: false,
            error: action.payload
        }
    case GET_SMURF_SUCCESS:
        return {
        ...state,
        getSmurf: true,
        error: '',
        smurfs: [...state.smurfs, ...action.payload]
        };
    case GET_SMURF_FAIL:
        return {
            ...state,
            getSmurf: false,
            error: action.payload
        }
    default:
        return state;
    }
};
  
export default reducer;
  