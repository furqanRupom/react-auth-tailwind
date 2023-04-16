import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProviders";

const Header = () => {
  const { user ,logOut} = useContext(AuthContext);
  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(error => console.log(error))
  }
  return (
    <div className="">
      <div className="navbar  bg-blue-500 text-neutral-content rounded">
        <a className="btn btn-ghost normal-case text-xl">fireBaseTailwind</a>
        <div>
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            Home
          </Link>
          {user &&  <Link className="btn btn-ghost normal-case text-xl" to="/profile">
            Profile
          </Link>}

          <Link className="btn btn-ghost normal-case text-xl" to="/orders">
            orders
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/login">
            Login
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/register">
            Register
          </Link>

          {user ? (
            <>
              <Link
                className="btn btn-ghost normal-case text-xl"
                to="/register"
              >
                {user.email}
              </Link>

            <button onClick={handleLogOut} className="btn btn-primary">Sign Out</button>


            </>
          ) : (
              <Link className="btn btn-primary" to="/login">sign in </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
