import "./App.css";

import React, { useEffect, useState } from 'react'
import {data }from './data'
import Product from "./Product";
import Header from './Header'
import Basket from "./Basket";




function App() {

 const [money ,setMoney]= useState(100)
 const [basket, setBasket] =useState([])
 const [total ,setTotal]= useState(0)


useEffect(()=>{
setTotal(
  basket.reduce((acc , item )=>{
  return acc +(item.amount *(data.find(data=>data.id === item.id).price))
  },0)
  ) 


},[basket])
  

const sifirSepet =()=>{
  setTotal([])
}
  return (
    <div className="App">
     <Header total ={total} money={money}/>
     {data.map(data =>(
       <Product key={data.id}
        data={data}
        basket={basket}
        setBasket={setBasket}
        total={total}
        money={money}
        />
     ))}
     <Basket
      data={data} 
      basket={basket}
      total={total}
      />
     <button onClick={sifirSepet}>sepeti sifirla</button>
    </div>
  );
}

export default App;
