import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UpdateModel from "./UpdateModel";
import "./productList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const deleteProduct = async (id) => {
    try {
      const res = await fetch(`http://your-backend.onrender.com/deleteproduct/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Item Deleted..");
        setProducts((prev) => prev.filter((p) => p._id !== id));
      } else {
        console.error(data.message);
      }
    } catch (err) {
      toast.error("Failed to Delete");
      console.error(err);
    }
  };

  const showdata = () => {
    fetch("http://your-backend.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    showdata();
  }, []);

  return (
    <div className="product-page">
      <div className="product-wrapper">

        <div className="text-center mb-5">
          <div className="line-title">
            <div className="line"></div>
            <span>PRODUCT MANAGEMENT</span>
            <div className="line"></div>
          </div>

          <h1>
            Your Handcrafted <span>Products</span>
          </h1>

          <p>
            Here's an overview of all the products you are currently selling.
          </p>
        </div>

        <div className="table-box">

          <div className="table-header">
            <span style={{ width: "40%" }}>Product</span>
            <span style={{ width: "20%" }}>Price</span>
            <span style={{ width: "20%" }}>Category</span>
            <span style={{ width: "20%" }}>Actions</span>
          </div>

          {products.map((product, idx) => (
            <div key={product._id} className="product-row" style={{borderTop:'3px solid white'}}>

              <div className="product-info">
                <img src={product.image} alt="" />
                <div>
                  <p className="title">
                    {product.title.slice(0, 40)}...
                  </p>
                  <p className="price">
                    ₹ {Math.round(product.price * 80)}
                  </p>
                </div>
              </div>

              <div className="col">
                ₹ {Math.round(product.price * 80)}
              </div>

              <div className="col">{product.category}</div>

              <div className="actions">
                <UpdateModel
                  refresh={showdata}
                  productId={product._id}
                  index={idx}
                  products={products}
                />

                <button onClick={() => deleteProduct(product._id)}>
                  Delete
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ProductList;