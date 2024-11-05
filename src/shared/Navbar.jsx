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
    <div className="lg:py-8 py-5 px-[30px] md:px-[15%] text-white">
      <div className="navbar ">
        <div className="lg:mr-16">
          <Link className="flex justify-start items-center space-x-2">
            <img src="../../public/images/logo.svg" alt="logo" className="w-9"/>
            <h3 className="poppins lg:text-xl font-semibold">Restau 
            <span className="font-normal">rant</span> </h3>
          </Link>   
        </div>
        <div className="navbar-center hidden lg:flex ">
          <div className="menu menu-horizontal px-1 gap-10 raleway">
          {navItems.map((item) => (
                <Link
                  className=" hover:text-[#FEBF00] duration-200"
                  href={item.path}
                  key={item.path}
                >
                  {item.title}
                </Link>
              ))}
          </div>
        </div>
        <div className="navbar-end ">
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
    </div>
  );
};

export default Navbar;
