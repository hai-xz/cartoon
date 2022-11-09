import React from 'react'
import './i.css'
import { useNavigate } from 'react-router-dom'

export default function CartoonHeader(props) {

  const cartoonData=props.cartoonData
  const navigate=useNavigate()

  return (
    <div className='CartoonHeader'>
      <div style={{backgroundImage:`url(${cartoonData.coverHref})`}}>
        <p>{cartoonData.name}</p>
      </div>
      <div onClick={()=>navigate(`/cartoon/${cartoonData.id}/0`)}>开始阅读</div>
    </div>
  )
}
