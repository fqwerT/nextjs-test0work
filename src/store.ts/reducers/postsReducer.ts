import { PostsProps, UsersProps } from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the slice state
type Posts = null | PostsProps[];

interface userState {
  usersPosts: Posts;
  postsToChange: Posts;
}

// Define the initial state using that type
const initialState: userState = {
  usersPosts: null,
  postsToChange: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.usersPosts = action.payload;
    },
    // filterByname: (state, action) => {
    //   const { value } = action.payload;
    //   if (state.usersPosts) {
    //     state.postsToChange = state.usersPosts.filter(
    //       (item: any) => item.name === value
    //     );
    //   }
    // },
  },
});

//export const { filterUsersAge } = usersSlice.actions;
export const { setPosts } = postsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPosts = (state: RootState) => state.posts.usersPosts;

export default postsSlice.reducer;
