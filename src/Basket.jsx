import React from 'react'

const Basket = ({basket,cost}) => {
  return (
    <div>

        {basket.map((item)=>(
            <div>
                <p>{item.name}x{item.amount}</p>
                <p>${item.price*item.amount}</p>
            

            </div>
        ))}

        <p>$ {cost}</p>

    </div>
  )
}

export default Basket