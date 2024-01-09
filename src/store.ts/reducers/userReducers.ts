import { UsersProps } from "@/interface/user";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the slice state
interface userState {
  usersData: UsersProps[];
  dataToChange: null | UsersProps[];
}

// Define the initial state using that type
const initialState: userState = {
  usersData: [
    {
      name: "user18y6756",
      age: 23,
      id: 2,
      number: "+798654321",
    },
    {
      name: "username eight",
      age: 35,
      id: 3,
      number: "+788654321",
    },
    {
      name: "koko",
      age: 17,
      id: 4,
      number: "+708654321",
    },
    {
      name: "skibidi",
      age: 19,
      id: 5,
      number: "+798652321",
    },
    {
      name: "0_0",
      age: 28,
      id: 6,
      number: "+791654321",
    },
    {
      name: "123",
      age: 22,
      id: 7,
      number: "+998654321",
    },
  ],
  dataToChange: null,
};

export const usersSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    filterUsersAge: (state, action) => {
      const { from, to } = action.payload;
      state.dataToChange = state.usersData
        .filter((item: any) => item.age > from)
        .filter((item: any) => item.age < to);
    },
    filterByname: (state, action) => {
      const { value } = action.payload;
      state.dataToChange = state.usersData.filter(
        (item: any) => item.name === value
      );
    },
  },
});

export const { filterUsersAge } = usersSlice.actions;
export const { filterByname } = usersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
