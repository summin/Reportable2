const UPDATE_DATA = "UPDATE_DATA";

export const dataConstants = {
    UPDATE_DATA
}

export interface DataState {
  screen: string;
}

export interface ResultsState {
    days: object;
}

interface UpdateScreenAction {
  type: typeof UPDATE_DATA;
  data: DataState;
}

export type DataActionTypes = UpdateScreenAction;
