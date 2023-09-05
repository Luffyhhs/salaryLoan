import React, { useState } from "react";
import "./employmentInformation.scss";
import Accordion from "../../../components/Accordion";

const EmploymentInformation = () => {
  const [employOpen, setEmployOpen] = useState(false);

  return (
    <section className="employment_information">
      <div className="title-gp">
        <h3>3. Employment Information</h3>
        <Accordion isOpen={employOpen} setIsOpen={setEmployOpen} />
      </div>
      <div
        className={`hide_show_container ${
          employOpen ? "hidden-box" : "open-box"
        }`}
      >
        <div className="input-container">
          <div className="form-gp-helf">
            <label for="company_name" className="input_title">
              Company Name
            </label>
            <input type="text" name="" id="company_name" />
          </div>
          <div className="form-gp-helf">
            <label for="business_type" className="input_title">
              Type of Business
            </label>
            <select name="" id="business_type">
              <option value="">Business Type 1</option>
              <option value="">Business Type 2</option>
              <option value="">Business Type 3</option>
              <option value="">Business Type 4</option>
              <option value="">Business Type 5</option>
            </select>
          </div>
        </div>

        <div className="input-container">
          <div className="form-gp-helf">
            <label for="position" className="input_title">
              Position
            </label>
            <input type="text" name="" id="position" />
          </div>

          <div className="form-gp-helf">
            <label for="dep_name" className="input_title">
              Department Name
            </label>
            <input type="text" name="" id="dep_name" />
          </div>
        </div>

        <div className="input-container">
          <div className="form-gp-helf">
            <label for="" className="input_title">
              Type of Employment
            </label>
            <div className="radios">
              <div className="radio-gp gender">
                <input type="radio" name="" id="permanent" />
                <label for="permanent">Permanent</label>
              </div>
              <div className="radio-gp gender">
                <input type="radio" name="" id="contract" />
                <label for="contract">Contract</label>
              </div>
            </div>
          </div>
          <div className="form-gp-helf">
            <label for="service_year" className="input_title">
              Length of Service
            </label>
            <div className="input-mini-container">
              <div className="input-gp-mini">
                <label for="other_graduate" className="mini_input_title">
                  Year
                </label>
                <input type="text" name="" id="other_graduate" />
              </div>
              <div className="input-gp-mini">
                <label for="other_graduate" className="mini_input_title">
                  Month
                </label>
                <input type="text" name="" id="other_graduate" />
              </div>
            </div>
          </div>
        </div>
        <div className="input-container">
          <div className="form-gp-helf">
            <label for="current_salary" className="input_title">
              Current Salary
            </label>
            <input type="text" name="" id="current_salary" />
          </div>
          <div className="form-gp-helf">
            <label for="hr_phNumber" className="input_title">
              HR Phone Number
            </label>
            <input type="tel" name="" id="hr_phNumber" />
          </div>
        </div>
        <div className="input-container">
          <div className="form-gp">
            <label for="mab_salary_acc" className="input_title">
              MAB Salary Account Number
            </label>
            <input type="text" name="" id="mab_salary_acc" />
          </div>
        </div>
        <div className="input-container">
          <div className="form-gp">
            <label for="office_add" className="input_title">
              Office Address
            </label>
            <input type="text" name="" id="office_add" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmploymentInformation;
