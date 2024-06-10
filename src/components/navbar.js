const Navbar = () => {
  return (
    <div className="flex justify-between container items-center border-b-2 py-5">
      <p className="text-red-500 text-3xl font-semibold ">Googoo Blog</p>
      <div className="flex space-x-4">
        <p>Home</p>
        <p>New Blog</p>
      </div>
    </div>
  );
};

export default Navbar;
