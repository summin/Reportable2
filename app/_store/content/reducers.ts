import { combineReducers } from "redux";
import {
    contentConstants,
    NavState,
    ScreenState,
    ButtonsActionType,
    ScreenActionType 
} from "./types";

export function screenReducer(
    state: ScreenState = {
        screen: 'metrics'
    },
    action: ScreenActionType 
): ScreenState {
    switch (action.type) {
        case contentConstants.UPDATE_SCREEN: {
            return {
                screen: action.data
            };
        }
        default:
            return <ScreenState>state;
    }
}

export function navReducer(
    state: NavState = {
        buttons: ["default x", "default y"]
    },
    action: ButtonsActionType
): NavState {
    switch (action.type) {
        case contentConstants.UPDATE_BUTTONS: {
            return {
                buttons: action.data
            };
        }
        default:
            return <NavState>state;
    }
}

export const contentReducer = combineReducers({
    screen: screenReducer,
    nav: navReducer,
    metrics: navReducer,
});