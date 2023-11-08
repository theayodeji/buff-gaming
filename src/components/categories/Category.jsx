import React from 'react'
import { Link } from 'react-router-dom'

function Category({img, id, categoryName}) {
  return (
    <Link to="/" className='categories-category'>
        <img src={img} alt={categoryName} />
        <p className="category-name">{categoryName}</p>
    </Link>
  )
}

export default Category