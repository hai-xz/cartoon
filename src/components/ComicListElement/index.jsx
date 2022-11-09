import React from 'react'
import './i.css'
import { useNavigate } from 'react-router-dom'

//显示单本漫画
export default function ComicListElement(props) {

  const navigate=useNavigate()

  return (
    <li className='ComicListElement' onClick={()=>navigate(`/cartoon/${props.id}`)}>
      <img src={props.imgHref} alt='' />
      <p>{props.name}</p>
      <p>{props.author}</p>
      <span>{props.isEnd===0?'已完结':'连载中'}</span>
    </li>
  )
}
