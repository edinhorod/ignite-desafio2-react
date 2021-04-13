import { useContext, useEffect, useState } from "react";
import { api } from "../services/api";

import "../styles/sidebar.scss";
import "../styles/button.scss";
import "../styles/global.scss";

import { Button } from "../components/Button";
import { GenreContext } from "../hooks/useGender";

export function SideBar() {
  const { genres, handleClickButton, genreId } = useContext(GenreContext);

  return (
    <>
      <nav className="sidebar">
        <span>
          Edinho<p>Flix</p>
        </span>

        <div className="buttons-container">
          {genres.map((genre) => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={genreId === genre.id}
            />
          ))}
        </div>
      </nav>
    </>
  );
}
