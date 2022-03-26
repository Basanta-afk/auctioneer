import React from "react";
import HeroImg from "../../assets/Hero2.jpg";
import { RegisterComp } from "../authentication/RegisterComp";

export const Hero = () => {
  return (
    <div style={{ backgroundColor: "#AF9F8C" }}>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <div className="card p-3 shadow-lg">
              <img
                src={HeroImg}
                class="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <h2 class="display-3 fw-bold lh-1 mb-3">
              WE DONT
              <span>
                <p
                  class="display-3 fw-bold lh-1 mb-3"
                  style={{ color: "#A56A5C" }}
                >
                  LIE{" "}
                </p>
              </span>
              <br />
              IT'S ACTUALLY WORTH A <br />
              <span>
                <p
                  class="display-3 fw-bold lh-1 mb-3"
                  style={{ color: "#A56A5C" }}
                >
                  TRY
                </p>
              </span>
            </h2>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <RegisterComp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
