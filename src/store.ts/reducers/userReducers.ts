import { UsersProps } from "@/interface/user";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the slice state
interface userState {
  usersData: any;
  dataToChange: null | UsersProps[];
}

// Define the initial state using that type
const initialState: userState = {
  usersData: null,
  dataToChange: null,
};

export const usersSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // filterUsersAge: (state, action) => {
    //   const { from, to } = action.payload;
    //   state.dataToChange = state.usersData
    //     .filter((item: any) => item.age > from)
    //     .filter((item: any) => item.age < to);
    // },
    setUsers: (state, action) => {
      state.usersData = action.payload;
    },
    filterByname: (state, action) => {
      const { value } = action.payload;
      if (state.usersData) {
        state.dataToChange = state.usersData.filter(
          (item: any) => item.name === value
        );
      } 
    },
  },
});

//export const { filterUsersAge } = usersSlice.actions;
export const { filterByname, setUsers } = usersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUsers = (state: RootState) => state.users.usersData;

export default usersSlice.reducer;
