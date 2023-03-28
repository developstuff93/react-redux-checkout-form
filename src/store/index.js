import { configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import itemsReducer from "./items/slice";

export default configureStore({
  reducer: {
    form: formReducer,
    items: itemsReducer,
  },
});
