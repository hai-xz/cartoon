import { configureStore } from '@reduxjs/toolkit'
import userState from './createData'
import isShowNavigation from './isShowNavigation'

export const store = configureStore({
  reducer: {
    userData:userState,
    isShowNavigation:isShowNavigation
  },
})