import React from 'react'
import { useSelector } from 'react-redux'
import BasketItem from '../BasketItem'
import s from './style.module.css'

export default function BasketList() {
    const basket = useSelector(state => state.basket.basket)
    const products = useSelector(state => state.product.products)
    const data = basket.map(({id, count}) => ({...products.find(item => item.id === id), count: count}))
  return (
    <div>
        <div className={s.title}>Basket</div>
        <div className={s.card}>
            <p>Title:</p>
            <p>Price:</p>
            <p>Count:</p>
            <p>Actions:</p>
        </div>
        {
            data.map(item => <BasketItem key={item.id} {...item}/>)
        }
    </div>
  )
}
