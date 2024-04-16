import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/Animation - 1712667630888.json"
import Contactanimation from "../../animation/Animation - 1712668913726.json"
const Contact = () => {
  const [state, handleSubmit] = useForm("mnqeovpr");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className="flex" style={{justifyContent:"space-between"}}>
        <form className="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          {state.succeeded && (
            <p className="success" style={{ fontSize: "15px", marginTop: "1.7rem"  }}>
              <Lottie style={{height:38}} animationData={doneAnimation} /> your message has been sent successfully
            </p>
          )}

          <button className="submit" type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
        <div ><Lottie style={{height:220}} animationData={Contactanimation} /></div>
      </div>
    </section>
  );
};

export default Contact;
