import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Jobs from "./pages/Jobs.jsx";
import Bid from "./pages/Bid.jsx";
import PostJob from "./pages/PostJob.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/jobs" element={<Jobs />} />
        <Route exact path="/bid" element={<Bid />} />
        <Route exact path="/post-job" element={<PostJob />} />
      </Routes>
    </Router>
  );
}

export default App;