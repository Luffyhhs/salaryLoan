import React, { useState } from "react";
import "./guarantorInformation.scss";
import Accordion from "../../../components/Accordion";

const GuarantorInformation = () => {
  const [guaranOpen, setGuaranOpen] = useState(false);

  return (
    <section className="guarantor_information">
      <div className="title-gp">
        <h3>5. Guarantor s Information</h3>
        <Accordion isOpen={guaranOpen} setIsOpen={setGuaranOpen} />
      </div>
      <div
        className={`hide_show_container ${
          guaranOpen ? "hidden-box" : "open-box"
        }`}
      >
        <div className="input-container">
          <div className="form-gp-helf">
            <label for="guarantor_fullName" className="input_title">
              Full Name
            </label>
            <input type="text" name="" id="guarantor_fullName" />
          </div>
          <div className="form-gp-helf">
            <label for="guarantor_nrc_number" className="input_title">
              NRC Number
            </label>
            <div className="guarantor_nrc_data_gp">
              <select name="" id="state_number">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">15</option>
              </select>

              <select name="" id="city_name">
                <option value="">Bahan</option>
                <option value="">Ahlone</option>
                <option value="">Mingalardone</option>
              </select>

              <select name="" id="citizen_type">
                <option value="">M</option>
                <option value="">N</option>
                <option value="">C</option>
              </select>

              <input type="number" name="" id="nrc_number" />
            </div>
          </div>
        </div>

        <div className="input-container">
          <div className="form-gp-helf">
            <label for="guarantor_applicant" className="input_title">
              Relationship with Applicant
            </label>
            <input type="text" name="" id="guarantor_applicant" />
          </div>
          <div className="form-gp-helf">
            <label for="guarantor_phNumber" className="input_title">
              Mobile Phone Number
            </label>
            <input type="tel" name="" id="guarantor_phNumber" />
          </div>
        </div>

        <div className="input-container">
          <div className="form-gp">
            <label for="mab_acc_number" className="input_title">
              MAB Account Number (Optional)
            </label>
            <input type="text" name="" id="mab_acc_number" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuarantorInformation;
