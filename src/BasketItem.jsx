import React from 'react'

const BasketItem = ({item,dat}) => {
  return (
    <div>
        {dat.name} x {item.amount}
    </div>
  )
}

export default BasketItem