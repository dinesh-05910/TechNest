import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products'

const ProductScreen = () => {

    const {id : productId } = useParams();
    const product = products.find(product => product.id === productId);
    
  return (
    <div>ProductScreen</div>
  )
}

export default ProductScreen