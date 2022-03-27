import React from 'react'
import BasketItem from './BasketItem'

const Basket = ({basket,data,total}) => {
  return (
    <div>
        {basket.map(item =>(
            <BasketItem
             item ={item}
            dat={data.find(p=>p.id === item.id)} />
        ))}
       <div> toplam${total}</div> 
    </div>
  )
}

export default Basket