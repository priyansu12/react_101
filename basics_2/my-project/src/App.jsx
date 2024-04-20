import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {

  return (
    <>
      {/* <h1 className='text-3xl font-bold rounded-md p-4 bg-green text-white'>Tailwind Test</h1> */}
      <Card username="priyansu" btnText="Study more"/>
      <Card username="Lisa" btnText="Do more"/>
      
    </>
  );
}

export default App;
