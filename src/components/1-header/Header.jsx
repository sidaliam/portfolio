import { useState } from "react";
import "./header.css";
import { useEffect } from "react";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [themes, sethemes] = useState(localStorage.getItem("currentMode")?? "dark");

  useEffect(() => {
    if (themes === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");  
    }
    else{

      document.body.classList.remove("light");
      document.body.classList.add("dark"); 

    }
    document.body.classList.add(themes);
  }, [themes]);
  return (
    <header className="  flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      >
        {" "}
      </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>

          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        className="mode flex"
        onClick={() => {
          localStorage.setItem("currentMode",themes ==="dark" ? "light" :"dark");
          sethemes(localStorage.getItem("currentMode"))
        }}
      >
        <span className={themes==="dark" ? "icon-sun":"icon-moon-o"}> </span>
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
