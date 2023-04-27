import AddProduct from "../AddProduct";
import BasketList from "../BasketList";
import ProductsList from "../ProductsList";
import TaskItem from "../TaskItem";
import s from './style.module.css'

function App() {
  return (
    <div className={s.container}>
        <AddProduct />
        <TaskItem/>
        <ProductsList />
        <BasketList />
    </div>
     
  );
}

export default App;
