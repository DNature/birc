import * as React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/dist/client/router";
import PropTypes from "prop-types";
import Footer from "../footer";

const Navbar = dynamic(() => import("../navbar"));

const routes = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Training",
    path: "/training",
  },
  {
    name: "Works",
    path: "/works",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const MainLayout = ({ pathname, children }) => {
  return (
    <div className="flex flex-col h-full" style={{ height: "100vh" }}>
      <Navbar pathname={pathname} routes={routes} />
      <div className="flex-1 z-10">{children}</div>

      <Footer pathname={pathname} routes={routes} />
    </div>
  );
};

MainLayout.getInitialProps = async () => {
  const { pathname } = useRouter();

  return { pathname };
};

MainLayout.propTypes = {
  pathname: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default MainLayout;
