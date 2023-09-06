import React, { useState } from "react";

import Accordion from "../../../components/Accordion";

const TermsConditional = () => {
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <section className="terms_conditional">
      <div className="title-gp">
        <h3>7. Terms and Conditions</h3>
        <Accordion isOpen={termsOpen} setIsOpen={setTermsOpen} />
      </div>
      <div
        className={`hide_show_container ${
          termsOpen ? "hidden-box" : "open-box"
        }`}
      >
        <div className="para_gp">
          <p className="para_num">1</p>
          <p className="para_data">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            quasi deleniti molestiae, veniam autem reiciendis fugiat tempora
            saepe voluptatem! Veritatis nulla consequatur optio corrupti hic
            expedita ducimus totam aliquid. Ad.
          </p>
        </div>
        <div className="para_gp">
          <p className="para_num">2</p>
          <p className="para_data">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            quasi deleniti molestiae, veniam autem reiciendis fugiat tempora
            saepe voluptatem! Veritatis nulla consequatur optio corrupti hic
            expedita ducimus totam aliquid. Ad.
          </p>
        </div>
        <div className="para_gp">
          <p className="para_num">3</p>
          <p className="para_data">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            quasi deleniti molestiae, veniam autem reiciendis fugiat tempora
            saepe voluptatem! Veritatis nulla consequatur optio corrupti hic
            expedita ducimus totam aliquid. Ad.
          </p>
        </div>
        <div className="para_gp">
          <p className="para_num">4</p>
          <p className="para_data">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            quasi deleniti molestiae, veniam autem reiciendis fugiat tempora
            saepe voluptatem! Veritatis nulla consequatur optio corrupti hic
            expedita ducimus totam aliquid. Ad.
          </p>
        </div>
        <div className="para_gp">
          <p className="para_num">5</p>
          <p className="para_data">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            quasi deleniti molestiae, veniam autem reiciendis fugiat tempora
            saepe voluptatem! Veritatis nulla consequatur optio corrupti hic
            expedita ducimus totam aliquid. Ad.
          </p>
        </div>
        <div className="para_gp">
          <p className="para_num">6</p>
          <p className="para_data">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            quasi deleniti molestiae, veniam autem reiciendis fugiat tempora
            saepe voluptatem! Veritatis nulla consequatur optio corrupti hic
            expedita ducimus totam aliquid. Ad.
          </p>
        </div>
        <div className="para_gp">
          <p className="para_num">7</p>
          <p className="para_data">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            quasi deleniti molestiae, veniam autem reiciendis fugiat tempora
            saepe voluptatem! Veritatis nulla consequatur optio corrupti hic
            expedita ducimus totam aliquid. Ad.
          </p>
        </div>
        <div className="input-container">
          <div className="form-gp check-gp agree_terms">
            <input type="checkbox" name="" id="agree_condition" />
            <label for="agree_condition" className="input_title">
              I have read and accepted the Terms & Conditions.
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsConditional;
