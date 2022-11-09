import {useState,useEffect} from 'react'
import defimg from '../assets/img4.jpg'
import request from './request'


const defauleData=new Map()

const useStateRequest=(url,isCache=true)=>{
  let x=url.split('?')[0]
  const [data,setDate]=useState(defauleData.get(x))
  useEffect(()=>{
    request(url,isCache).then(res=>{
      setDate(res)
    })
  },[url,isCache])
  return [data,setDate]
}

const setStateRequest=(url,setState)=>{
  request(url).then(res=>{
    setState(res)
  })
}

export {useStateRequest,setStateRequest}


defauleData.set('/data/carlist',{list:[defimg],quantity:1})

defauleData.set('/data/rcrec',[
  {
    id:-1,
    imgHref:defimg,
    name:'正在请求数据'
  }
])

defauleData.set('/data/btrec',[
  {
    id: -1,
    name: "正在请求数据",
    introduction: "正在请求数据",
    author: "正在请求数据",
    isEnd: 1,
    updateTime: 1654513989,
    coverHref: defimg,
    chapter: -1,
    Collection: -1,
    highly: -1,
    browse: -1
  }
])

defauleData.set('/data/alrend',{
  data:[{
      id: -1,
      name: "正在请求数据",
      introduction: "正在请求数据",
      author: "正在请求数据",
      isEnd: 1,
      updateTime: 1654513989,
      coverHref: defimg,
      chapter: -1,
      Collection: -1,
      highly: -1,
      browse: -1
    }],
  quantity: 1
})

defauleData.set('/data/hot',{
  data:[{
    id: -1,
    name: "正在请求数据",
    introduction: "正在请求数据",
    author: "正在请求数据",
    isEnd: 1,
    updateTime: 1654513989,
    coverHref: defimg,
    chapter: -1,
    Collection: -1,
    highly: -1,
    browse: -1
  }],
  quantity: 1
})

defauleData.set('/data/fabul',{
  data:[{
    id: -1,
    name: "正在请求数据",
    introduction: "正在请求数据",
    author: "正在请求数据",
    isEnd: 1,
    updateTime: 1654513989,
    coverHref: defimg,
    chapter: -1,
    Collection: -1,
    highly: -1,
    browse: -1
  }],
  quantity: 1
})

defauleData.set('/data/collection',{
  data:[{
    id: -1,
    name: "正在请求数据",
    introduction: "正在请求数据",
    author: "正在请求数据",
    isEnd: 1,
    updateTime: 1654513989,
    coverHref: defimg,
    chapter: -1,
    Collection: -1,
    highly: -1,
    browse: -1
  }],
  quantity: 1
})

defauleData.set('/data/search',{
  data:[{
    id: -1,
    name: "正在请求数据",
    introduction: "正在请求数据",
    author: "正在请求数据",
    isEnd: 1,
    updateTime: 1654513989,
    coverHref: defimg,
    chapter: -1,
    Collection: -1,
    highly: -1,
    browse: -1
  }],
  quantity: 1
})

defauleData.set('/data/mycoll',{collList:'[]'})

defauleData.set('/data/mybrow',{browList:'[]'})

defauleData.set('/data/cartoon',[
  {
    id: -1,
    name: "正在请求数据",
    introduction: "正在请求数据",
    author: "正在请求数据",
    isEnd: 1,
    updateTime: 1654513989,
    coverHref: defimg,
    chapter: -1,
    Collection: -1,
    highly: -1,
    browse: -1
  }
])