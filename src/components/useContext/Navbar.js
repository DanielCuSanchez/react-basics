import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "./UserContext";

export const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        React router dom
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink exact activeClassName={"active"} className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink
            exact
            activeClassName={"active"}
            className="nav-link"
            to="/about"
          >
            About
          </NavLink>
          {!user && (
            <NavLink
              exact
              activeClassName={"active"}
              className="nav-link"
              to="/login"
            >
              Login
            </NavLink>
          )}
        </div>
        <div className="ml-auto">
          <div className="text-light">
            <small style={{ fontSize: "20px", marginRight: "5px" }}>
              {user && user.username}
            </small>

            {user && (
              <button className="btn btn-danger" onClick={() => setUser(null)}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
