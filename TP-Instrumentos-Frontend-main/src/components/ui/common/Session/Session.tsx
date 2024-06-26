// Session.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Session.module.css";
import { useAuth } from "../../../../hooks/useAuth";

export const Session: React.FC = () => {
  const { isAuthenticated, username, role, logout } = useAuth();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleIconClick = () => {
    if (isAuthenticated && role !== "INVITADO") {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      logout();
      navigate("/login");
    }
  };

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    navigate("/login");
  };

  return (
    <div className={styles.sessionContainer}>
      {isAuthenticated && <span style={{color:'white'}}>Rol: {role}</span>}
      <span
        className={`material-symbols-outlined ${styles.icon}`}
        onClick={handleIconClick}
        style={{color:'white'}}
      >
        account_circle
      </span>
      {isDropdownOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownItem} onClick={handleLogout}>
            Cerrar Sesión
          </div>
        </div>
      )}
    </div>
  );
};
