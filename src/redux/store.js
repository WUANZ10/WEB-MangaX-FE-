<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/counterSlice'
=======
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slides/counterSlice";
import userReducer from "./slides/userSlice"
>>>>>>> master

export const store = configureStore({
  reducer: {
    counter: counterReducer,
<<<<<<< HEAD
  },
})
=======
    user: userReducer,
  },
});
>>>>>>> master
