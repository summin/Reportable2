import { apiKey } from '../../_definitions'
import { get } from './service'
import {
    apiConstants,
} from "./types";

const buildApiQuery = (city: string, apiKey: string): string => {
    return `?q=${city}&APPID=${apiKey}`
}

export function getData(city: string): any {
    console.log("a")
    return (dispatch: any): any => {
        console.log("b")
        dispatch(request());

        get(buildApiQuery(city, apiKey))
            .then(
                (res: object) => dispatch(success(res)),
                (error: object) => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: apiConstants.API_REQUEST } }
    function success(res: object) { return { type: apiConstants.API_SUCCESS, result: res } }
    function failure(error: string) { return { type: apiConstants.API_FAILURE, error: error } }
}