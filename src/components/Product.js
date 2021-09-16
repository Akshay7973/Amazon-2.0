import React,{useState} from 'react'
import { StarIcon } from '@heroicons/react/solid'
// import Image from "next/image"
import Currency from 'react-currency-formatter'
import {useDispatch} from "react-redux"
import { addToBasket } from '../slices/basketSlice';

const MAX_RATING = 5;
const MIN_RATING = 2;
function Product({id,title,price,description,category,image}) {
    const [rating, setRating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
      );
      const [hasPrime, setHasPrime] = useState(Math.random() < 0.5 ? true : false);

      const dispatch=useDispatch();

      const addItemtoBasket=()=>{
        const product={
          id,
          title,category,description,
          price,image,rating,hasPrime
        }
        dispatch(addToBasket(product))
      }

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10 h-card">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
           
            <img src={image} height={200} width={200} objectFit="contain"/>

            <h4 className="my-3">{title}</h4>
            <div className="flex">
                {Array(rating).fill().map(( _,i)=>(
                   <StarIcon className="h-5 text-yellow-500"/>
                ))}
            
            </div>
            <p className="text-xs my-2 line-clamp-2 font-semibold">{description}</p>
            <div>
                <Currency quantity={price} currency="GBP"/>
            </div>
          {hasPrime &&(
              <div className="flex items-center space-x-2 -mt-5">
                  <img src="https://links.papareact.com/fdw" alt="" className="w-12" />
                  <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
              </div>
          )}
            <button
        className="mt-auto button"
        onClick={addItemtoBasket}
      >
        Add To Basket
      </button>

        </div>
    )
}

export default Product
