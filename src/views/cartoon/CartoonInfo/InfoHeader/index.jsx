import React from 'react'
import './i.css'
import request from '../../../../api/request'
import { useSelector,useDispatch } from 'react-redux'
import {setFavoriteList} from '../../../../store/createData'
import { useParams } from 'react-router-dom'

export default function InfoHeader(props) {
  
  const params=useParams()
  const cartoonData=props.cartoonData
  const favoriteList=useSelector(state=>state.userData.favoriteList)
  const isSignin=useSelector(state=>state.userData.isSignin)
  const dispatch=useDispatch()
  const isColl=favoriteList.includes(Number(params.id))

  const setColl=()=>{
    if(!isSignin) return 0
    if(isColl){
      request(`/data/removeColl?id=${params.id}`,false).then(()=>{
        dispatch(setFavoriteList(favoriteList.filter(val=>val!==Number(params.id))))
        props.updata()
      })
    }else{
      request(`/data/addColl?id=${params.id}`,false).then(()=>{
        dispatch(setFavoriteList([...favoriteList,Number(params.id)]))
        props.updata()
      })
    }
  }

  const setLike=()=>{
    if(!isSignin) return 0
    request(`/data/focus?id=${params.id}`,false).then(()=>{
      props.updata()
    }).catch(err=>{})
  }

  return (
    <div>
      <ul className='InfoHeader'>
        <li onClick={setColl}>
          <p>收藏
            <span>{isColl?'已收藏':'未收藏'}</span>
          </p>
          <p>{cartoonData.Collection}</p>
        </li>
        <li onClick={setLike}>
          <p>喜欢</p>
          <p>{cartoonData.highly}</p>
        </li>
        <li>
          <p>浏览</p>
          <p>{cartoonData.browse}</p>
        </li>
      </ul>
    </div>
  )
}
