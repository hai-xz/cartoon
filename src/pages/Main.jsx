import React from 'react'
import RotationChart from '../views/main/RotationChart'
import {useStateRequest} from '../api/defaultResponse'
import HorizontalComicList from '../components/HorizontalComicList'

export default function Main() {

  const data=useStateRequest('/data/rcrec')[0]
  const data2=useStateRequest('/data/btrec')[0]
  const data3=useStateRequest('/data/alrend')[0]
  const data4=useStateRequest('/data/hot')[0]
  const data5=useStateRequest('/data/fabul')[0]
  const data6=useStateRequest('/data/collection')[0]

  return (
    <div>
      <RotationChart data={data} />
      <HorizontalComicList data={data2} title={'漫画推荐'} />
      <HorizontalComicList data={data3.data} title={'已完结漫画'} />
      <HorizontalComicList data={data4.data} title={'热度最高'} />
      <HorizontalComicList data={data5.data} title={'点赞最多'} />
      <HorizontalComicList data={data6.data} title={'收藏最多'} />
    </div>
  )
}
