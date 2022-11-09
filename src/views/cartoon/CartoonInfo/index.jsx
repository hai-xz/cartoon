import React from 'react'
import './i.css'
import InfoHeader from './InfoHeader'
import HorizontalComicList from '../../../components/HorizontalComicList'
import { useStateRequest } from '../../../api/defaultResponse'

export default function CartoonInfo(props) {

  const btrecList = useStateRequest('/data/btrec')[0]

  return (
    <div className='CartoonInfo'>
      <InfoHeader  updata={props.updata} cartoonData={props.cartoonData} />
      <ul>
        <li>
          <p>漫画名字:</p>
          <p>{props.cartoonData.name}</p>
        </li>
        <li>
          <p>漫画作者:</p>
          <p>{props.cartoonData.author}</p>
        </li>
        <li>
          <p>连载状态:</p>
          <p>{props.cartoonData.isEnd === 0 ? '已完结' : '连载中'}</p>
        </li>
        <li>
          <p>漫画介绍:</p>
          <p>{props.cartoonData.introduction.length > 90 ? props.cartoonData.introduction.slice(0, 90) + '...' : props.cartoonData.introduction}</p>
        </li>
      </ul>
      <HorizontalComicList title={'精彩推荐'} data={btrecList} />
    </div>
  )
}
