// import pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// import components
import Nav from "./components/Nav";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <footer>
        <p>&copy; 2023 Princess Roni Egbu. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
