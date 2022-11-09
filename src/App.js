import React,{useEffect} from 'react'
import { useRoutes,useNavigate } from 'react-router-dom'
import router from './router'
import './App.css'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/exports'
import { setSignin,setUserInfo,setFavoriteList } from './store/createData'
import request from './api/request'

export default function App() {

  const navigate=useNavigate()
  const isShowNavigation=useSelector(state=>state.isShowNavigation.isShowNavigation)
  const dispath=useDispatch()

  useEffect(()=>{
    const setUserData=data=>{
      let info={
        id:data.data[0].id,
        name:data.data[0].name,
        createTime:data.data[0].zuceshijian
      }
      let set=new Set()
      let coll=JSON.parse(data.data[0].soucan)
      coll.forEach(val=>set.add(val.id))
      dispath(setSignin(true))
      dispath(setUserInfo(info))
      dispath(setFavoriteList([...set]))
    }
    request('/data/isSignin',false).then(data=>setUserData(data))
  },[dispath])

  return (
    <>
      <div className='main'>
        {useRoutes(router)}
      </div>
      <ul 
        className='nav'
        style={isShowNavigation?{}:{display:'none'}}
      >
        <li onClick={()=>navigate('/')}>首页</li>
        <li onClick={()=>navigate('/search')}>搜索</li>
        <li onClick={()=>navigate('/user')}>我的</li>
      </ul>
    </>
  )
}