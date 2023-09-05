import React, { useState } from "react";
import "./loanInformation.scss";
import Accordion from "../../../components/Accordion";

const LoanInformation = () => {
  const [loanOpen, setLoanOpen] = useState(false);

  return (
    <section className="loan_information">
      <div className="title-gp">
        <h3>1. Loan Information</h3>
        <Accordion isOpen={loanOpen} setIsOpen={setLoanOpen} />
      </div>
      <div
        className={`hide_show_container ${
          loanOpen ? "hidden-box" : "open-box"
        }`}
      >
        <div className="input-container">
          <div className="form-gp-helf">
            <label for="request_loan_amt" className="input_title">
              Request Loan Amount
            </label>
            <input type="number" name="" id="request_loan_amt" />
          </div>
          <div className="form-gp-helf">
            <label for="payday_date" className="input_title">
              Payday Date
            </label>
            <input type="date" name="" id="payday_date" />
          </div>
        </div>
        <div className="input-container">
          <div className="form-gp">
            <label for="pickup_branch" className="input_title">
              Choose Loan Pick Up Branch
            </label>
            <select name="" id="pickup_branch">
              <option value="">Bank Branch 1</option>
              <option value="">Bank Branch 2</option>
              <option value="">Bank Branch 3</option>
              <option value="">Bank Branch 4</option>
              <option value="">Bank Branch 5</option>
            </select>
          </div>
        </div>
        <div className="input-container">
          <div className="form-gp">
            <label for="" className="input_title">
              Loan Tenor
            </label>
            <div className="radios loan_toner">
              <div className="radio-gp">
                <input type="radio" name="loan_toner" id="twoMonths" />
                <label for="twoMonths">2 Months</label>
              </div>
              <div className="radio-gp">
                <input type="radio" name="loan_toner" id="threeMonths" />
                <label for="threeMonths">3 Months</label>
              </div>
              <div className="radio-gp">
                <input type="radio" name="loan_toner" id="fourMonths" />
                <label for="fourMonths">4 Months</label>
              </div>
              <div className="radio-gp">
                <input type="radio" name="loan_toner" id="fiveMonths" />
                <label for="fiveMonths">5 Months</label>
              </div>
              <div className="radio-gp">
                <input type="radio" name="loan_toner" id="sixMonths" />
                <label for="sixMonths">6 Months</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanInformation;
