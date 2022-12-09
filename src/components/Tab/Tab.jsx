import React, {useState} from 'react';
import './Tab.css';
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";
import ProductList from "../ProductList/ProductList";
import ProductItem from "../ProductItem/ProductItem";


const products1 = [
    {id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые'},
    {id: '2', title: 'Куртка', price: 12000, description: 'Зеленого цвета, теплая'},
    {id: '3', title: 'Джинсы 2', price: 5000, description: 'Синего цвета, прямые'},
    {id: '4', title: 'Куртка 8', price: 122, description: 'Зеленого цвета, теплая'},
]

const products2 = [
    {id: '5', title: 'Джинсы 3', price: 5000, description: 'Синего цвета, прямые'},
    {id: '6', title: 'Куртка 7', price: 600, description: 'Зеленого цвета, теплая'},
    {id: '7', title: 'Джинсы 4', price: 5500, description: 'Синего цвета, прямые'},
    {id: '8', title: 'Куртка 5', price: 12000, description: 'Зеленого цвета, теплая'},
]



const TabContent = ({ title, content }) => (
  <div className="tabcontent">
    <h3>{title}</h3>
      {<ProductList
        products = {content}
      />}
  </div>
);

const Tab = () => {
    const items = [
  { title: 'London', content: products1 },
  { title: 'Paris', content: products2 },
  { title: 'Tokyo', content: 'Tokyo is the capital of Japan.' },
];

  const [ active, setActive ] = React.useState(null);

  const openTab = e => setActive(+e.target.dataset.index);

  return (
    <div>
      <div className="tab">
        {items.map((n, i) => (
          <button
            className={`tablinks ${i === active ? 'active' : ''}`}
            onClick={openTab}
            data-index={i}
          >{n.title}</button>
        ))}
      </div>
      {items[active] && <TabContent {...items[active]} />}
    </div>
  );
};


export default Tab;
