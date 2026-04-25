import React from 'react'
import ForYoucarousel from './ForYoucarousel'
import ForYouTopDeal from './ForYouTopDeal'
import ForYouTrending from './ForYouTrending'
import ForYouNewArrival from './ForYouNewArrival'
import ForYouCategoryYouMightLik from './ForYouCategoryYouMightLike'
import BestSellers from './BestSeller'


const ForYou = () => {
  return (
    <div className='pt-2'>
    <ForYoucarousel />
    <BestSellers />
    <ForYouTopDeal />
    <ForYouTrending />
    <ForYouNewArrival />
    <ForYouCategoryYouMightLik />
    </div>
  )
}

export default ForYou
