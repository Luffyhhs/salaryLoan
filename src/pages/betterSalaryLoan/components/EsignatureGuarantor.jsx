import React from "react";
import "./eSignatureGuarantor.scss";

const EsignatureGuarantor = () => {
  return (
    <section className="e_signature_guarator">
      <div className="title-gp">
        <h3>10. E Signature of Guarator</h3>
      </div>
      <div className="input-container esignature_guarator">
        <div className="form-gp-helf">
          <div className="signature-container">
            <canvas id="signature-pad"></canvas>
            <br />
            <button id="clear-button">Clear</button>
            <button id="save-button">Save</button>
          </div>
          <label for="person_e_signature" className="input_title">
            E Signature of Guarator
          </label>
        </div>
        <div className="form-gp-helf e_signature_guarator_upload_gp">
          <input type="file" name="" id="person_e_signature_img" />
          <label for="person_e_signature_img" className="input_title">
            E Signature of Guarator Upload File
          </label>
        </div>
      </div>
    </section>
  );
};

export default EsignatureGuarantor;
