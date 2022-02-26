import React from "react";
import "./App.css";
import imgUrl from "/src/assets/poster/ghost.png";
export default function App() {
  console.log(import.meta.env.VITE_KEY + 1);
  
  return (
    <>
    <div>{import.meta.env.PUBLIC_APP_TITLE}  {import.meta.env.VITE_KEY}</div>
    <img src={imgUrl} alt="nothing" />
    </>
  );
}
