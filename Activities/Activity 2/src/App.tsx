import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { About, Home, Navigation, Products } from "./components";

function App() {
  let route;
  console.log("WIND", window.location.pathname);
  switch (window.location.pathname) {
    case "/Home":
      route = <Home />;
      break;
    case "/About":
      route = <About />;
      break;
    case "/Products":
      route = <Products />;
      break;
    default:
      route = <Home />;
  }
  return (
    <div className="App">
      <Navigation />
      {route}
    </div>
  );
}

export default App;
