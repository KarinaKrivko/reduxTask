import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../ProductItem'
import s from './style.module.css'

export default function ProductsList() {
    const products = useSelector(state => state.product.products)
  return (
    <div>
        <div className={s.title}>Store</div>
        <div className={s.card}>
            <p>Title:</p>
            <p>Price:</p>
            <p>Actions:</p>
        </div>
        {
            products.map(item => <ProductItem key={item.id} {...item}/>)
        }
    </div>
  )
}
