import React from "react";

const Product = ({ data, basket, setBasket,total ,money }) => {

    const basketItem = basket.find(item=>item.id === data.id)

  const addBasket = () => {


    const checkBasket = basket.find(item=>item.id === data.id)
    //urun eklenmeis
    if(checkBasket){
        checkBasket.amount +=1
        setBasket([...basket.filter(item=>item.id !==data.id),checkBasket])
    }else
    {
        setBasket([
            ...basket,{
                id:data.id,
                amount:1
            }
        ])
    }
  };



  const removeBasket =()=>{

    const currentBasket = basket.find(item=>item.id === data.id)
    const basketWithoutCurrent = basket.filter(item=>item.id !== data.id)


        currentBasket.amount -=1

        if(currentBasket.amount === 0){

            setBasket([...basketWithoutCurrent])
        }
        else{
            setBasket([...basketWithoutCurrent,currentBasket])
        }

   

  }

  return (
    <div
      className="product"
      style={{
        padding: "10px",
        background: "#fff",
        border: "5px solid #ddd",
      }}
    >
      <h6>{data.name} </h6>
      <div className="price"> ${data.price}</div>
      <button disabled={!basketItem} onClick={removeBasket}>CIKAR</button>
      <span className="amount">{basketItem && basketItem.amount || 0}</span>
      <button disabled={ total + data.price>money} onClick={addBasket}>EKLE</button>
    </div>
  );
};

export default Product;
