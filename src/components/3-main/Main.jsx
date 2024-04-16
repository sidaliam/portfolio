import { useState } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import { myProjects } from "../../myprojects.js";
const Main = () => {
  const [currentactive, setcurrentactive] = useState("all");
  const [arr, setarr] = useState(myProjects);
  return (
    <main className="flex">
      <section className="flex  left-section">
        <button
          className={currentactive === "all" ? "active" : null}
          onClick={() => {
            setcurrentactive("all");
            setarr(myProjects);
          }}
        >
          all projects
        </button>
        <button
          className={currentactive === "css html" ? "active" : null}
          onClick={() => {
            setcurrentactive("css html");
            const newarr = myProjects.filter((item) => {
              return item.category === "html/css";
            });
            setarr(newarr);
          }}
        >
          HTML/CSS/JS
        </button>
        <button
          className={currentactive === "React" ? "active" : null}
          onClick={() => {
            setcurrentactive("React");
            const newarr = myProjects.filter((item) => {
              return item.category === "react";
            });
            setarr(newarr);
          }}
        >
          React & MUI
        </button>
        <button
          className={currentactive === "MERN" ? "active" : null}
          onClick={() => {
            setcurrentactive("MERN");
            const newarr = myProjects.filter((item) => {
              return item.category === "mern";
            });
            setarr(newarr);
          }}
        >
          MERN
        </button>
      </section>

      <section className=" flex right-section">
        {arr.map((item) => {
          return (
            <article key={item.imgpath} className="  card">
              <img width={266} src={item.images[0]} alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projecttitle} </h1>
                <p className="sub-title">{item.description}</p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <a href={item.linkgit}>
                      <div className="icon-github"></div>
                    </a>
                  </div>
                  <Link to={`/more/${item.projecttitle}`}>
                    <a className="link flex" href="">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
