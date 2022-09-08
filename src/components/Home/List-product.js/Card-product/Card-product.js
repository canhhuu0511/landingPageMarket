import React from 'react'
import "./Card-product.scss"

const ProductCard = ({product}) => {
  return (
    <div className='product-card'>
        <img srcSet={`${require(`../../../../images/${product.image}`)} 2x`} alt="" />
        <div className="product-card-info">
            <h4>
                {product.name}
            </h4>
            <div className="product-card-info-content">
                <div className='product-card-info-content-price'>{product.price}</div>
                <div className='product-card-info-content-like-nums'>
                    <span>{product.likeNums}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard