import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  portfolio: null,
};

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setPayload: (state, action) => {
      const { data } = action.payload;
      state.portfolio = data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPayload } = portfolioSlice.actions;

export default portfolioSlice.reducer;
