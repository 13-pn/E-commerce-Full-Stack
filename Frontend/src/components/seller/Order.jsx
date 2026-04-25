import React from "react";

const Order = () => {
  const dummyOrders = [
    {
      _id: "ORD12345",
      isPaid: true,
      amount: 1200,
      paymentType: "COD",
      orderDate: "2026-03-20T10:30:00Z",
      status: "Processing",
      address: {
        firstName: "Rahul",
        lastName: "Sharma",
        street: "MG Road",
        city: "Jaipur",
        state: "Rajasthan",
        zipCode: "302001",
        country: "India",
        phone: "9876543210",
      },
      items: [
        { product: { name: "Wooden Elephant", image: ["https://via.placeholder.com/60"] }, quantity: 1 },
        { product: { name: "Handmade Pot", image: ["https://via.placeholder.com/60"] }, quantity: 2 },
      ],
    },
    {
      _id: "ORD12346",
      isPaid: false,
      amount: 800,
      paymentType: "Online",
      orderDate: "2026-03-21T11:45:00Z",
      status: "Pending",
      address: {
        firstName: "Anita",
        lastName: "Gupta",
        street: "MG Road",
        city: "Udaipur",
        state: "Rajasthan",
        zipCode: "313001",
        country: "India",
        phone: "9123456780",
      },
      items: [
        { product: { name: "Clay Vase", image: ["https://via.placeholder.com/60"] }, quantity: 1 },
      ],
    },
  ];

  return (
    <div
      className="d-flex justify-content-center py-5"
      style={{
        background: "linear-gradient(to bottom right, #ffedd5, #fee2e2)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div>

        <div className=" mb-5">
          <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
            <div style={{ width: "40px", height: "2px", background: "#b91c1c" }}></div>
            <span className="fw-semibold" style={{ color: "#b91c1c" }}>ORDER HISTORY</span>
            <div style={{ width: "40px", height: "2px", background: "#b91c1c" }}></div>
          </div>

          <h1 className="fw-bold mb-2 text-center" style={{ color: "#991b1b", fontSize: "2rem" }}>
            Manage Your <span style={{ color: "#b91c1c" }}>Orders</span>
          </h1>
          <p className="mx-auto" style={{ color: "#b91c1c", maxWidth: "500px" }}>
            Keep track of all your handcrafted product purchases and their statuses.
          </p>
        </div>

        {/* EMPTY STATE */}
        {dummyOrders.length === 0 && (
          <div className="text-center py-5 bg-white rounded-3 shadow-lg border border-4 mb-4"
               style={{ borderColor: "#b91c1c" }}>
            <div className="mb-3">
              <div
                className="rounded-circle d-inline-flex align-items-center justify-content-center"
                style={{ width: "80px", height: "80px", background: "#fca5a5" }}
              >
                <span className="text-white fs-2">📄</span>
              </div>
            </div>
            <p className="text-danger mb-3">You haven't received any orders yet.</p>
            <button className="btn fw-semibold"
                    style={{ backgroundColor: "#b91c1c", color: "#fff" }}>
              Add Your First Product
            </button>
          </div>
        )}

        {/* ORDERS LIST */}
        <div className="d-flex flex-column gap-4">
          {dummyOrders.map((order, index) => (
            <div
              key={index}
              className="bg-orange-50 rounded-3 shadow-lg border border-4 p-4 p-md-5 text-dark"
              style={{ borderColor: "#b91c1c" }}
            >

              {/* Header */}
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center border-bottom pb-3 mb-3"
                   style={{ borderColor: "#fca5a5", borderWidth: "2px" }}>
                <h5 className="fw-bold mb-2 mb-md-0">
                  Order ID: <span className="text-danger">{order._id}</span>
                </h5>
                <div className="d-flex gap-2 align-items-center">
                  <span className={`badge ${order.isPaid ? "bg-success" : "bg-warning text-dark"}`}>
                    {order.isPaid ? "Paid" : "Pending Payment"}
                  </span>
                  <span className="fw-bold text-danger">₹{order.amount}</span>
                </div>
              </div>

              <div className="row g-4">

                {/* Products */}
                <div className="col-md-6">
                  <h6 className="fw-semibold text-danger">Products:</h6>
                  {order.items.map((item, idx) => (
                    <div key={idx} className="d-flex align-items-center gap-3 p-2 border rounded mb-2 bg-light">
                      <img
                        src={item.product.image[0]}
                        alt={item.product.name}
                        className="rounded border"
                        width="60"
                        height="60"
                      />
                      <div>
                        <p className="mb-0 fw-semibold">{item.product.name}</p>
                        <small>Quantity: {item.quantity}</small>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer & Order Info */}
                <div className="col-md-6">
                  <h6 className="fw-semibold text-danger">Customer Details:</h6>
                  <div className="border rounded p-3 bg-light mb-3">
                    <p className="mb-1"><strong>Name:</strong> {order.address.firstName} {order.address.lastName}</p>
                    <p className="mb-1"><strong>Address:</strong> {order.address.street}, {order.address.city}, {order.address.state}, {order.address.zipCode}, {order.address.country}</p>
                    <p className="mb-0"><strong>Phone:</strong> {order.address.phone}</p>
                  </div>

                  <h6 className="fw-semibold text-danger">Order Details:</h6>
                  <div className="border rounded p-3 bg-light">
                    <p className="mb-1"><strong>Payment:</strong> {order.paymentType}</p>
                    <p className="mb-1"><strong>Date:</strong> {new Date(order.orderDate).toLocaleString()}</p>
                    <div className="d-flex align-items-center">
                      <strong>Status:</strong>
                      <select className="form-select form-select-sm ms-2" style={{ width: "150px" }}>
                        <option>Pending</option>
                        <option>Processing</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                        <option>Cancelled</option>
                      </select>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Order;