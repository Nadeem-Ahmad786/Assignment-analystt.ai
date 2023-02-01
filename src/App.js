import React from "react";
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Home from "./components/Home"
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
    <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </main>
</BrowserRouter>
  );
}

export default App;
