import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

function CheckoutProduct({id,title,price,description ,rating,category,image,hasPrime}) {
   const dispatch=useDispatch();

   const addItemtoBasket=()=>{
    const product={
      id,
      title,category,description,
      price,image,rating,hasPrime
    }
    //push items into redux store
    dispatch(addToBasket(product))
  }

  const  removeitemFromBasket =()=>{
   
      //remove items into basket store
      dispatch(removeFromBasket({id}))
    }

    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />
        
        <div className="col-span-3 mx-5">
            <p>{title}</p>
            <div className="flex">
            {Array(rating).fill().map(( _,i)=>(
                   <StarIcon className="h-5 text-yellow-500"/>
                ))}
            </div>
            <p className="text-xs my-2 line-clamp-3">{description}</p>
            <Currency quantity={price} currency="GBP"/>
            {hasPrime &&(
              <div className="flex items-center space-x-2 -mt-5">
                  <img src="https://links.papareact.com/fdw" alt="" className="w-12" />
                  <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
              </div>
          )}
        </div>
        <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemtoBasket} >Add To Cart</button>
        <button className="button" onClick={removeitemFromBasket} >Remove from Cart</button>
        </div>
        </div>
    )
}

export default CheckoutProduct
