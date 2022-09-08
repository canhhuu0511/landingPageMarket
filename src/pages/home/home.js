import React from 'react'
import BestProduct from '../../components/Home/Best-product/Best-product'
import SectionIntro from '../../components/Home/Intro-section/Intro-section'
import SectionListProduct from '../../components/Home/List-product.js/List-product'
import MainBanner from '../../components/Home/Main-banner/main-banner'

const Home = () => {
  return (
    <div>
        <MainBanner></MainBanner>
        <SectionIntro></SectionIntro>
        <BestProduct></BestProduct>
        <SectionListProduct/>
    </div>
  )
}

export default Home