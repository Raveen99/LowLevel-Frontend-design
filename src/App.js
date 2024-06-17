import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Body from "./components/Body";
import About from "./components/About";
import Login from "./components/Login";
import { Languages } from "./utils/constants";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [selectedLang, setSelectedLang] = useState("en");

  return (
    <div>
      <header className="bg-black text-white items-center p-4 h-16 flex">
        <div className="w-3/4 ml-8 text-xl">
          <a href="/"> Hello </a>{" "}
        </div>
        <div>
          <a href="/about">About</a>
          <a className="ml-4" href="/login">
            Login
          </a>

          <select
            className="ml-4 text-black h-6 w-24"
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
          >
            {Languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route
              path="/about"
              element={<About lang={selectedLang} />}
            ></Route>
          </Route>

          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
