import React from "react";
import Nav from "./pages/Nav";
import Landing from "./pages/Landing";
import Trending from "./pages/Trending";
import Explore from "./pages/Explore";

export default function App() {
  return(
    <div>
      <Nav/>
      <Landing/>
      <Trending/>
      <Explore/>
    </div>
  )
}