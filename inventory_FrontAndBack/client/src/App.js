import "./App.css";
import MainPage from "./components/MainPage";
import InventoryCategory from "./components/InventoryCategory";
import InventoryItem from "./components/InventoryItem";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import ViewCategory from "./components/ViewCategory";
import MainCam from "./components/mainCam";
import { useState } from "react";

function App() {
  const [abc, setAbc] = useState("aaa");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route
            path="/InventoryCategory"
            element={<InventoryCategory />}
          ></Route>
          <Route path="/InventoryItem" element={<InventoryItem />} test="aaa">
            {abc}
          </Route>
          <Route path="/ViewCategory" element={<ViewCategory />}></Route>

          <Route path="/mainCam" element={<MainCam />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
