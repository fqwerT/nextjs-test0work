import { configureStore } from '@reduxjs/toolkit'
import userReducers from './reducers/userReducers'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch,useSelector } from 'react-redux'
import postsReducer from './reducers/postsReducer'

export const store = configureStore({
  reducer: {
    users: userReducers,
    posts: postsReducer
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector