import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  search: string;
}

let initialState: IinitialState = {
  search: "",
};

const SearchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
  },
});

export const { setSearch } = SearchSlice.actions;
export default SearchSlice.reducer;
