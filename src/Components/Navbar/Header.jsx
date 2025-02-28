import React, { useState, useEffect } from "react";
import { Button, Navbar } from "flowbite-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      fluid
      rounded
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        "bg-white shadow-lg"
      `}
    >
      <Navbar.Brand href="/">
        <span className="flex items-center gap-2 text-2xl font-bold self-center whitespace-nowrap text-black">
          Logo
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <Button
          className={`border rounded-lg mr-5 bg-transparent text-white bg-teal-600`}
          pill
        >
          Login
        </Button>

        <Button className="border rounded-lg bg-teal-600 text-white" pill>
          Get started
        </Button>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
          <Navbar.Link href="/" className="text-lg text-black" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/auth" className="text-lg text-black">
            For Employers
          </Navbar.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
