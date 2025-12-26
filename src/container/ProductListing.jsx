import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent';
import {get_products} from '../redux/actions/Product_Action'

export default function ProductListing() {

    const dispatch = useDispatch()

useEffect(() => {
    const fetchProducts = async ()=>{
        try{
    const {data} = await axios.get("https://fakestoreapi.com/products")
    
    dispatch(get_products(data))
        }
        catch(error){
            console.log('err', error);
        }
    }
    fetchProducts()
}, [dispatch])

    return (
        <div className="ui grid container">
      <ProductComponent />
    </div>
    )
}
