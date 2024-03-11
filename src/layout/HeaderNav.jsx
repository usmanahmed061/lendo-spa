import React from "react";
import ProfileIcon from "../assets/Profile";
import Notification from "../assets/Notification";

const HeaderNav = () => {
  return (
    <div className="row border-bottom align-items-center mx-4">
      <div className="col-9">
        <nav class="nav align-items-center ps-1 py-5">
          <a class="nav-link ps-0 pb-0 pe-7" href="/">
            Overview
          </a>
          <a class="nav-link ps-0 pb-0 pe-7" href="/">
            Invest
          </a>
          <a
            class="nav-link ps-0 pb-0 pe-7 fw-bold text-decoration-none"
            href="/"
          >
            Auto-Invest
            <hr className="active-nav-tab m-0"></hr>
          </a>

          <a class="nav-link ps-0 pb-0 pe-7" href="/">
            My Portfolio
          </a>
        </nav>
      </div>
      <div className="col-3">
        <div className="row align-items-center">
          <div className="col-4">
            <span style={{ color: "#0D0F52" }}>En</span>
          </div>
          <div className="col-4">
            <div className="position-relative">
              <Notification />
              <span
                style={{ top: "25px", fontSize: "10px" }}
                className="position-absolute notification-counter top-2 start-20 translate-middle badge rounded-pill"
              >
                2
              </span>
            </div>
          </div>
          <div className="col-4">
            <ProfileIcon className="h-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
