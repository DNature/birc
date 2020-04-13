import React, { useEffect, useRef, useState } from "react";
import CustomLink from "./customLink";
import { useRouter } from "next/dist/client/router";
import PropTypes from "prop-types";

const Navbar = ({ pathname, routes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 30;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`py-4 justify-center z-20 fixed top-0 left-0 w-full hidden sm:flex ${
          navBackground && "bg-white shadow"
        }`}
        style={{ borderBottom: !navBackground && "2px solid #d3d4d4" }}
      >
        <nav className="flex content-center ">
          <CustomLink href="/" className="my-auto">
            <img
              src="/logo.svg"
              alt="Logo"
              className={`${
                navBackground ? "w-16" : "w-24"
              } mr-10  transition-all duration-200`}
            />
          </CustomLink>
          {routes.map(({ path, name }) => (
            <CustomLink
              key={name}
              className="py-2 mr-6 text-gray-75 font-semibold block"
              href={path}
            >
              <>
                {name}

                {pathname?.split("/")[1] == path.split("/")[1] && (
                  <span className="block mt-3 w-5 h-1 mx-auto text-center bg-primary-100 rounded"></span>
                )}
              </>
            </CustomLink>
          ))}
        </nav>
      </div>
    </>
  );
};

Navbar.getInitialProps = async () => {
  const { pathname } = useRouter();

  return { pathname };
};

Navbar.propTypes = {
  pathname: PropTypes.string,
  routes: PropTypes.array.isRequired,
};
export default Navbar;
