import React, { useState } from 'react'
import './i.css'
import { useSelector, useDispatch } from 'react-redux'
import { setFavoriteList } from '../../../../store/createData'
import { useParams } from 'react-router-dom'
import { useStateRequest } from '../../../../api/defaultResponse'
import request from '../../../../api/request'
import { useNavigate } from 'react-router-dom'

export default function ControlBar(props) {

  const navigate = useNavigate()
  const params = useParams()
  const cartoonData = useStateRequest('/data/cartoon?id=' + params.id)[0]
  const favoriteList = useSelector(state => state.userData.favoriteList)
  const isSignin = useSelector(state => state.userData.isSignin)
  const isColl = favoriteList.includes(Number(params.id))
  const dispatch = useDispatch()
  const chapterList = new Array(cartoonData[0].chapter > 0 ? cartoonData[0].chapter : 0).fill(0)
  const [showChapterList, setShowChapterList] = useState(false)

  const setColl = () => {
    if (!isSignin) return 0
    if (isColl) {
      request(`/data/removeColl?id=${params.id}`, false).then(() => {
        dispatch(setFavoriteList(favoriteList.filter(val => val !== Number(params.id))))
      })
    } else {
      request(`/data/addColl?id=${params.id}`, false).then(() => {
        dispatch(setFavoriteList([...favoriteList, Number(params.id)]))
      })
    }
  }

  const nextChapter = i => {
    if (cartoonData[0].chapter - 1 > i) {
      navigate(`/cartoon/${params.id}/${i}`)
    } else {
      alert('已经是最后一章节喽~')
    }
  }

  const tx=props.isShow?(6+(showChapterList?6:0)):0   //控制 控制栏 的位置

  const focus={backgroundColor:'cadetblue'}

  return (
    <>
      <ul className='ControlBar'
        style={{ transform: `translateX(${tx}rem) translateY(-50%)` }}
      >
        <li onClick={() => setShowChapterList(!showChapterList)}>章节</li>
        <li onClick={() => nextChapter(params.chapter - 0 + 1)}>下一章</li>
        <li onClick={setColl}>{isColl ? '已收藏' : '收藏'}</li>
        <li onClick={() => navigate('/cartoon/' + params.id)}>返回</li>
      </ul>
      <ul style={{ transform: `translateX(${tx}rem)` }}>
        {
          chapterList.map((val, index) => <li key={index} style={index===Number(params.chapter)?focus:{}} onClick={() => { nextChapter(index) }}>{index + 1}</li>)
        }
      </ul>
    </>
  )
}
