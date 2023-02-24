import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = { time: null };

const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    settime: (state, action) => {
      state.time = action.payload;
    },
  },
});

const initialPopUpState = {
  showPopUp: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState: initialPopUpState,
  reducers: {
    togglePopup: (state) => {
      state.showPopUp = !state.showPopUp;
    },
  },
});

const store = configureStore({
  reducer: { time: timeSlice.reducer, popup: popupSlice.reducer },
});

export const togglePopup = popupSlice.actions;
export const userActions = timeSlice.actions;

export const selectTime = (state) => state.time.time;
export const selectPopUp = (state) => state.popup.showPopUp;

export default store;
