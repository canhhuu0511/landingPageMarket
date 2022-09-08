import React from 'react'
import GoIcon from "../../../images/go-icon.svg"
const CardBestProdcut = ({index,image}) => {
  return (
    <div className="best-product-card">
        <div className="best-product-card-index-logo">
            0{index}
        </div>
        <img srcSet={`${image} 3x`}  alt="item-image"/>
        <div className="best-product-card-bottom">
            <h4>
                How to create mobile-optimized
            </h4>
            <div className="btn-go">
                <img src={GoIcon} alt="go" />
            </div>
        </div>
    </div>
  )
}

export default CardBestProdcut