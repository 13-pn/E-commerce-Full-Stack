import React, { useState } from "react";

const UserLogin = () => {
  const [state, setState] = useState("login");  

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      >
      <div
        className="position-relative p-4 auth-form"
        style={{
          maxWidth: "400px",
          backgroundColor: "#ffe5d4",
          border: "4px solid #b91c1c",
          borderRadius: "1rem",
        }}
      >
        {/* Top Border */}
        <div
          className="position-absolute top-0 start-0 w-100"
          style={{ height: "4px", backgroundColor: "#dc2626" }}
        ></div>

        {/* Header */}
        <div className="text-center mb-4 auth-header">
          <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
            <div style={{ width: "24px", height: "2px", backgroundColor: "#dc2626" }}></div>
            <span style={{ color: "#dc2626", fontWeight: 500 }}>WELCOME</span>
            <div style={{ width: "24px", height: "2px", backgroundColor: "#dc2626" }}></div>
          </div>
          <h2 style={{ fontWeight: 700, color: "#b91c1c" }}>
            <span style={{ color: "#dc2626" }}>GARHKUMON</span>{" "}
            {state === "login" ? "Login" : "Sign Up"}
          </h2>
          <p style={{ color: "#b91c1c" }}>
            {state === "login"
              ? "Sign in to continue your craft journey"
              : "Join our community of craft enthusiasts"}
          </p>
        </div>

        {/* Form */}
        <form>
          {/* Full Name only for register */}
          {state === "register" && (
            <div className="mb-3">
              <label className="form-label text-danger">Full Name</label>
              <input type="text" className="form-control text-danger" placeholder="Enter your name" />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label text-danger">Email Address</label>
            <input type="email" className="form-control text-danger" placeholder="Enter your email" />
          </div>

          <div className="mb-3">
            <label className="form-label text-danger">Password</label>
            <input type="password" className="form-control text-danger" placeholder="Enter your password" />
          </div>

          {/* Toggle Login/Register */}
          <div className="text-center mb-3">
            {state === "login" ? (
              <p className="text-danger">
                New to GARHKUMON?{" "}
                <span
                  style={{ color: "#dc2626", cursor: "pointer", fontWeight: 500 }}
                  onClick={() => setState("register")}
                >
                  Create account
                </span>
              </p>
            ) : (
              <p className="text-danger">
                Already have an account?{" "}
                <span
                  style={{ color: "#dc2626", cursor: "pointer", fontWeight: 500 }}
                  onClick={() => setState("login")}
                >
                  Login here
                </span>
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn w-100"
            style={{ backgroundColor: "#b91c1c", color: "#fff", fontWeight: 500 }}
          >
            {state === "login" ? "Login to Account" : "Create Account"}
          </button>
        </form>

        {/* Bottom Border */}
        <div
          className="position-absolute bottom-0 start-0 w-100"
          style={{ height: "4px", backgroundColor: "#dc2626" }}
        ></div>
      </div>
    </div>
  );
};

export default UserLogin;