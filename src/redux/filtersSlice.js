import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    name: "",
};
    
// export const filterReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case "filters/setFilter": {
//             return {
//                 ...state,
//           name: action.payload,
        
//             }
//         }
//         default:
//             return state;
// }
// }

 const filtersSlice = createSlice({
    name: "filter",
    initialState: INITIAL_STATE,
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload;
        }
    }
})

export const filterReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;