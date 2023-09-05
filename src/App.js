import { Fragment } from "react";
import "./styles/global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BetterSalaryLoan from "./pages/betterSalaryLoan/BetterSalaryLoan";
import BetterSalaryAdvance from "./pages/betterSalaryAdvance/BetterSalaryAdvance";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="salaryLoan" element={<BetterSalaryLoan />} />
            <Route path="salaryAdvance" element={<BetterSalaryAdvance />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
