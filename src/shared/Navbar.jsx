import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Portfolio",
      path: "/portfolio",
    },
    {
      title: "Clients",
      path: "/clients",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="navbar md:px-[15%] px-[30px] lg:py-8 py-5 mx-auto text-white fixed z-10 bg-[#BD1F17] flex justify-between items-center">
  {/* Logo on the left */}
  <div className="navbar-start flex items-center">
    <Link className="flex items-center space-x-2">
      <img src="../../public/images/logo.svg" alt="logo" className="w-9"/>
      <h3 className="poppins text-2xl font-semibold">Restau 
      <span className="font-normal">rant</span> </h3>
    </Link>   
  </div>

  {/* Navigation items in the center */}
  <div className="navbar-center hidden lg:flex flex-grow justify-center">
    <div className="menu menu-horizontal gap-10 raleway">
      {navItems.map((item) => (
        <Link
          className="hover:text-[#FEBF00] duration-200"
          href={item.path}
          key={item.path}
        >
          {item.title}
        </Link>
      ))}
    </div>
  </div>

  {/* Book a Table button on the right */}
  <div className="navbar-end flex items-center">
    <Link className="roboto text-sm font-bold text-black lg:px-6 py-2 rounded-none bg-[#FEBF00] uppercase hidden md:flex">
      book a table
    </Link>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <RxHamburgerMenu className="text-xl" />
      </div>
      <div
        tabIndex={0}
        className="menu menu-xs text-black dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-auto shadow"
      >
        {navItems.map((item) => (
          <Link
            className="hover:text-[#FEBF00] duration-200 px-2"
            href={item.path}
            key={item.path}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default Navbar;
