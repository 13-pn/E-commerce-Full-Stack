import React, { useState, useEffect } from "react";
import search_icon from "../../assets/images/searchicon.png";
import "./SearchBox.css";
import Modal from "../Modal/Model";
import ProductDetails from "../Products/ProductDetails";

const SearchBox = () => {
  const [products, setProducts] = useState([]);
  const [inp, setInp] = useState("");
  const [suggestions, setSuggestions] = useState([]);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setInp(value);

    if (!value) {
      setSuggestions([]);
      return;
    }

    const filtered = products.filter(
      (p) =>
        p.title.toLowerCase().includes(value.toLowerCase()) ||
        p.description.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filtered);
  };


  const handleKeyDown = (e) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      handleProductClick(suggestions[0]);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setInp("");
    setSuggestions([]);
  };

  return (
    <div style={{ position: "relative", flex: 1 }}>
      <div className="inp-box d-flex p-2 align-items-center ps-3">
        <img src={search_icon} style={{ height: "25px" }} alt="search" />
        <input
          type="text"
          className="nav-inp"
          placeholder="Search for Product, Brand and More"
          value={inp}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      {suggestions.length > 0 && (
        <ul
          className="suggestions-list"
          style={{
            width: "100%",
            position: "absolute",
            top: "100%",
            left: 0,
            background: "#fff",
            zIndex: 9999,
          }}
        >
          {suggestions.map((item) => (
            <li
              key={item.id}
              onClick={() => handleProductClick(item)}
              style={{ display: "flex", gap: "10px", padding: "5px", cursor:"pointer" }}
            >
              <img src={item.image} width={40} alt="" />
              {item.title}
            </li>
          ))}
        </ul>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedProduct?.title}
      >
        {selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </Modal>
    </div>
  );
};

export default SearchBox;