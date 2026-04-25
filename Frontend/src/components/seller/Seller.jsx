import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useContextpvd } from "../context/context";
import SellerLogin from "./SellerLogin";

import Add_icon from "../../assets/images/add_icon.svg";
import order_icon from "../../assets/images/order_icon.svg";
import productlist_icon from "../../assets/images/product_list_icon.svg";

const Seller = () => {
  const { sellerisLogin } = useContextpvd();

  const navStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "#fecaca" : "transparent",
    borderRadius: "8px",
  });

  return (
    <div>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "60px",
          zIndex: 1000,
          background: "#fff7ed",
          borderBottom: "4px solid #7f1d1d",
        }}
        className="d-flex justify-content-between align-items-center px-3"
      >
        <Link to="/" className="text-decoration-none">
          <h5 className="m-0 fw-bold">
            <span style={{ color: "#000" }}>Uttrakhand</span>{" "}
            <span style={{ color: "#7f1d1d" }}>Handicrafts</span>
          </h5>
        </Link>

        <div className="d-flex align-items-center gap-2">
          <span className="fw-bold d-none d-sm-block">Hi Admin</span>
          <SellerLogin />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "60px",
          minHeight: "100vh",
        }}
      >

        <div
          className="sidebar"
          style={{
            background: "#fff7ed",
            borderRight: "4px solid #7f1d1d",
            padding: "10px",
          }}
        >

          <NavLink
            to="/seller"
            end
            style={navStyle}
            className="d-flex align-items-center gap-2 p-2 text-decoration-none"
          >
            <img src={Add_icon} width="22" />
            <span style={{ color: "#7f1d1d", fontWeight: "600" }}>
              Add Product
            </span>
          </NavLink>

          <NavLink
            to="/seller/product-list"
            style={navStyle}
            className="d-flex align-items-center gap-2 p-2 text-decoration-none"
          >
            <img src={productlist_icon} width="22" />
            <span style={{ color: "#7f1d1d", fontWeight: "600" }}>
              Product List
            </span>
          </NavLink>

          <NavLink
            to="/seller/orders"
            style={navStyle}
            className="d-flex align-items-center gap-2 p-2 text-decoration-none"
          >
            <img src={order_icon} width="22" />
            <span style={{ color: "#7f1d1d", fontWeight: "600" }}>
              Orders
            </span>
          </NavLink>
        </div>

        <div style={{ flex: 1, padding: "15px" }}>
          <Outlet />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {

          .sidebar {
            position: fixed;
            top: 60px;
            left: 0;
            right: 0;
            width: 100%;
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-around;
            align-items: center;
            padding: 8px 0;
            border-right: none;
            border-bottom: 3px solid #7f1d1d;
            z-index: 999;
          }

          .sidebar a {
            flex: 1;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            gap: 2px;
          }

          .sidebar img {
            width: 20px;
            height: 20px;
          }

          .sidebar span {
            font-size: 10px;
          }

          /* content push down */
          .sidebar + div {
            margin-top: 70px;
          }
        }
      `}</style>

    </div>
  );
};

export default Seller;