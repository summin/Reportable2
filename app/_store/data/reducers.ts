import {
    dataConstants,
    DataState,
    DataActionTypes
} from "./types";

const initialState: DataState = {
    screen: "search",
};

export function dataReducer(
    state = initialState,
    action: DataActionTypes
): DataState {
    switch (action.type) {
        case dataConstants.UPDATE_DATA: {
            return {
                ...state,
                ...action.data
            };
        }
        default:
            return state;
    }
}
