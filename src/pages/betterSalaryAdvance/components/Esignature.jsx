import React from "react";

const Esignature = () => {
  return (
    <section className="e_signature">
      <div className="title-gp">
        <h3>9. E Signature of Applicant</h3>
      </div>
      <div className="input-container esignature">
        <div className="form-gp-helf">
          <div className="signature-container">
            <canvas id="signature-pad"></canvas>
            <br />
            <button id="clear-button">Clear</button>
            <button id="save-button">Save</button>
          </div>
          <label for="person_e_signature" className="input_title">
            E Signature of Applicant
          </label>
        </div>
        <div className="form-gp-helf e_signature_upload_gp">
          <input type="file" name="" id="person_e_signature_img" />
          <label for="person_e_signature_img" className="input_title">
            E Signature Upload File
          </label>
        </div>
      </div>
    </section>
  );
};

export default Esignature;
