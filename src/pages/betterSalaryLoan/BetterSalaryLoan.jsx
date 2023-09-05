import React from "react";
import LoanInformation from "./components/LoanInformation";
import PersonalInformation from "./components/PersonalInformation";
import EmploymentInformation from "./components/EmploymentInformation";
import EmergencyContactPerson from "./components/EmergencyContactPerson";
import GuarantorInformation from "./components/GuarantorInformation";
import DdaInstruction from "./components/DdaInstruction";
import RequireDocs from "./components/RequireDocs";
import TermsConditional from "./components/TermsConditional";
import Esignature from "./components/Esignature";
import EsignatureGuarantor from "./components/EsignatureGuarantor";

const BetterSalaryLoan = () => {
  return (
    <form>
      <LoanInformation />
      <PersonalInformation />
      <EmploymentInformation />
      <EmergencyContactPerson />
      <GuarantorInformation />
      <DdaInstruction />
      <RequireDocs />
      <TermsConditional />
      <Esignature />
      <EsignatureGuarantor />
      <div class="btn-section">
        <input type="submit" name="Submit" id="" className="btn input_submit" />
      </div>
    </form>
  );
};

export default BetterSalaryLoan;
