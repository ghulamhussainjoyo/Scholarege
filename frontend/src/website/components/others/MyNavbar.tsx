import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar as NavbarTail, Button } from "flowbite-react";

function Navbar({ name }: { name: string }) {
  return (
    <Fragment>
      <NavbarTail fluid={true} rounded={true}>
        <NavbarTail.Brand href="https://flowbite.com/">
          <span className="text-xl 2xl:text-2xl self-center whitespace-nowrap font-semibold dark:text-white">
            {name}
          </span>
        </NavbarTail.Brand>
        <div className="flex md:order-2 gap-2 2xl:gap-5">
          <Button
            size={"sm"}
            color={"none"}
            className={
              "bg-[#EB9E47] text-white hover:bg-white hover:text-black hover:border-2 focus:outline-black"
            }
          >
            Sign Up
          </Button>

          <NavbarTail.Toggle />
        </div>

        <NavbarTail.Collapse>
          <NavbarTail.Link
            className="2xl:text-xl xl:text-lg lg:text-base text-sm"
            href="/"
            // active={true}
            color={"none"}
          >
            Home
          </NavbarTail.Link>
          <NavbarTail.Link className="2xl:text-xl xl:text-lg lg:text-base text-sm">
            <Link to={"/scholarships"}>Scholarships</Link>
          </NavbarTail.Link>
          <NavbarTail.Link className="2xl:text-xl xl:text-lg lg:text-base text-sm">
            <Link to={"/team"}>Team</Link>
          </NavbarTail.Link>
          <NavbarTail.Link className="2xl:text-xl xl:text-lg lg:text-base text-sm">
            <Link to={"/about"}> About</Link>
          </NavbarTail.Link>
          <NavbarTail.Link className="2xl:text-xl xl:text-lg lg:text-base text-sm">
            <Link to={"/contact"}>Contact</Link>
          </NavbarTail.Link>
        </NavbarTail.Collapse>
      </NavbarTail>
    </Fragment>
  );
}

export default Navbar;
