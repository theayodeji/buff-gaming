import React from 'react'
import Searchbar from './Searchbar'
import "./index.scss"

function AsideContainer({ content }) {
  return (
    <aside className='aside' >
      <div className='promo-text'></div>
        <Searchbar />
        {content}
    </aside>
  )
}

export default AsideContainer