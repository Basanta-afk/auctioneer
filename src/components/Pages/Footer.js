import React from "react";
import FooterImg from "../../assets/FooterImg.png";

import {
  FiPhoneCall,
  FiMail,
  FiNavigation,
  FiTwitter,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";
export const Footer = () => {
  return (
    <div style={{ backgroundColor: "#515161" }}>
      <footer class="container py-5">
        <div class="row">
          <div className="col-12 col-md ">
            <img src={FooterImg} alt="logo" height="115" />
            <div class="d-flex pt-3">
              <p class="px-3">
                <FiTwitter size="1.5rem" color="#71707B" />
              </p>
              <FiInstagram size="1.5rem" color="#71707B" />
              <p class="px-3">
                <FiFacebook size="1.5rem" color="#71707B" />
              </p>
            </div>
          </div>
          <div class="col-8 col-md">
            <h3 style={{ color: "#DEDEDE" }}>Quick Links</h3>
            <ul class="list-unstyled text-small" style={{ color: "#71707B" }}>
              <p>Contacts</p>
              <p>Privacy Policy</p>
              <p>Terms of Services</p>
            </ul>
          </div>
          <div class="col-8 col-md">
            <h3 style={{ color: "#DEDEDE" }}>Get in Touch</h3>
            <ul class="list-unstyled text-small" style={{ color: "#71707B" }}>
              <p>
                <FiNavigation size="1.5rem" color="#DEDEDE" />
                <span>Kathmandu, Nepal</span>
              </p>
              <p>
                <FiPhoneCall size="1.5rem" color="#DEDEDE" />
                <span>01-4526172 , 9843552102</span>
              </p>
              <p>
                <FiMail size="1.5rem" color="#DEDEDE" />
                <span>basantabhusan@gmail.com</span>
              </p>
            </ul>
          </div>
        </div>
      </footer>
      <footer
        id="sticky-footer"
        class="flex-shrink-0 py-4 bg-dark text-white-50"
      >
        <div class="container text-center">
          <small>&copy; Auctioner 2022. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
};
