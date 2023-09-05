import React, { useState } from "react";

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
      </div>
    </section>
  );
};

export default LoanInformation;
