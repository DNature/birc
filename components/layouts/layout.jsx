import * as React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/dist/client/router";
import PropTypes from "prop-types";
import Footer from "../footer";
import { FiFeather, FiBookOpen, FiMonitor, FiMail } from "react-icons/fi";

const Navbar = dynamic(() => import("../navbar"));

const routes = [
  {
    name: "About",
    path: "/about",
    icon: <FiBookOpen className="mr-2 inline-block text-xl text-white" />,
  },
  {
    name: "Training",
    path: "/training",
    icon: <FiFeather className="mr-2 inline-block text-xl text-white" />,
  },
  {
    name: "Works",
    path: "/works",
    icon: <FiMonitor className="mr-2 inline-block text-xl text-white" />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <FiMail className="mr-2 inline-block text-xl text-white" />,
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
