import React from 'react';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

export const PagesLinks = () => {
          
    function getLinkClass(obj) {
      let className="PageLink";
      if ( obj.isActive )
        className+=" ActivePageLink";
      return className;
    }

    return (
      <div>
        <NavLink to="/" end    className={getLinkClass}>Home</NavLink>
        <NavLink to="/about" className={getLinkClass}>About</NavLink>
        <NavLink to="/artists" className={getLinkClass}>Artists</NavLink>
        <NavLink to="/albums" className={getLinkClass}>Albums</NavLink>
        <NavLink to="/yourplaylist" className={getLinkClass}>Your Playlist</NavLink>
      </div>
    );

};