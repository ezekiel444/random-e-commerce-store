import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import {select_product, remove_select_product} from '../redux/actions/Product_Action'

export default function ProductDetails() {
    const {productID} = useParams()
const dispatch = useDispatch()
const product = useSelector(state=>state.product)
const {title, image,price,category,description } = product

useEffect(()=>{
    const fetchSingleItem = async()=>{
        try {
            const {data} =await axios.get(`https://fakestoreapi.com/products/${productID}`)
            dispatch(select_product(data))
        } catch (error) {
            
        }
    }
    fetchSingleItem()
    return ()=>{
        dispatch(remove_select_product())
    }

},[productID,dispatch])


    return (
        <div>
{
    !product && Object.entries(product).length < 1 ? <div>Loading</div> : 
    <div className="ui placeholder segment">
    <div className="ui two column stackable center aligned grid">
      <div className="ui vertical divider"></div>
      <div className="middle aligned row">
        <div className="column lp">
          <img className="ui fluid image" src={image} alt={title} />
        </div>
        <div className="column rp">
          <h1>{title}</h1>
          <h2>
            <p className="ui teal tag label">${price}</p>
          </h2>
          <h3 className="ui brown block header">{category}</h3>
          <p>{description}</p>
          <div className="ui vertical animated button" tabIndex="0">
            <div className="hidden content">
              <i className="shop icon"></i>
            </div>
            <div className="visible content">Add to Cart</div>
          </div>
        </div>
      </div>
    </div>
  </div>
}        </div>
    )
}
