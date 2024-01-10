import { UsersProps } from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the slice state
type Users = null | UsersProps[] | undefined;
interface userState {
  usersData: Users;
  dataToChange: Users;
}

// Define the initial state using that type
const initialState: userState = {
  usersData: null,
  dataToChange: null,
};

export const usersSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.usersData = action.payload;
      state.dataToChange = action.payload;
    },
    filterByname: (state, action) => {
      //@ts-ignore
      state.usersData = state.dataToChange?.filter((item) => {
        return item.name.toLowerCase().includes(action.payload);
      });
    },
  },
});

//export const { filterUsersAge } = usersSlice.actions;
export const { filterByname, setUsers } = usersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUsers = (state: RootState) => state.users.usersData;

export default usersSlice.reducer;
