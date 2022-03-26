import React from "react";
import AboutImg from "../../assets/AboutImg.png";
export const About = () => {
  return (
    <div style={{ backgroundColor: "#C4C4C4" }}>
      <div class="px-4 py-5">
        <img
          class="d-block mx-auto mb-4"
          src={AboutImg}
          alt=""
          width="488"
          height="348"
        />
        <h1 class="display-5 fw-bold text-center" style={{ color: "#212529" }}>
          About Us
        </h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Online auction however is a different business model where the items
            are sold through price bidding. Usually bidding have start price and
            ending time. Poten tial buyers in auction and the winner is the one
            who bids the item for highest pr ice. We treat the fraud detection
            with a binary classification. For buying produc t online user have
            to provide his personal details like email address, license nu mber,
            PAN number etc. Only the valid user will have authority to bid. This
            preve nts various frauds according in online shopping.
          </p>
        </div>
      </div>
    </div>
  );
};
