import { DataState, dataConstants } from "./types";

export function updateScreen(newData: DataState) {
  return {
    type: dataConstants.UPDATE_DATA,
    data: newData
  };
}
