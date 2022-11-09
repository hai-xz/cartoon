import axios from "axios";

const dataMap=new Map()   //缓存请求结果

const request=(url,isCache=true)=>{
  if(isCache && dataMap.has(url)){
    return new Promise(resolve=>{
      resolve(dataMap.get(url).data)
    })
  }
  return axios(url)
}

export default request

axios.interceptors.response.use(response=>{
  if(dataMap.has(response.config?.url)){
    dataMap.set(response.config.url,{data:response.data,isDelete:1})
  }else{
    dataMap.set(response.config.url,{data:response.data,isDelete:0})
    dte(response.config.url)
  }
  return response.data
})

function dte(url){
  setTimeout(() => {
    if(dataMap.get(url).isDelete===0){
      dataMap.delete(url)
    }else{
      dataMap.get(url).isDelete--
      dte(url)
    }
  }, 300*1000);
}