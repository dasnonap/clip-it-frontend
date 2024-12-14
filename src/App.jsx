import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/_comp/footer";
import Header from "./components/_comp/header";
import Homepage from "./components/Homepage/Homepage";
import RegisterSection from "./components/Auth/Register/RegisterSection";
import LoginSection from "./components/Auth/Login/LoginSection";
import AccountLayout from "./components/Layouts/AccountLayout";

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4 py-6 ">
        <Header />

        <Routes>
          <Route index path="/" element={<Homepage />} />

          <Route exact path="/settings/*" element={<AccountLayout />} />

          {/* Auth Routes */}
          <Route path="/sign-up" element={<RegisterSection />} />
          <Route path="/sign-in" element={<LoginSection />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
