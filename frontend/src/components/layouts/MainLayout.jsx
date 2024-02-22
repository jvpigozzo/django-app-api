import Logo from "../ui/Logo";
import React, { useState } from "react";
import Dashboard from "../../pages/Dashboard";
import { Route, Routes, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    navigate(`/${menu}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="sidebar">
          <Logo />
          <br></br>
          <nav>
            <button
              className={selectedMenu === "dashboard" ? "active" : ""}
              onClick={() => handleMenuClick("dashboard")}
            >
              User List
            </button>
          </nav>
        </div>
      </header>
      <main>
        <div className="content">
          <Routes>    
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
