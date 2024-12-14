import { Routes, Route } from "react-router-dom";
import UserAccount from "../Account/Account/UserAccount";

function AccountLayout() {
  return (
    <Routes>
      <Route index path="/" element={<UserAccount />} />
      {/* All account pages */}
    </Routes>
  );
}

export default AccountLayout;
