import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/_comp/footer";
import Header from "./components/_comp/header";
import Homepage from "./components/Homepage/Homepage";
import Account from "./components/Account/Account";

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4 py-6 ">
        <Header />

        <Routes>
          <Route index path="/" element={<Homepage />} />

          <Route exact path="/account/*" element={<Account />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
