import { createSlice } from '@reduxjs/toolkit'
import defimg from '../assets/defimg2.jpg'

const userState = {
  isSignin:false,
  id:null,
  name:'-1',
  createTime:0,
  headSrc:defimg,
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
      state.headSrc=action.payload.headSrc
    }
  },
})

export const { setSignin, setFavoriteList, setUserInfo } = userDataSlice.actions

export default userDataSlice.reducer