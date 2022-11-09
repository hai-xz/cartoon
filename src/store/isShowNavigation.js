import { createSlice } from '@reduxjs/toolkit'

const isShowNavigation = {
  isShowNavigation:true
}
//该数据用来控制是否显示导航栏
export const userDataSlice = createSlice({
  name: 'isShowNavigation',
  initialState:isShowNavigation,
  reducers: {
    setShowNavigation:(state,action)=>{
      state.isShowNavigation=action.payload
    }
  },
})

export const { setShowNavigation } = userDataSlice.actions

export default userDataSlice.reducer