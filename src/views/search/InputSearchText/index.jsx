import React,{useRef} from 'react'
import './i.css'

export default function InputSearchText(props) {

  const text=useRef(null)

  return (
    <div className='InputSearchText'>
      <input ref={text} type="text" placeholder='请输入搜索内容' />
      <button onClick={()=>props.setText(text.current.value)}>搜索</button>
    </div>
  )
}
