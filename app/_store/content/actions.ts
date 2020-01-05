import { 
    contentConstants
} from "./types";

export function updateScreen(newScreen: string) {
  return {
    type: contentConstants.UPDATE_SCREEN,
    data: newScreen
  };
}

export function setNavButtons(newButtons: string[]) {
    return {
        type: contentConstants.UPDATE_BUTTONS,
        data: newButtons
    };
}
