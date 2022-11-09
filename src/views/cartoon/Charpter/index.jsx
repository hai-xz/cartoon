import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import './i.css'
import { useDispatch } from 'react-redux'
import { setShowNavigation } from '../../../store/isShowNavigation'
import { useStateRequest } from '../../../api/defaultResponse'
import ControlBar from './ControlBar'

export default function Chapter() {

  const [isShow,setIsShow]=useState(false)
  const dispath=useDispatch()
  const params=useParams()
  const imgList=useStateRequest(`/data/carlist?id=${params.id}&i=${params.chapter}`)[0]

  useEffect(()=>{ //控制导航栏的显示与隐藏
    dispath(setShowNavigation(false))
    return ()=>dispath(setShowNavigation(true))
  })

  return (
    <div className='Chapter'>
      <div onClick={()=>setIsShow(!isShow)}>
        {imgList.list.map(val=><img src={val} key={val} alt='' />)}
      </div>
      <ControlBar isShow={isShow} />
    </div>
  )
}