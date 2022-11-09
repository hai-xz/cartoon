import React from 'react'
import ComicListElement from '../ComicListElement'
import './i.css'

//横向漫画列表
export default function HorizontalComicList(props) {
  return (
    <div className='HorizontalComicListBox'>
      <p className='p'>{props.title}</p>
      <ul className='HorizontalComicList'>
        {props.data.map(val=><ComicListElement key={val.id} id={val.id} isEnd={val.isEnd} imgHref={val.coverHref} name={val.name} author={val.author} />)}
      </ul>
    </div>
  )
}
