import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Jobs from "./pages/Jobs.jsx";
import Bid from "./pages/Bid.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/jobs" element={<Jobs />} />
        <Route exact path="/bid" element={<Bid />} />
      </Routes>
    </Router>
  );
}

export default App;