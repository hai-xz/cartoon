import React from 'react'
import './i.css'

export default function SwitchButton(props) {

  return (
    <div className='SwitchButton'>
      {
        props.buttonList.map((val,index)=><button key={index} style={props.s===index?{backgroundColor:'rgba(68, 245, 248, 0.589)'}:{}} onClick={()=>props.trigger(index)}>{val}</button>)
      }
    </div>
  )
}
