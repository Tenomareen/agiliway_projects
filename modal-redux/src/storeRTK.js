import { configureStore } from '@reduxjs/toolkit'
import modalReducer from "./components/modalSliceRTK";

export default configureStore({
  reducer: { 
      modal: modalReducer, 
    },
});
