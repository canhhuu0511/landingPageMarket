import React from 'react'
import CardBestProdcut from './Best-product-card'
import "./Best-product.scss"
import bestImage from "../../../images/best-image-01@2x.png"
import bestImage2 from "../../../images/best-image-02@2x.png"
import bestImage3 from "../../../images/best-image-03@2x.png"
const BestProduct = () => {
  return (
    <div className='best-product'>
        <div className="best-product-heading">
            <h3 className='best-product-heading-title'>
                BEST PRODUCT
            </h3>
            <p className='best-product-heading-content'>
                How to create mobile-optimized videos in minutes. Not a designer, 
                every team makes a lot of videos Can be trimmed. Take the first 
            </p>
        </div>
        <div className="best-product-menu">
            <ul className="best-product-menu-list">
                <li className="bestproduct-item">
                    <CardBestProdcut index={1} image={bestImage}/>
                </li>
                <li className="bestproduct-item">
                    <CardBestProdcut index={2} image={bestImage2}/>
                </li>
                <li className="bestproduct-item">
                    <CardBestProdcut index={3} image={bestImage3}/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default BestProduct