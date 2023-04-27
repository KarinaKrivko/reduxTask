import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
  
  
);

/*
1) сконфигурировать redux-toolkit и создать slice с товарами
товары это массив с объектами у которых следующий списко свойста
(id, title, price)

2) создать компонент ProductsList и ProductItem 
вывести набор компонентов (ProductItem) в компоненте ProductsList
*/


