import React from "react";

const SellerLogin = () => {
  return (
    <>
     <button className="btn btn-outline-danger btn-sm"
      data-bs-toggle="modal"
      data-bs-target="#sellerModal">Login</button>
    <div
      className="modal fade"
      id="sellerModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4 rounded-4 border border-3 border-danger">

          {/* Close Button */}
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3"
            data-bs-dismiss="modal"
          ></button>

          {/* Heading */}
          <h2 className="text-center fw-bold mb-4">
            <span className="text-danger">Seller</span> Login
          </h2>

          {/* Form */}
          <form>
            {/* Email */}
            <div className="mb-3">
              <label className="form-label text-danger fw-medium">
                Email
              </label>
              <input
                type="email"
                className="form-control border-danger"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label text-danger fw-medium">
                Password
              </label>
              <input
                type="password"
                className="form-control border-danger"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Button */}
            <button className="btn btn-danger w-100 fw-semibold py-2">
              Login
            </button>
          </form>

        </div>
      </div>
    </div>
    </>
  );
};

export default SellerLogin;