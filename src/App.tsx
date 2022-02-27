import React from "react";
import "./App.css";
import { Header } from "./modules/header/header";
import imgUrl from "/src/assets/poster/ghost.png";
export default function App() {
  console.log(import.meta.env.VITE_KEY + 1);
  
  return (
    <div>
      <Header/>
    </div>
  );
}
