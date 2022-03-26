import React, { useContext } from "react";
import logoImg from "../../assets/LogoNav.png";
import { AuthContext } from "../../context/AuthContext";
import { AuctionBody } from "../auctions/AuctionBody";
import { About } from "../Pages/About";
import { Faq } from "../Pages/Faq";

import { LoginComp } from "./LoginComp";
import { RegisterComp } from "./RegisterComp";

export const NavComp = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    // <nav className="navbar sticky-top navbar-light bg-light shadow-sm">
    //   <div className="container-fluid">
    //     <div className="navbar-brand ">
    //       <img src={logoImg} alt="logo" height="95" />
    //     </div>
    //     <div className="d-flex">
    //       <div className="col">
    //         {currentUser ? (
    //           <>
    //             <div className="btn btn-outline-secondary mx-2 disabled">
    //               {currentUser.email}
    //             </div>
    //             <div
    //               onClick={() => logout()}
    //               className="btn btn-outline-secondary mx-2"
    //             >
    //               Logout
    //             </div>
    //           </>
    //         ) : (
    //           <>
    //             <LoginComp />
    //             <RegisterComp />
    //           </>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </nav>

    <nav
      class="navbar navbar-expand-lg "
      style={{ BackgroundColor: "#F4F4F4" }}
    >
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarButtonsExample">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <img src={logoImg} alt="logo" height="95" />
            </li>
          </ul>
        </div>
        <div class="d-flex align-items-center ">
          {currentUser ? (
            <>
              <div className="btn btn-outline-secondary mx-2 disabled">
                {currentUser.email}
              </div>
              <div
                onClick={() => logout()}
                className="btn btn-outline-secondary mx-2"
              >
                Logout
              </div>
            </>
          ) : (
            <>
              <div
                class="d-flex align-items-center mx-2 pt-3"
                style={{ color: "#4F1700" }}
              >
                <p class="px-3">Popular Biddings</p>
                <p>About Us</p>
                <p class="px-3">FAQ</p>
              </div>

              <LoginComp />
              <RegisterComp />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
