import React, {  useEffect, useState } from 'react'
import './ProductGrid.css'
import { useContextpvd } from '../context/context';
import ProductDetails from './ProductDetails';
import Modal from '../Modal/Model';


const ProductGrid = ({ products }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
  const {CartArr,setCartArr,RemoveFromCart,addToCart} = useContextpvd()
  const [Cartbtn, setCartbtn] = useState("")
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [show, setShow] = useState(false);

useEffect(() => {
  setTimeout(() => {
    setShow(true);
  }, 5000);
}, []);

if (!products || products.length === 0) {
  return show ? (
    <p>No products here....</p>
  ) : null;
}
  

  return (
    <div className="container-fluid">
      <div className="row g-4">
        {products.map((product) => {
          return (
            <div className="col-6  col-sm-6 col-md-4 col-lg-3" key={product.id} >
              <div className="product-card"  onClick={() => {
            setSelectedProduct(product);
            setIsModalOpen(true);
          }}>

                <div className="img-box" >
                <img src={product.image} alt={product.title} />

                  <span className="rating">
                    {product.rating} ⭐
                  </span>
                </div>


                <div className="content">
                  <h6>{product.title.slice(0, 40)}...</h6>

                  <div className="price">
                    <span className="new">₹{product.price}</span>
                    <span className="old">₹{(product.price + 27.2).toFixed(2)}</span>
                  </div>
                    {
                    CartArr.some(item => item._id === product._id)
                      ? <button className="cart-btn" onClick={(e) => {

                        e.stopPropagation();
                        RemoveFromCart(product)
                      }}>Remove from Cart</button>
                      : <button
                        className="cart-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product)
                        }}
                      >
                        Add to cart
                      </button>
                  }
                </div>

              </div>
            </div>
          );
        })}
      </div>
      <Modal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    title={selectedProduct?.title}
  >
    {selectedProduct && <ProductDetails product={selectedProduct}  onClose={() => setIsModalOpen(false)}/>}
  </Modal>
    </div>
  );
};

export default ProductGrid;