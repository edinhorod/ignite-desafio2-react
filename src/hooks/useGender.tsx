// import {
//   createContext,
//   ReactNode,
//   useContext,
//   useEffect,
//   useState,
// } from "react";
// import { api } from "../services/api";

// interface GenreResponseProps {
//   id: number;
//   name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
//   title: string;
// }

// interface Genre{
//     id: number,
//     name: string,
//     title: string,
// }

// interface SidebarContextData {
//   genres: GenreResponseProps[];
//   // createTransaction: (transaction: TransactionInput) => Promise<void>;
// }

// const SidebarContext = createContext<SidebarContextData>(
//   {} as SidebarContextData
// );

// export function SidebarProvider({ children }: SidebarProviderProps) {
//   const [genres, setGenres] = useState<GenreResponseProps[]>([]);
//   useEffect(() => {
//     api.get<GenreResponseProps[]>("genres").then((response) => {
//       setGenres(response.data);
//     });
//   }, []);

//   return (
//       <SidebarContext.Provider value={{genres}}>
//         {children}
//       </SidebarContext.Provider>
//   );
// }

// export function useSidebar() {
//   const context = useContext(SidebarContext);
//   return context;
// }

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface GenreProviderProps {
  children: ReactNode;
}

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface GenreContextData{
    genres: GenreResponseProps[];
    genreId: number;
    handleClickButton: (id: number) => void;
}

export const GenreContext = createContext<GenreContextData>(
    {} as GenreContextData
);

export function GenreProvider({children}: GenreProviderProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  const [genreId, setGenreId] = useState(1);
  function handleClickButton(id: number) {
    setGenreId(id);
    console.log("selectedGenreId: ", genreId);
    return genreId;
  }

  return (
    <GenreContext.Provider value={{genres, handleClickButton, genreId}}>
        {children}
    </GenreContext.Provider>
  );
}

export function useGenre(){
    const context = useContext(GenreContext);
    return context;
}
