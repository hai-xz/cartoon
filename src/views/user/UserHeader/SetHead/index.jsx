import React, { useState } from 'react'
import './i.css'
import axios from 'axios'

export default function SetHead(props) {

  const [imgState, setImgState] = useState(null)
  const [isShowInput, setIsShowInput] = useState(true)
  const [myFile,setMyFile]=useState(null)

  const abtImg = e => {
    e.stopPropagation()
    let file = e.target?.files[0]
    if (file.type.slice(0, 5) !== 'image') {
      alert('请选择正确的文件格式')
      return
    }
    setMyFile(file)
    file = window.URL.createObjectURL(file)
    setImgState(file)
    setIsShowInput(false)
  }

  const submitFile = e => {
    e.stopPropagation()
    const form = new FormData()
    form.append('myfile',myFile)
    axios({
      method:'POST',
      headers: {'Content-Type': "multipart/form-data" },
      url:'/data/uploadpicture',
      data:form
    }).then(()=>{
      alert('已修改头像')
      props.hide()
    })
    .catch(()=>{
      alert('操作失败')
      props.hide()
    })

  }

  return (
    <div  onClick={props.hide} className='SetHead'>
      <img src={imgState || props.src} alt='' />
      <div>
        <div onClick={e => submitFile(e)}>{isShowInput ? '更换头像' : '确认修改'}</div>
        <input type='file' accept="image/*" onClick={e=>e.stopPropagation()} onChange={e => abtImg(e)} style={{ display: isShowInput ? 'inline-block' : 'none' }} />
      </div>
    </div>
  )
}
