import { useEffect, useState } from "react";

import { MovieCard } from "./components/MovieCard";

import { SideBar } from "./components/SideBar";
// import { Content } from './components/Content';

import { api } from "./services/api";

import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";
import { Content } from "./components/Content";
import { GenreProvider } from "./hooks/useGender";

export function App() {
  return (
    <GenreProvider>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <Content />
      </div>
    </GenreProvider>
  );
}
