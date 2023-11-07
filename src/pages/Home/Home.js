import React from 'react'
import HomePreviewSlider from '../../components/HomePreviewSlider/HomePreviewSlider'
import "./index.scss"
import AsideContainer from '../../components/ui/AsideContainer/AsideContainer'
import FeaturedGames from '../../components/featuredgames/FeaturedGames'

function Home() {
  return (
    <div className='home'>
      <HomePreviewSlider />
      <AsideContainer />
      <FeaturedGames />
    </div>
  )
}

export default Home