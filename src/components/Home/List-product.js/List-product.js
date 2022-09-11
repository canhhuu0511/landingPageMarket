import React, { useEffect, useState } from 'react'
import ProductCard from './Card-product/Card-product'
import "./List-product.scss"
import {products} from '../../../fake-data/data'
import CardProdcutSkeleton from './Card-product/Card-product-skeleton'

const SectionListProduct = () => {
    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(()=>{
            setListProducts(products);
            setLoading(false);
        },2000)
    }, []);

  return !loading?(
    <div className='list-product'>
        {listProducts.length>0&&listProducts.map((product,key)=>(
            <ProductCard key={key} product={product}/>
        ))}

        <div className="list-product-bottom">
            <a className="btn-see-more">
                see more
            </a>
        </div>
    </div>
  ):(
    <div className='list-product'>
        {Array.apply(null, Array(20)).map((e,index)=>(
            <CardProdcutSkeleton key={index}/>
        ))} 
    </div>
  )
}

export default SectionListProduct