import React from "react";
import "./Faq.css";
import FaqImg from "../../assets/FaqImg.png";
import { FiPlus } from "react-icons/fi";
export const Faq = () => {
  return (
    <div class="px-4 py-5 text-center" style={{ backgroundColor: "#E5E5E5" }}>
      <section
        class="accordion-section clearfix  d-flex justify-content-around"
        aria-label="Question Accordions"
      >
        <div class="container pt-5">
          <h2 class="display-5 fw-bold" style={{ color: "#212529" }}>
            Frequently Asked Questions
          </h2>
          <div
            class="panel-group"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div class="panel">
              <div class="panel-heading p-3 " id="heading0">
                <h4 class="panel-title">
                  What are the benefits of Solodev CMS? <FiPlus size="35px" />
                </h4>
              </div>
              <div
                id="collapse0"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="heading0"
              >
                <div class="panel-body px-3 mb-4">
                  <p>
                    With Solodev CMS, you and your visitors will benefit from a
                    finely-tuned technology stack that drives the highest levels
                    of site performance, speed and engagement - and contributes
                    more to your bottom line. Our users fell in love with:
                  </p>
                  <ul>
                    <li>
                      Light speed deployment on the most secure and stable cloud
                      infrastructure available on the market.
                    </li>
                    <li>
                      Scalability – pay for what you need today and add-on
                      options as you grow.
                    </li>
                    <li>
                      All of the bells and whistles of other enterprise CMS
                      options but without the design limitations - this CMS
                      simply lets you realize your creative visions.
                    </li>
                    <li>
                      Amazing support backed by a team of Solodev pros – here
                      when you need them.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="panel ">
              <div class="panel-heading p-3" role="tab" id="heading1">
                <h4 class="panel-title">
                  How easy is it to build a website with Solodev CMS?
                  <FiPlus size="35px" />
                </h4>
              </div>
              <div
                id="collapse1"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="heading1"
              >
                <div class="panel-body px-3 mb-4">
                  <p>
                    Building a website is extremely easy. With a working
                    knowledge of HTML and CSS you will be able to have a site up
                    and running in no time.
                  </p>
                </div>
              </div>
            </div>

            <div class="panel ">
              <div class="panel-heading p-3" role="tab" id="heading2">
                <h4 class="panel-title">
                  What is the uptime for Solodev CMS?
                  <FiPlus size="35px" />
                </h4>
              </div>
              <div
                id="collapse2"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="heading2"
              >
                <div class="panel-body px-3 mb-4">
                  <p>
                    Using Amazon AWS technology which is an industry leader for
                    reliability you will be able to experience an uptime in the
                    vicinity of 99.95%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="col-10 col-sm-10 col-lg-6">
          <img
            src={FaqImg}
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div> */}
      </section>
    </div>
  );
};
