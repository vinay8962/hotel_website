import Logo from "../assets/logo-dark.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 md:px-30 md:py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo" className="h-10" />
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex space-x-10 text-gray-700 font-normal uppercase text-sm font-secondPrimary">
            <li className="hover:text-primary cursor-pointer">Home</li>
            <li className="hover:text-primary cursor-pointer">About</li>
            <li className="hover:text-primary cursor-pointer">Rooms</li>
            <li className="hover:text-primary cursor-pointer">Restaurant</li>
            <li className="hover:text-primary cursor-pointer">Spa</li>
            <li className="hover:text-primary cursor-pointer">Page</li>
            <li className="hover:text-primary cursor-pointer">News</li>
            <li className="hover:text-primary cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
