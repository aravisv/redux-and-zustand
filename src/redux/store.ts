// import { legacy_createStore as createStore } from "redux";
// import { appReducer } from "./reducer";

// export const appStore = createStore(appReducer);

import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducer";

export const appStore = configureStore({ reducer: appReducer });
