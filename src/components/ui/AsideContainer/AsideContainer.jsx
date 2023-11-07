import React from 'react'
import Searchbar from './Searchbar'
import "./index.scss"

function AsideContainer({ content }) {
  return (
    <aside className='aside' >
        <Searchbar />
        {content}
    </aside>
  )
}

export default AsideContainer