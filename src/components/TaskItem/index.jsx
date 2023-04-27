import React from 'react'
import s from './style.module.css'

export default function TaskItem() {
  return (
    <div className={s.container}>
        <div className={s.card}>Tasks Description</div >
        <div className={s.wrapper}>
            <p>
               1) сконфигурировать redux-toolkit и создать slice с товарами товары это массив с объектами у которых следующий списко свойста (id, title, price) 
            </p>
            <p>
               2) создать компонент ProductsList и ProductItem вывести набор компонентов (ProductItem) в компоненте ProductsList 
            </p>
        



        </div>
    </div>
  )
}
