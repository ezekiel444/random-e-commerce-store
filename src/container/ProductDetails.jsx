import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; // Fixed import
import { select_product, remove_select_product } from '../redux/actions/Product_Action';

export default function ProductDetails() {
  const { productID } = useParams();
  const dispatch = useDispatch();
  
  // Get product from state
  const product = useSelector((state) => state.product);
  
  // Modern Safety: Destructure only if product has keys
  const { title, image, price, category, description } = product || {};

  useEffect(() => {
    const fetchSingleItem = async () => {
      if (productID && productID !== "") {
        try {
          const { data } = await axios.get(`https://fakestoreapi.com/products/${productID}`);
          dispatch(select_product(data));
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
    };

    fetchSingleItem();

    // Cleanup function when leaving the page
    return () => {
      dispatch(remove_select_product());
    };
  }, [productID, dispatch]);

  return (
    <div className="container" style={{ marginTop: '20px' }}>
      {/* Fixed logic: Check if product object is empty */}
      {Object.keys(product).length === 0 ? (
        <div className="ui active centered inline loader">Loading...</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <span className="ui teal tag label">${price}</span>
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
      )}
    </div>
  );
}