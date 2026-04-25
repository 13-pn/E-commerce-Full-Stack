import React from "react";
import { useContextpvd } from "../context/context";


const CartItems = () => { 
  const {CartArr , setCartArr,RemoveFromCart}=useContextpvd()
  const updateCartItem = (id, qty) => { 
  const updatedCart = CartArr.map((item) => 
  item.id === id ? { ...item, quantity: qty } : item ); 
  setCartArr(updatedCart); };

  return (
    <div className="card p-4 border border-danger rounded-3 bg-light ">
      {/* Table Headers */}
      <div className="row text-danger fw-bold border-bottom pb-2 mb-3 d-none d-md-flex">
        <div className="col-6">Product Details</div>
        <div className="col-2 text-center">Quantity</div>
        <div className="col-2 text-center">Subtotal</div>
        <div className="col-2 text-center">Action</div>
      </div>

      {/* Cart Items */}
      {CartArr.map((product) => {
      return(
        <div
  key={product.id}
  className="row align-items-center py-3 border-bottom"
>
  {/* Product Details */}
  <div className="col-12 col-md-6 d-flex align-items-center gap-3 mb-2 mb-md-0">
    <div
      className="border rounded bg-white d-flex align-items-center justify-content-center"
      style={{ width: "60px", height: "60px", overflow: "hidden" }}
    >
      <img src={product.image} alt={product.name} className="img-fluid" />
    </div>
    <div>
      <p className="mb-1 fw-bold text-danger">{product.title}</p>
      <p className="mb-1 text-danger">₹{product.price}</p>
    </div>
  </div>

  {/* Quantity + Subtotal + Action (Mobile Row) */}
  <div className="col-12 col-md-6 d-flex justify-content-between align-items-center">
    
    {/* Quantity */}
    <div className="d-flex gap-2 align-items-center">
      <small className="text-muted d-md-none">Qty</small>
      <select
        className="form-select form-select-sm text-danger"
        value={product.quantity || 1}
        onChange={(e) => updateCartItem(product.id, Number(e.target.value))}
      >
        {Array(10)
          .fill("")
          .map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
      </select>
    </div>

    {/* Subtotal */}
    <div className="fw-bold text-danger text-center">
      <small className="d-md-none">Total</small><br />
      ₹{product.price * (product.quantity || 1)}
    </div>

    {/* Remove */}
    <button
      className="btn btn-outline-danger btn-sm"
      onClick={() => RemoveFromCart(product)}
    >
      ✕
    </button>
  </div>
</div>

  )})}
  </div>)
};

export default CartItems;