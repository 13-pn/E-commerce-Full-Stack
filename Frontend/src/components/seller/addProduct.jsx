import React, { useState } from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [image, setImage] = useState(null)
  const [formData, setformData] = useState({
    title: "",
    category: "",
    description: "",
    price:"",
    rating:""
  })
  
  
  const handleSubmit = async (e) => {
  e.preventDefault();
  const fd = new FormData();
  fd.append("title", formData.title);
  fd.append("category", formData.category);
  fd.append("description", formData.description);
  fd.append("price", formData.price);
  fd.append("image", image);
  fd.append("rating",formData.rating)
  
  if(formData.title==="" || formData.category==="" || formData.description==="" || formData.price==="" || !image || formData.rating===""){
    return toast.error('All fields are required....')
  }
  try {
    const res = await fetch("http://your-backend.onrender.com/api/products", {
      method: "POST",
      body: fd, 
    });

    const data = await res.json();
    console.log(data);

    toast.success('Product sucessfully added....')

    // reset form
    setformData({
      title: "",
      category: "",
      description: "",
      price: "",
      rating: "",
    });
    setImage(null) 
  } catch (error) {
    console.log(error);
    toast.error('Some thing went wrong...!')
  }
};
  return (
    <div
      className="d-flex align-items-center justify-content-center py-5"
      style={{

        background: "linear-gradient(to bottom right, #fff7ed, #fee2e2)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div className="container px-3 px-md-0">
        <div
          className="mx-auto p-4 p-md-5 shadow-lg"
          style={{
            maxWidth: "900px",
            background: "#fff",
            borderRadius: "24px",
            border: "4px solid #b91c1c",
          }}
        >
          <h2
            className="text-md-center fw-bold mb-5"
            style={{ fontSize: "2.2rem", color: "#991b1b" }}
          >
            List Your <span style={{ color: "#ea580c" }}>Handicraft</span>
          </h2>

          <form className="row g-4" onSubmit={handleSubmit}>


            <div className="col-12">
              <label className="fw-semibold mb-3 fs-6 fs-md-4" style={{ fontSize: "1.1rem", color: "#991b1b" }}>
                Product Image
              </label>
              <div className="row g-3">
                <div className="col-6 col-sm-3">
            <label
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
              width: "100%",
              height: "120px",
              border: image ? "2px solid #16a34a" : "2px dashed #fca5a5",
              borderRadius: "12px",
              background: image ? "#ecfdf5" : "#fef2f2",
              cursor: "pointer",
              transition: "0.3s",
              overflow: "hidden",
              position: "relative"
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="d-none" required
            />

            {image ? (
      <>
        <img
          src={URL.createObjectURL(image)}
          alt="preview"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px"
          }}
        />
        <span
          style={{
            position: "absolute",
            bottom: "5px",
            background: "#16a34a",
            color: "#fff",
            fontSize: "10px",
            padding: "2px 6px",
            borderRadius: "6px"
          }}
        >
          Uploaded ✓
        </span>
      </>
    ) : (
      <>
        <i
          className="bi bi-image"
          style={{ fontSize: "28px", color: "#f87171" }}
        ></i>
        <small style={{ color: "#f87171", textAlign: "center" }}>
          Upload Image
        </small>
      </>
    )}
  </label>
</div>
              </div>
            </div>


            <div className="col-12 col-md-6">
              <label className="fw-semibold mb-1" style={{ color: "#991b1b" }}>
                Product Title *
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Hand-carved Wooden Elephant"
                value={formData.title}
                onChange={(e) =>
                setformData({ ...formData, title: e.target.value })}
                style={{
                  borderRadius: "12px",
                  padding: "10px",
                  border: "2px solid #fca5a5",
                }}
              required/>
            </div>

            {/* Category */}
            <div className="col-12 col-md-6">
              <label className="fw-semibold mb-1" style={{ color: "#991b1b" }}>
                Category *
              </label>
              <select
                className="form-select"
                style={{
                  borderRadius: "12px",
                  padding: "10px",
                  border: "2px solid #fca5a5",
                  
                }}
                 value={formData.category}
                onChange={(e) =>
                  setformData({ ...formData, category: e.target.value })
                }
              required>
                <option value="">Select category</option>
                <option>Aipan Art</option>
                <option>Select Category</option>
                <option>Wooden Crafts</option>
                <option>Bamboo & Ringaal Crafts</option>
                <option>Pooja & Spiritual Items</option>
                <option>Home & decoration</option>
                <option>Handmade Accessories</option>
                <option>Wool Textiles</option>
                <option>Cultural Crafts</option>
              </select>
            </div>

            {/* Description */}
            <div className="col-12">
              <label className="fw-semibold mb-1" style={{ color: "#991b1b" }}>
                Product Description *
              </label>
              <textarea
                rows="4"
                className="form-control "
                placeholder="Write product description..."
                value={formData.description}
                onChange={(e) =>
                  setformData({ ...formData, description: e.target.value })
                }
                style={{
                  borderRadius: "12px",
                  padding: "10px",
                  border: "2px solid #fca5a5",
                }}
              required></textarea>
            </div>
             
            {/* Price */}
            <div className="col-12 col-md-6">
              <label className="fw-semibold mb-1" style={{ color: "#991b1b" }}>
                Price *
              </label>
              <input
                type="number"
                className="form-control "
                placeholder="₹0"
                 value={formData.price}
                onChange={(e) =>
                  setformData({ ...formData, price: e.target.value })
                }
                style={{
                  borderRadius: "12px",
                  padding: "10px",
                  border: "2px solid #fca5a5",
                }}
              required/>
            </div>
                {/* Rating */}
            <div className="col-12 col-md-6">
              <label className="fw-semibold mb-1" style={{ color: "#991b1b" }}>
                Rating *
              </label>
                <input type="number" min="1" max="5" step="0.1" className="form-control "
                value={formData.rating}
                onChange={(e)=>{setformData({...formData,rating:e.target.value})}}
                placeholder="0.0" style={{
                  borderRadius: "12px",
                  padding: "10px",
                  border: "2px solid #fca5a5",
                }}required/>
            </div>

            {/* Submit Button */}
            <div className="col-12">
              <button
              type="submit"
                className="w-100 fw-bold"
                style={{
                  padding: "14px",
                  borderRadius: "12px",
                  border: "none",
                  color: "#fff",
                  fontSize: "18px",
                  background: "linear-gradient(to right, #b91c1c, #ea580c)",
                  transition: "0.3s",
                }}
              >
                <i className="bi bi-plus-circle me-2"></i>
                ADD PRODUCT
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;