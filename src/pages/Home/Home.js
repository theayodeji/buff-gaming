import React from 'react'
import HomePreviewSlider from '../../components/HomePreviewSlider/HomePreviewSlider'
import "./index.scss"
import AsideContainer from '../../components/ui/AsideContainer/AsideContainer'
import FeaturedGames from '../../components/featuredgames/FeaturedGames'
import LatestArticles from '../../components/LatestArticles/LatestArticles'
import CategoriesSelect from '../../components/categories/CategoriesSelect'

function Home() {

  return (
    <div className='container home'>
      <HomePreviewSlider />
      <AsideContainer />
      <FeaturedGames />
      <LatestArticles />
      <CategoriesSelect />
    </div>
  )
}

export default Home