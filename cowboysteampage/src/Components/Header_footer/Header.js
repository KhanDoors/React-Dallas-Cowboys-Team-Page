import React, { Component } from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { CowboyLogo } from "../ui/icons";

class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "darkblue",
          boxShadow: "none",
          padding: "10px 0",
          borderBottom: "2px solid #00285e"
        }}
      >
        <Toolbar style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <div className="header_logo">
              <CowboyLogo link={true} linkTo="/" height="70px" width="70px" />
            </div>
          </div>
          <div>
            <div className="container">
              <h1>Dallas Cowboys</h1>
            </div>
          </div>
          <Link to="/the_team">
            <Button color="inherit">The Team</Button>
          </Link>

          <Link to="/the_matches">
            <Button color="inherit">Games</Button>
          </Link>
        </Toolbar>{" "}
      </AppBar>
    );
  }
}

export default Header;
