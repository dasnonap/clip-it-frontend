import { Routes, Route } from "react-router-dom";
import Register from "../Auth/Register/Register";
import LoginSection from "../Auth/Login/LoginSection";

function AuthLayout() {
  return (
    <div className="flex justify-center py-12">
      <Routes>
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<LoginSection />} />
      </Routes>
    </div>
  );
}

export default AuthLayout;
