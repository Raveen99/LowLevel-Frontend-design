import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Body from "./components/Body";
import About from "./components/About";
import Login from "./components/Login";
import { Languages } from "./utils/constants";
import ProtectedRoute from "./components/ProtectedRoute";
import Accordian from "./components/Accordian";
import Comments from "./components/NestedComments/Comments";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Pagination from "./components/Pagination/Pagination";
import FrontEndPagination from "./components/Pagination/FrontEndPagination";
import Autocomplete from "./components/AutoComplete/Autocomplete";
import Livechat from "./components/LiveChat/Livechat";

function App() {
  const [selectedLang, setSelectedLang] = useState("en");

  return (
    <div>
      <header className="bg-black text-white items-center p-4 h-16 flex justify-between fixed w-full">
        <div className=" ml-8 text-xl">
          <a href="/"> Hello </a>{" "}
        </div>
        <div className="mr-8">
          <a href="/about">About</a>
          <a className="ml-6" href="/login">
            Login
          </a>
          <a className="ml-6" href="/accordian">
            Accordian
          </a>
          <a className="ml-6" href="/comments">
            Comments
          </a>
          <a className="ml-6" href="/slider">
            Slider
          </a>
          <a className="ml-6" href="/pagination">
            Pagination
          </a>
          <a className="ml-6" href="/frontendPaginate">
            Front Paginate
          </a>
          <a className="ml-6" href="/autocomplete">
            Auto Complete
          </a>

          <a className="ml-6" href="/livechat">
            Live Chat
          </a>

          <select
            className="ml-6 text-black h-6 w-24"
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

      <div className="pt-16">
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
            <Route path="/accordian" element={<Accordian />}></Route>
            <Route path="/comments" element={<Comments />}></Route>
            <Route path="slider" element={<ImageSlider />}></Route>
            <Route path="/pagination" element={<Pagination />}></Route>
            <Route
              path="/frontendPaginate"
              element={<FrontEndPagination />}
            ></Route>
            <Route path="/autocomplete" element={<Autocomplete />}></Route>
            <Route path="/livechat" element={<Livechat />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
