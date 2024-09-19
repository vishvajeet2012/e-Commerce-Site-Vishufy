import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  whishh: [],  // State key is 'whishh'
};

export const whishSlice = createSlice({
  name: 'whishh',  // Slice name is 'whishh'
  initialState,
  reducers: {
    whishlistatom: (state, action) => {  // Reducer function name is 'whishlistatom'
      const find = state.whishh.findIndex((value) => value.id === action.payload.id);
      if (find !== -1) {
        state.whishh[find] = { 
          ...state.whishh[find], 
          quantity: state.whishh[find].quantity + 1 
        };
      } else {
        state.whishh.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteWhishItem: (state, actions) => {
      state.whishh = state.whishh.filter((value) => value.id !== actions.payload.id)
    },
  },
});






// Action creators are generated for each case reducer function
export const { whishlistatom ,deleteWhishItem} = whishSlice.actions;

export default whishSlice.reducer;
