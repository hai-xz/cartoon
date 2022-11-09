import React,{useEffect, useRef,useState} from 'react'
import './i.css'
import { useNavigate } from 'react-router-dom'
//轮播图组件
export default function RotationChart(props) {

  let sum=props.data?.length||0
  const scrollHeight=useRef(null)
  const [tsX,setTsX]=useState(0)
  const navigate=useNavigate()

  let isScroll=true
  let x=null
  const touchStart=e=>{
    x=e.changedTouches[0].clientX
    isScroll=false
  }

  const touchEnd=e=>{
    isScroll=true
    let y=e.changedTouches[0].clientX-x
    if(Math.abs(y)<50)  return 0
    if(y>0){
      if(tsX>0){setTsX(tsX-1)}
    }else{
      if(tsX<sum-1){setTsX(tsX+1)}
    }
  }

  useEffect(()=>{
    let ste=setInterval(()=>{
      if(isScroll){
        setTsX((tsX+1)%sum)
      }
    },4*1000)
    return ()=>clearInterval(ste)
  })


  return (
    <div className='RotationCchart'>
      <ul
        ref={scrollHeight}
        style={{transform:`translateX(-${tsX*100}%)`}}
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
      >
        {props.data.map(val=><li onClick={()=>navigate(`/cartoon/${val.id}`)} key={val.id} style={{backgroundImage:`url(${val.imgHref})`}}><p>{val.name}</p></li>)}
      </ul>
    </div>
  )
}
