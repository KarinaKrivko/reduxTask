import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { addBasket } from '../../store/slice/basketSlice'

export default function ProductItem({id, title, price}) {
    const dispatch = useDispatch()
  return (
    <div className={s.card}>
        <p>{title}</p>
        <p>$ {price}</p>
        <button onClick={() => dispatch(addBasket(id))}>Add</button>
    </div>
  )
}
