import {
    apiConstants,
    ApiState,
    ApiActionTypes,
} from "./types";


const initialState: ApiState = {
    fetching: false,
    result: {},
    error: {}
};

export function apiReducer(
    state = initialState,
    action: ApiActionTypes
): ApiState {
    switch (action.type) {
        case apiConstants.API_REQUEST: 
            return {
                ...state,
                fetching: true
            };
        
        case apiConstants.API_SUCCESS: 
            return {
                ...state,
                fetching: false,
                result: action.data
            };
            case apiConstants.API_FAILURE: 
            return {
                ...state,
                fetching: false,
                error: action.data
            };
        
        default:
            return state;
    }
}
