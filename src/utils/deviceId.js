import { createSlice } from "@reduxjs/toolkit";

const deviceId = createSlice({
  name: "deviceId",
  initialState: null,
  reducers: {
    setDeviceId: (state, action) => {
      return action.payload;
    },
  },
});

export const { setDeviceId } = deviceId.actions;

export default deviceId.reducer;
