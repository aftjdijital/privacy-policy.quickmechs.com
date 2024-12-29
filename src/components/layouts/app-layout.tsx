import { Outlet } from "react-router";

import Footer from "../footer";
import { useEffect } from "react";
// import Navbar from "../navbar";

const AppLayout = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));
        section.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
