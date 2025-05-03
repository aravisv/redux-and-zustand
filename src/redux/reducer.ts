import { ActionType } from "./actions";

export type StoreStateType = {
  userName: string;
};

const initialState = {
  userName: "",
};

export const appReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};
