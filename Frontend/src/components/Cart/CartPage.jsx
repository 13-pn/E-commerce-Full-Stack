import React, { useState } from 'react'
import { useContextpvd } from '../context/context'
import { Link } from 'react-router-dom';
import CurrentLocation from '../Location/CurrentLocation';
import CartItems from './CartItems';
import EmptyCart from './EmptyCart';

const CartPage = () => {
    const {CartArr, setCartArr, LocationText,setLocationText}=useContextpvd();
   

    const getSubtotal = () => {
  return CartArr.reduce((total, item) => {
    return total + item.price * (item.quantity || 1);
  }, 0);
};
 
  const withTax=()=>{
    return getSubtotal()*2/100;
  }

  const grandTotal=()=>{
    return getSubtotal()+withTax();
  }
  return (
    <div>
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-5 text-danger">Handcrafted Treasures Await</h1>
        <p className="text-muted">Review your selection of authentic Pahadi handicrafts</p>
      </div>

      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8 mb-4">
          <div className="card border-danger">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="h5 text-danger">Shopping Cart</h2>
                <span className="badge bg-danger">{CartArr.length} Items</span>
              </div>

                {CartArr.length?<CartItems />:<EmptyCart />}
             
      

              <Link to='/Aipan-Art'><button className="btn btn-link text-danger mt-3">← Continue Shopping</button></Link>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="card border-danger">
            <div className="card-body">
              <h2 className="h5 text-danger mb-3">Order Summary</h2>

              {/* Address Section */}
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-medium">Delivery Address</span>
                <button 
                className="btn btn-link p-0"
                data-bs-toggle="offcanvas" 
                data-bs-target="#demo">
                Change
                </button>
                </div>
                <div className="border p-2 rounded mt-2" id="selectedAddress">
                 {LocationText}
                </div>
              </div>

              {/* Payment Section */}
              <div className="mb-3">
                <label className="form-label fw-medium">Payment Method</label>
                <select className="form-select" id="paymentOption">
                  <option >Cash On Delivery</option>
                  <option >Online Payment</option>
                </select>
              </div>

              <hr />

              {/* Totals */}
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span id="subtotal">
  ${getSubtotal()}
</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Shipping</span>
                  <span className="text-success fw-semibold">Free</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Tax (2%)</span>
                  
                  <span id="tax">${withTax()}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold">
                  <span>Total Amount</span>
                  <span id="total">₹{grandTotal()}</span>
                </div>
              </div>

              <button className="btn btn-danger w-100">Place Order</button>
              <p className="text-center text-muted small mt-2">🔒 Your transaction is secure and encrypted</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default CartPage
