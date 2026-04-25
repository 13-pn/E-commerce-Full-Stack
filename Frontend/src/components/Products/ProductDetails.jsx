import React, { useState } from 'react'
import { useContextpvd } from '../context/context'
import '../Modal/Model.css'

const ProductDetails = ({ product, onClose }) => {
  const [Quantity, setQuantity] = useState(1)
  const { CartArr, addToCart, RemoveFromCart } = useContextpvd()

  return (
    <div className="container px-2 px-md-3 font-poppins">
      <div className="row g-3 g-md-4">

        {/* Product Images */}
        <div className="col-12 col-lg-6">
          <div className="d-flex flex-column flex-lg-row gap-2 gap-md-3">

            {/* Thumbnails */}
            <div className="d-flex flex-lg-column gap-2 overflow-auto">
              {[1,2].map((_,i)=>(
                <div 
                  key={i}
                  className="border rounded overflow-hidden"
                  style={{ width: "50px", height: "50px" }}
                >
                  <img 
                    src={product.image} 
                    alt="thumb" 
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-grow-1 bg-white p-2 p-md-3 border rounded shadow-sm text-center">
              <img 
                src={product.image} 
                alt="Product" 
                className="img-fluid rounded main-img"
              />
              <div className="mt-2">
                <span className="badge bg-warning text-dark small">
                  🖐️ Handcrafted
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-3">
            <h3 className="h6 fw-bold mehroon-color mb-1">
              About Product
            </h3>
            <div className="small text-muted">
              {product.description}
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="col-12 col-lg-6">
          <div className="bg-white p-3 p-md-4 border rounded shadow-sm">

            <p className="badge mb-2" style={{backgroundColor:'#7A2E22'}}>{product.category}</p>

            <h1 className="h5 h-md-4 mehroon-color mb-2">
              {product.title}
            </h1>

            {/* Rating */}
            <small className="text-muted d-block mb-3">
              ⭐ {product.rating}
            </small>

            {/* Pricing */}
            <div className="mb-3 p-2 p-md-3 bg-light rounded border">
              <div className="d-flex align-items-baseline gap-2">
                <span className="h5 h-md-4 mehroon-color mb-0">
                  ${product.price * Quantity}
                </span>
                <small className="text-success">
                  (tax included)
                </small>
              </div>
            </div>

            {/* Quantity */}
            <select
              className="form-select form-select-sm mehroon-color mb-3"
              value={Quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {Array(10).fill("").map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            {/* Buttons */}
            <div className="d-flex gap-2 flex-column flex-sm-row">

              {CartArr.some(item => item.id === product.id)
                ? (
                  <button
                    className="btn flex-fill" 
                    onClick={(e) => {
                      e.stopPropagation();
                      RemoveFromCart(product);
                      onClose();
                    }}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    className="btn btn-outline-danger flex-fill"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                      onClose();
                    }}
                  >
                    Add to Cart
                  </button>
                )
              }

              <button className="btn text-white flex-fill bg-danger">
                Buy Now
              </button>
            </div>

            {/* Extra Info */}
            <div className="mt-3 p-2 bg-light rounded border small">
              <div>Free shipping over ₹5000</div>
              <div>30-day return policy</div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductDetails