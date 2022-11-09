import React from 'react'
import './i.css'
import {useNavigate} from 'react-router-dom'

export default function UserComicListElement(props) {

  const imgUrl=`/img/漫画/${props.id}__${props.name}漫画/cover.jpg`
  const date=new Date(props.time * 1000)
  const navigate=useNavigate()

  const jump=()=>{
    if(props.i===undefined){
      navigate(`/cartoon/${props.id}`)
    }else{
      navigate(`/cartoon/${props.id}/${props.i}`)
    }
  }

  return (
    <li className='UserComicListElement' onClick={jump}>
      <img src={imgUrl} alt='' />
      <div>
        <p>{props.name}</p>
        <p>{date.getFullYear()}-{date.getMonth()+1}-{date.getDate()} {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
        {props.i!==undefined?<p>第{props.i+1}话</p>:<></>}
      </div>
    </li>
  )
}
