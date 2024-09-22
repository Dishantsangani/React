import logo from "./logo.svg";
import "./App.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
function App() {
  const form = useRef();
  const sendemail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_jxtgu11", "template_9l6cgf6", form.current, {
        publicKey: "xXm1Dy2ZY7QheJk4W",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <h1>This is A New Email sender </h1>
      <div className="container">
        <form ref={form} onSubmit={sendemail}>
          <div className="row">
            <input
              type="text"
              name="from_name"
              className="form-control"
              placeholder="First name"
            />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="from_email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />

            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              name="message"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
