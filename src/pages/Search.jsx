import React from 'react'
import InputSearchText from '../views/search/InputSearchText'
import {useStateRequest,setStateRequest} from '../api/defaultResponse'
import ComicList from '../components/ComicList'

export default function Search() {

  const url='/data/search'
  const [data,setData]=useStateRequest(url)

  const setText=text=>{
    setStateRequest(url+'?name='+text,setData)
  }

  return (
    <div>
      <InputSearchText setText={setText} />
      <ComicList data={data.data} />
    </div>
  )
}
