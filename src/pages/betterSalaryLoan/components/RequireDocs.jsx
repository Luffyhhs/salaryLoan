import React, { useState } from "react";
import "./requireDocs.scss";
import Accordion from "../../../components/Accordion";

const RequireDocs = () => {
  const [docOpen, setDocOpen] = useState(false);

  return (
    <section className="require_docs">
      <div className="title-gp">
        <h3>7. Applicant's Required Documents</h3>
        <Accordion isOpen={docOpen} setIsOpen={setDocOpen} />
      </div>
      <div
        className={`hide_show_container ${docOpen ? "hidden-box" : "open-box"}`}
      >
        <div className="input-container">
          <div className="form-gp-helf">
            <label for="nrc_img_front" className="input_title">
              Upload NRC (Front)
            </label>
            <input type="file" name="" id="nrc_img_front" />
          </div>
          <div className="form-gp-helf">
            <label for="nrc_img_back" className="input_title">
              Upload NRC (Back)
            </label>
            <input type="file" name="" id="nrc_img_back" />
          </div>
        </div>
        <div className="input-container">
          <div className="form-gp-helf">
            <label for="household_registration" className="input_title">
              Upload Household Registration
            </label>
            <input type="file" name="" id="household_registration" />
          </div>
          <div className="form-gp-helf">
            <label for="recommand_letter" className="input_title">
              Employer's Recommendation Letter
            </label>
            <input type="file" name="" id="recommand_letter" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequireDocs;
