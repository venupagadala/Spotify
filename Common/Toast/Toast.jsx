import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close"; // ✅ import close icon
import "./Toast.css";

export default function Toast({ message, show, onClose }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 5000); // Auto-hide after 5s
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  const handleLoginClick = () => {
    onClose();
    navigate("/login");
  };

  return (
    <div className={`custom-toast ${show ? "show" : ""}`}>
      <InfoIcon className="toast-icon" />
      <span>{message}</span>
      <button className="toast-login-btn" onClick={handleLoginClick}>
        Login
      </button>
      <CloseIcon className="toast-close-icon" onClick={onClose} />
    </div>
  );
}
