import "./hero.css";
import Lottie from "lottie-react";
import webdev from "../../animation/Animation - 1712669223779.json"
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <img src="./me.jpg" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">
          Amoura Sidali <br />Full stack developer
        </h1>
        <p className="sub-title">
          Hello,I’m Amoura Sidali, a Full Stack developer based in Algiers.
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div ><Lottie style={{height:220}} animationData={webdev} /></div>
    </section>
  );
};

export default Hero;
