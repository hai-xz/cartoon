import React, { useState, useMemo } from 'react'
import './i.css'
import { useStateRequest } from '../../../api/defaultResponse'
import UserComicListElement from '../../../components/UserComicListElement'
import SwitchButton from '../../../components/SwitchButton'

export default function UserComic() {

  const [swi, setSwi] = useState(true)

  const favoriteListJson = useStateRequest('/data/mycoll', false)[0]
  const browListJson = useStateRequest('/data/mybrow', false)[0]

  const favoriteList = useMemo(() => {
    let list = JSON.parse(favoriteListJson.collList)
    return list.reverse().map(val => <UserComicListElement id={val.id} key={val.id} name={val.name} time={val.time} />)
  }, [favoriteListJson])

  const browList = useMemo(() => {
    let list = JSON.parse(browListJson.browList)
    return list.reverse().map((val, index) => <UserComicListElement id={val.id} i={val.i} key={val.time} name={val.name} time={val.time} />)
  }, [browListJson])

  return (
    <div className='UserComic'>
      <div>
        <SwitchButton buttonList={['我的收藏','浏览记录']} trigger={i=>setSwi(i===0?true:false)} s={swi===true?0:1}></SwitchButton>
      </div>
      <ul>
        {swi ? favoriteList : browList}
      </ul>
    </div>
  )
}
