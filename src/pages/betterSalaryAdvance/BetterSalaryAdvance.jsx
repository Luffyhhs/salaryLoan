import React from "react";
import LoanInformation from "./components/LoanInformation";
import PersonalInformation from "./components/PersonalInformation";
import EmploymentInformation from "./components/EmploymentInformation";
import EmergencyContactPerson from "./components/EmergencyContactPerson";
import DdaInstruction from "./components/DdaInstruction";
import RequireDocs from "./components/RequireDocs";
import TermsConditional from "./components/TermsConditional";
import Esignature from "./components/Esignature";

const BetterSalaryAdvance = () => {
  return (
    <form>
      <LoanInformation />
      <PersonalInformation />
      <EmploymentInformation />
      <EmergencyContactPerson />
      <DdaInstruction />
      <RequireDocs />
      <TermsConditional />
      <Esignature />
      <div class="btn-section">
        <input type="submit" name="Submit" id="" class="btn input_submit" />
      </div>
    </form>
  );
};

export default BetterSalaryAdvance;
