import { useState } from "react";
import { toast } from "react-toastify";

export default function UpdateModel({
  refresh,
  productId,
  index,
  products,
}) {
  const [show, setShow] = useState(false);

  const [title, settitle] = useState(products[index].title);
  const [category, setcategory] = useState(products[index].category);
  const [description, setdescription] = useState(
    products[index].description
  );
  const [price, setprice] = useState(products[index].price);
  const [rating, setrating] = useState(products[index].rating);
  const [image, setImage] = useState(products[index].image);

  const handleUpdate = async (e, id) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://your-backend.onrender.com/updateproducts/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            category,
            description,
            price,
            rating,
            image,
          }),
        }
      );

      const data = await res.json();

      toast.success("Item updated...");
      refresh();
      setShow(false);

      console.log(data);
    } catch (err) {
      toast.error("Please try again later");
      console.log(err);
    }
  };

  return (
    <>
      <button
        className="btn btn-sm"
        onClick={() => setShow(true)}
        style={{
          backgroundColor: "#facc15",
          color: "#000",
          fontWeight: "600",
          border: "none",
        }}
      >
        Edit
      </button>

      {show && (
        <div
          className="d-flex align-items-center justify-content-center position-fixed top-0 start-0 w-100 h-100"
          style={{
            background: "rgba(0,0,0,0.6)",
            zIndex: 9999,
            padding: "10px",
          }}
        >
          <div
            className="bg-white p-3 p-md-4"
            style={{
              width: "95%",
              maxWidth: "850px",
              borderRadius: "16px",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
            }}
          >
            <button
              onClick={() => setShow(false)}
              className="btn btn-light"
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                borderRadius: "50%",
                width: "35px",
                height: "35px",
                fontWeight: "bold",
              }}
            >
              ✕
            </button>

            <h4
              className="mb-3 fw-bold"
              style={{ color: "#991b1b" }}
            >
              Edit Product
            </h4>

            <form
              className="row g-3"
              onSubmit={(e) => handleUpdate(e, productId)}
            >
              <div className="col-12">
                <label className="fw-bold mb-2">
                  Product Image
                </label>

                <label
                  className="d-flex align-items-center justify-content-center position-relative"
                  style={{
                    width: "100%",
                    maxWidth: "220px",
                    height: "150px",
                    border: image
                      ? "2px solid green"
                      : "2px dashed #dc3545",
                    borderRadius: "12px",
                    background: image ? "#eaffea" : "#fff5f5",
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                >
                  <input
                    type="file"
                    className="d-none"
                    onChange={(e) =>
                      setImage(e.target.files[0])
                    }
                  />

                  {image ? (
                    <img
                      src={
                        typeof image === "string"
                          ? image
                          : URL.createObjectURL(image)
                      }
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <span style={{ fontSize: "12px" }}>
                      Click to upload
                    </span>
                  )}
                </label>
              </div>

              <div className="col-12 col-md-6">
                <label className="fw-bold">Title</label>
                <input
                  className="form-control"
                  value={title}
                  onChange={(e) =>
                    settitle(e.target.value)
                  }
                />
              </div>

              <div className="col-12 col-md-6">
                <label className="fw-bold">Category</label>
                <select
                  className="form-select"
                  value={category}
                  onChange={(e) =>
                    setcategory(e.target.value)
                  }
                >
                  <option>Aipan Art</option>
                  <option>Wooden Crafts</option>
                  <option>Bamboo Crafts</option>
                </select>
              </div>

              <div className="col-12">
                <label className="fw-bold">
                  Description
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={description}
                  onChange={(e) =>
                    setdescription(e.target.value)
                  }
                />
              </div>

              <div className="col-12 col-md-6">
                <label className="fw-bold">Price</label>
                <input
                  type="number"
                  className="form-control"
                  value={price}
                  onChange={(e) =>
                    setprice(e.target.value)
                  }
                />
              </div>

              <div className="col-12 col-md-6">
                <label className="fw-bold">Rating</label>
                <input
                  type="number"
                  step="0.1"
                  className="form-control"
                  value={rating}
                  onChange={(e) =>
                    setrating(e.target.value)
                  }
                />
              </div>

              <div className="col-12">
                <button
                  className="btn w-100 fw-bold"
                  style={{
                    background:
                      "linear-gradient(to right, #b91c1c, #ea580c)",
                    color: "white",
                    padding: "12px",
                  }}
                >
                  UPDATE PRODUCT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}