import React, { useEffect } from "react";
import "./LoginModel.css"; 

const LoginModal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="Loginmodal-overlay" onClick={onClose}>
      <div className="Loginmodal-content" onClick={(e) => e.stopPropagation()}>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default LoginModal;