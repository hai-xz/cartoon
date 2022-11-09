import React from 'react'
import { useSelector } from 'react-redux'
import UserHeader from '../UserHeader'
import UserComic from '../UserComic'

export default function UserInfo() {

  const userData=useSelector(state=>state.userData)

  return (
    <div style={{
      height:'100%',
      width:'100%',
      display:'flex',
      flexDirection:'column',
      overflow:'hidden'
    }}>
      <UserHeader userInfo={userData} />
      <UserComic />
    </div>
  )
}

