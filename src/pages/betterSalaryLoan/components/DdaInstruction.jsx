import React, { useState } from "react";
import "./ddaInstruction.scss";
import Accordion from "../../../components/Accordion";

const DdaInstruction = () => {
  const [ddaOpen, setDdaOpen] = useState(false);
  return (
    <section className="dda_instruction">
      <div className="title-gp">
        <h3>6. DDA Instruction</h3>
        <Accordion isOpen={ddaOpen} setIsOpen={setDdaOpen} />
      </div>
      <div
        className={`hide_show_container ${ddaOpen ? "hidden-box" : "open-box"}`}
      >
        <p className="para">
          The repayment amount will be deducted on below account when due date
          was placed.
        </p>
        <div className="input-container">
          <div className="form-gp">
            <label for="mab_sallary_acc_number" className="input_title">
              MAB Salary Account Number
            </label>
            <input type="text" name="" id="mab_sallary_acc_number" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DdaInstruction;
