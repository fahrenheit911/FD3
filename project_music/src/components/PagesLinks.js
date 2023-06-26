import React from "react";
import { ee } from "./events";
import { NavLink } from "react-router-dom";

import "./PagesLinks.scss";

export const PagesLinks = () => {
  const getLinkClass = (obj) => {
    let className = "PageLink";
    if (obj.isActive) className += " ActivePageLink";
    return className;
  };

  return (
    <aside>
      <ul>
        <input
          type="text"
          style={{height:"30px", fontSize:16}}
          onChange={(eo) => {
            ee.emit("eefilterArtists", eo.target.value);
          }}
        />
        {/* <li>
          <NavLink to="/"  className={getLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={getLinkClass}>
            About
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/" className={getLinkClass}>
            Artists
          </NavLink>
        </li>
        <li>
          <NavLink to="/playlist" className={getLinkClass}>
            Your Playlist
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
