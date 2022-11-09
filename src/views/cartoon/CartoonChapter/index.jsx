import React from 'react'
import './i.css'
import {useNavigate} from 'react-router-dom'

export default function CartoonChapter(props) {

  const list=new Array(props.chapter).fill(false)
  const navigate=useNavigate()

  const jump=index=>{
    navigate(`/cartoon/${props.id}/${index}`)
  }

  return (
    <ul className='CartoonChapter'>
      {
        list.map((val,index)=><li onClick={()=>jump(index)} key={index}>{index+1}</li>)
      }
    </ul>
  )
}
