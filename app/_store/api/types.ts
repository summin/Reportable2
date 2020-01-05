const GET_WEATHER = "GET_WEATHER";
const API_REQUEST = "API_REQUEST";
const API_SUCCESS = "API_SUCCESS";
const API_FAILURE = "API_FAILURE";

export const apiConstants = {
    GET_WEATHER,
    API_REQUEST,
    API_SUCCESS,
    API_FAILURE,
}

export interface ApiState {
    fetching: boolean;
    result: object;
    error: object;
}

interface Request {
    type: typeof API_REQUEST;
    data?: object;
}

interface Success {
    type: typeof API_SUCCESS;
    data?: object;
}

interface Failure {
    type: typeof API_FAILURE;
    data?: object;
}

export type ApiActionTypes = Request | Success | Failure;