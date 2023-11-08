import React from 'react'
import Category from './Category'
import "./index.scss"

function CategoriesSelect() {

    const categories =  [
        {categoryName: "All", id:8, img: "",},
        {categoryName: "Trending", id:7, img: "",},
        {categoryName: "Action", id: 0, img: "",},
        {categoryName: "e-Sports", id:1, img: "",},
        {categoryName: "Arcade", id:2, img: "",},
        {categoryName: "FPS", id:3, img: "",},
        {categoryName: "Adventure", id:4, img: "",},
        {categoryName: "Role-Playing", id:5, img: "",},
        {categoryName: "Simulation", id:6, img: "",}
    ]

    const categoriesEl = categories.map((category, index) => {
        return (
            <Category key={index} {...category}/>
        )
    })


  return (
    <div className='categories-select'>
        <h2 className="title">Categories</h2>
        <div className="categories-wrapper">
            {categoriesEl}
        </div>
    </div>
  )
}

export default CategoriesSelect