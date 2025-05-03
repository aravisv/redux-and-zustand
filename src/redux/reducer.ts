import { createSlice } from "@reduxjs/toolkit";
//import { ActionType, setUserName } from "./actions";

export type StoreStateType = {
  userName: string;
};

const initialState = {
  userName: "",
};

// export const appReducer = (state = initialState, action: ActionType) => {
//   switch (action.type) {
//     case "SET_USERNAME":
//       return {
//         ...state,
//         userName: action.payload,
//       };
//     default:
//       return state;
//   }
// };

const appReducer = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserName: (state, action) => {
      return {
        ...state,
        userName: action.payload,
      };
    },
  },
});

export const { setUserName } = appReducer.actions;
export default appReducer;
