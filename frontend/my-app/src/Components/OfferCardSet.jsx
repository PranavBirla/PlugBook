import React from 'react'
import OfferCards from './OfferCards'

const OfferCardSet = () => {
  return (
    <div className=' mx-4 flex flex-col sm:flex-row  sm:gap-5 md:mx-12'>
        <OfferCards />
        <OfferCards />
        
      </div>
  )
}

export default OfferCardSet
