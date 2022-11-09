import React, { useState, useMemo } from 'react'
import './i.css'
import { useStateRequest } from '../../../api/defaultResponse'
import UserComicListElement from '../../../components/UserComicListElement'
import { SwitchTransition,CSSTransition} from 'react-transition-group'


export default function UserComic() {

  const [swi, setSwi] = useState(true)
  const bgColor = { backgroundColor: 'rgba(68, 245, 248, 0.289)' }

  const favoriteListJson = useStateRequest('/data/mycoll',false)[0]
  const browListJson=useStateRequest('/data/mybrow',false)[0]

  const favoriteList = useMemo(() => {
    let list = JSON.parse(favoriteListJson.collList)
    return list.reverse().map(val =><UserComicListElement id={val.id} key={val.id} name={val.name} time={val.time} />)
  }, [favoriteListJson])

  const browList=useMemo(()=>{
    let list=JSON.parse(browListJson.browList)
    return list.reverse().map((val,index)=><UserComicListElement id={val.id} i={val.i} key={val.time} name={val.name} time={val.time} />)
  },[browListJson])

  return (
    <div className='UserComic'>
      <div>
        <button style={swi ? bgColor : {}} onClick={() => setSwi(true)}>我的收藏</button>
        <button style={swi ? {} : bgColor} onClick={() => setSwi(false)}>浏览记录</button>
      </div>
      <SwitchTransition mode='out-in'>
        <CSSTransition
          classNames={swi?'SwitchTransition':'SwitchTransition2'}
          key={swi?'on':'off'}
          timeout={300}
        >
          {swi?<ul>{favoriteList}</ul>:<ul>{browList}</ul>}
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}
