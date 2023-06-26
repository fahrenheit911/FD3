import React from "react";
import { NavLink } from "react-router-dom";
import "./Artist.scss";

export const Artist = ({ id, nam, genre, image }) => (
  <div className="Artist">
    <NavLink to={"/artist/" + id}>
      <figure>
        <img src={image} alt={nam} />
        <figcaption>
          {nam}&#183;{genre}
        </figcaption>
      </figure>
    </NavLink>
  </div>
);
