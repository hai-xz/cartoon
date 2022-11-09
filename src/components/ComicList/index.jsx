import React from 'react'
import ComicListElement from '../ComicListElement'
import './i.css'

export default function ComicList(props) {
  return (
    <ul className='ComicList'>
      {props.data.map(val=><ComicListElement isEnd={val.isEnd} imgHref={val.coverHref} id={val.id} key={val.id} name={val.name} author={val.author} />)}
    </ul>
  )
}
