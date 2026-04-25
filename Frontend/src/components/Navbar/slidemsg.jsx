import React from "react";
import "./slidemsg.css";

const Slidemsg = () => {
  const messages = "🚚 Free Delivery above ₹499 | 🔥 Sale Live - Up to 50% OFF | 💯 100% Original Products | 🔄 Easy 7 Days Return | ⚡ Fast Delivery | 🔒 Secure Payments | 🎁 Exciting Offers Everyday";

  return (
    <div className="slider-wrapper">
      <div className="slider-track">
        <span className="text-light">{messages}&nbsp;&nbsp;&nbsp;</span>
        <span className="text-light">{messages}&nbsp;&nbsp;&nbsp;</span> 
      </div>
    </div>
  );
};

export default Slidemsg;