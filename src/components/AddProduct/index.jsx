import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { add } from '../../store/slice/productSlice'

export default function AddProduct() {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            id: Date.now(),
            title: e.target.title.value,
            price: e.target.price.value,
        }
        dispatch(add(data));
        e.target.reset()
    }
  return (
    <div className={s.wrapper}>
        <div className={s.card}>Add New Product</div>
        <form className={s.form} onSubmit={handleSubmit}>
            <input type="text" name='title' placeholder='Title' required/>
            <input type="number" name='price' placeholder='Price' required/>
            <input type="submit" />
        </form>
    </div>
  )
}
