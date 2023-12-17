import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ListPage from "./Components/ListPage";
import { UserContextProvider } from "./Components/usercontext";
import './App.css';


function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ListPages" element={<ListPage />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;