import React from "react";
import "./App.css";

function App() {
  return (
    
    <div className="App">
        {/* Topbar */}
        <div className="topbar">
    <div className="topbar-item empty-left"></div> {/* Ô trống trái nhỏ */}

    <div className="topbar-item flag-box">
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" alt="Vietnam Flag" className="flag" />
    </div>

    <div className="topbar-item text-box">
      Du Lịch Việt Nam
    </div>

    <div className="topbar-item login-box">
  <span>Đăng nhập</span>
  <span className="icon">
    <img className="icon-img" src="/hinh2.jpg" alt="Đăng nhập" />
  </span>
</div>

<div className="topbar-item register-box">
  <span>Đăng ký</span>
  <span className="icon">
    <img className="icon-img" src="/hinh3.jpg" alt="Đăng ký" />
  </span>
</div>


    <div className="topbar-item empty-right"></div> {/* Ô trống phải to */}
  </div>


      {/* Navbar */}
      <div className="navbar">
        <div className="nav-item">Trang chủ <span className="arrow">&rsaquo;</span></div>
        <div className="nav-item">Giới thiệu <span className="arrow">&rsaquo;</span></div>
        <div className="logo">NHÓM 01</div>
        <div className="nav-item">Tin tức <span className="arrow">&rsaquo;</span></div>
        <div className="nav-item">ChatBox <span className="arrow">&rsaquo;</span></div>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
      <span className="breadcrumb-home">Trang chủ</span> <span className="arrow">&rsaquo;</span> Tìm kiếm
      </div>

      {/* Search Section */}
      <div className="search-section">
        <h2>Nhập địa điểm cần tìm kiếm</h2>
        <div className="search-box">
          <input type="text" placeholder="Tìm kiếm..." />
          <button>Tìm kiếm</button>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        © Bản quyền thuộc về Nhóm 1 Công nghệ phần mềm
      </div>
    </div>
  );
}

export default App;
