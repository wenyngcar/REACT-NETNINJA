import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between container items-center border-b-2 py-5">
      <Link to="/">
        <p className="text-red-500 text-3xl font-semibold ">Googoo Blog</p>
      </Link>
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-red-500">
          Home
        </Link>
        <Link to="/create" className="hover:text-red-500">
          New Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
