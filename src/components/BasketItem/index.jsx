import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { decrement, increment, removeFromBasket } from '../../store/slice/basketSlice'

export default function BasketItem({id, count, title, price}) {
    const dispatch = useDispatch()
  return (
    <div className={s.card}>
        <p>{title}</p>
        <p>$ {price}</p>
        <p>{count}</p>
        <div className={s.btns}>
            <button onClick={() => dispatch(removeFromBasket(id))}>Del</button>
            <button onClick={()=> dispatch(increment(id))}>+</button>
            <button onClick={()=> dispatch(decrement(id))}>-</button>
        </div>
    </div>
  )
}
