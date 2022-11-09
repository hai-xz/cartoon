import React,{useEffect} from 'react'
import { Outlet,useNavigate,useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import UserInfo from '../views/user/UserInfo'

export default function User() {

  const userData=useSelector(state=>state.userData)
  const navigate=useNavigate()
  const location=useLocation()

  useEffect(()=>{
    if(location.pathname==='/user' && userData.isSignin===false){
      navigate('/user/signin')
    }
  })

  return (
    <div>
      {userData.isSignin?<UserInfo/>:<></>}
      <Outlet/>
    </div>
  )
}
