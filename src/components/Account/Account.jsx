import { Routes, Route } from "react-router-dom";
import UserAccount from "./Account/UserAccount";
import RegisterSection from "./Register/RegisterSection";
import PageNotFound from "../_comp/PageNotFound";

function Account() {
  return (
    <Routes>
      <Route index path="/" element={<UserAccount />} />
      <Route path="sign-up" element={<RegisterSection />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Account;
