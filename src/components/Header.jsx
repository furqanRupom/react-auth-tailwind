import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className="navbar justify-between bg-neutral text-neutral-content rounded">
        <a className="btn btn-ghost normal-case text-xl">fireBaseTailwind</a>
        <div>
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            Home
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/login">
            Login
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
