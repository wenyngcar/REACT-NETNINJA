import Home from "./Home";
import Navbar from "./components/navbar";
import Create from "./Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const pages = [
    { path: "/", element: <Home /> },
    { path: "/create", element: <Create /> },
  ];

  return (
    <Router>
      <div className="container mx-auto px-20 ">
        <Navbar />
        <Routes>
          {pages.map((page, index) => (
            <Route key={index} path={page.path} element={page.element}></Route>
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
