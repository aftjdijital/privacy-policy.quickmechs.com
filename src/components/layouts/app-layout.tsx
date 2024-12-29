import { Outlet } from "react-router";

import Footer from "../footer";

const AppLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
