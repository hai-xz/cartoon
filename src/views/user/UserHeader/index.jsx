import React from 'react'
import defimg from '../../../assets/defimg2.jpg'
import './i.css'
import request from '../../../api/request'
import { useDispatch } from 'react-redux'
import { setSignin,setUserInfo,setFavoriteList } from '../../../store/createData'

export default function UserHeader(props) {

  const date=new Date(props.userInfo.createTime * 1000)
  const dispatch=useDispatch()

  const backSignin=()=>{
    request('/data/outSignin',false).then(data=>{
      dispatch(setSignin(false))
      dispatch(setUserInfo({id:null,name:'-1',createTime:0}))
      dispatch(setFavoriteList([]))
    })
  }

  return (
    <div className='UserHeader'>
      <img src={defimg} alt='' />
      <p>{props.userInfo.name}</p>
      <p>id:{props.userInfo.id}</p>
      <p>注册时间:{date.getFullYear()}-{date.getMonth()+1}-{date.getDate()}</p>
      <p onClick={backSignin}>退出登录</p>
    </div>
  )
}
