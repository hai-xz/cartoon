import React,{useState} from 'react'
import { useParams,Outlet } from 'react-router-dom'
import { useStateRequest } from '../api/defaultResponse'
import CartoonHeader from '../views/cartoon/CartoonHeader'
import SwitchButton from '../components/SwitchButton'
import CartoonInfo from '../views/cartoon/CartoonInfo'
import CartoonChapter from '../views/cartoon/CartoonChapter'
import request from '../api/request'
import { SwitchTransition,CSSTransition } from 'react-transition-group'

export default function Cartoon() {

  const buttonList=['漫画详情','选择章节']
  const params=useParams()
  const [s,setS]=useState(0)
  const [cartoonData,setCartoonData]=useStateRequest('/data/cartoon?id='+params.id,false)

  const updata=()=>{
    request('/data/cartoon?id='+params.id,false).then(data=>setCartoonData(data))
  }

  return (
    <div>
      <CartoonHeader cartoonData={cartoonData[0]} />
      <SwitchButton buttonList={buttonList} trigger={i=>setS(i)} s={s} />
      <SwitchTransition mode='out-in'>
        <CSSTransition
          key={s===0?'on':'off'}
          timeout={300}
          classNames={s===0?'SwitchTransition':'SwitchTransition2'}
        >
          {s===0?<CartoonInfo updata={updata} cartoonData={cartoonData[0]}/>:<CartoonChapter id={cartoonData[0].id} chapter={cartoonData[0].chapter}/>}
        </CSSTransition>
      </SwitchTransition>
      {params.chapter===undefined?<></>:<Outlet />}
    </div>
  )
}
