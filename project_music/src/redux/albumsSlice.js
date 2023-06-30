import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  img: "",
  nam: "",
  year: "",
};

export const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    albumsUpd: (state, action) => {
      state.id = action.payload.id;
      state.img = action.payload.img;
      state.nam = action.payload.nam;
      state.year = action.payload.year;
      
    },
  },
});

export const { albumsUpd } = albumsSlice.actions;

export default albumsSlice.reducer;
