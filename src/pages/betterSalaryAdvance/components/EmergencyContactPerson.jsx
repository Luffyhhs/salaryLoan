import React, { useState } from "react";

import Accordion from "../../../components/Accordion";

const EmergencyContactPerson = () => {
  const [emegOpen, setEmegOpen] = useState(false);
  return (
    <section className="emergency_content_person">
      <div className="title-gp">
        <h3>4. Emergency Contact Person</h3>
        <Accordion isOpen={emegOpen} setIsOpen={setEmegOpen} />
      </div>
      <div
        className={`hide_show_container ${
          emegOpen ? "hidden-box" : "open-box"
        }`}
      >
        <div className="input-container">
          <div className="form-gp">
            <label for="emergency_content_person_name" className="input_title">
              Emergency Contact Person
            </label>
            <input type="text" name="" id="emergency_content_person_name" />
          </div>
        </div>
        <div className="input-container">
          <div className="form-gp-helf">
            <label for="applicant_realtionship" className="input_title">
              Relationship with Applicant
            </label>
            <input type="text" name="" id="applicant_realtionship" />
          </div>
          <div className="form-gp-helf">
            <label for="applicant_moblie_ph" className="input_title">
              Mobile Phone Number
            </label>
            <input type="text" name="" id="applicant_moblie_ph" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyContactPerson;
