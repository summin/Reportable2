const UPDATE_SCREEN = "UPDATE_SCREEN";
const UPDATE_BUTTONS = "UPDATE_BUTTONS";

export const contentConstants = {
    UPDATE_SCREEN,
    UPDATE_BUTTONS
}

export interface ScreenState {
    screen: string;
}

export interface NavState {
    buttons: string[];
}

export interface UpdateScreenAction {
    type: typeof UPDATE_SCREEN;
    data: string;
}

export interface UpdateButtonsAction {
    type: typeof UPDATE_BUTTONS;
    data: string[];
}

export type ScreenActionType = UpdateScreenAction
export type ButtonsActionType = UpdateButtonsAction
