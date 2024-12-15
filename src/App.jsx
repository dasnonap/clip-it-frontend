import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/_comp/footer";
import Header from "./components/_comp/header";
import Homepage from "./components/Homepage/Homepage";
import AccountLayout from "./components/Layouts/AccountLayout";
import AuthLayout from "./components/Layouts/AuthLayout";

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4 py-6 ">
        <Header />

        <Routes>
          <Route index path="/" element={<Homepage />} />

          <Route exact path="/settings/*" element={<AccountLayout />} />

          {/* Auth Routes */}
          <Route exact path="/auth/*" element={<AuthLayout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
