import { createSlice } from '@reduxjs/toolkit'

const userState = {
  isSignin:false,
  id:null,
  name:'-1',
  createTime:0,
  favoriteList:[]
}

export const userDataSlice = createSlice({
  name: 'userData',
  initialState:userState,
  reducers: {
    setSignin: (state,action) => {
      state.isSignin= action.payload
    },
    setFavoriteList:(state,action)=>{
      state.favoriteList=action.payload
    },
    setUserInfo:(state,action)=>{
      state.id=action.payload.id
      state.name=action.payload.name
      state.createTime=action.payload.createTime
    }
  },
})

export const { setSignin, setFavoriteList, setUserInfo } = userDataSlice.actions

export default userDataSlice.reducer