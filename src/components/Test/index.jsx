import React from 'react'
import {useStateRequest} from '../../api/defaultResponse'

export default function Test() {

  const list=useStateRequest('/data/carlist?id=378&i=0')[0]

  console.log(list)

  return (
    <div>index</div>
  )
}
