import React,{useRef,useState} from 'react'
import './i.css'
import request from '../../../api/request'
import { useDispatch } from 'react-redux'
import { setSignin,setUserInfo,setFavoriteList } from '../../../store/createData'
import { useNavigate } from 'react-router-dom'

export default function Signin() {

  const [isSignin,setIsSignin]=useState(true)
  const account=useRef()
  const pwd=useRef()
  const name=useRef()
  const navigate=useNavigate()
  const dispath=useDispatch()

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
    navigate('/user')
  }

  const signin= ()=>{
    let x=account.current.value
    let y=pwd.current.value
    let n=name.current?.value
    if(x==='' || y==='')  return 0
    if(isSignin){
      request(`/data/signin?id=${x}&pwd=${y}`,false).then(data=>{
        setUserData(data)
      }).catch(err=>console.log())
    }else if(n!==''){
      request(`/data/createUser?id=${x}&pwd=${y}&name=${n}`,false).then(data=>{
        setUserData(data)
      }).catch(err=>console.log())
    }
  }


  return (
    <div>
      <div className='Signin'>
        {isSignin?<></>:<input type='text' maxLength='12' placeholder='昵称'  ref={name} />}
        <input type='number' maxLength='11' placeholder='账号' ref={account} defaultValue={''}/>
        <input type='password' maxLength='16' placeholder='密码' defaultValue={''} ref={pwd}/>
        <button onClick={signin}>{isSignin?'登录':'注册'}</button>
        <button onClick={()=>setIsSignin(!isSignin)}>{isSignin?'切换注册':'切换登录'}</button>
      </div>
    </div>
  )
}
