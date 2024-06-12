import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between container items-center border-b-2 py-5">
      <Link to="/">
        <p className="text-red-500 text-3xl font-semibold ">Googoo Blog</p>
      </Link>
      <div className="flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
