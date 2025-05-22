import React from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import TextProvider from "./services/TextContext";

function App() {
  return (
    <>
      <TextProvider>
        <h1>Sibling Communication Using React Context</h1>
        <ComponentA />
        <ComponentB />
      </TextProvider>
    </>
  );
}

export default App;
