import Home from "./Home";
import Navbar from "./components/navbar";
import Create from "./Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";

function App() {
  const pages = [
    { path: "/", element: <Home /> },
    { path: "/create", element: <Create /> },
    { path: "/blogs/:id", element: <BlogDetails /> },
  ];

  return (
    <Router>
      <div className="container mx-auto px-20 ">
        <Navbar />
        {/* Routes makes sure that only one page shown on the browser. */}
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
