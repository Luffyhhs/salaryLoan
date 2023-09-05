import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/salaryLoan"}>Better Salary Loan</Link>
      <Link to={"/salaryAdvance"}>Better Salary Advance</Link>
    </div>
  );
};

export default Home;
