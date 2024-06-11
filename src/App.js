import Home from "./components/Home";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container mx-auto px-20 ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
