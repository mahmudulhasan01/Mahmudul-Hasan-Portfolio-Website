import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
// import emailjs from "eamiljs.com";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kflmmag",
        "template_bcuihrp",
        form.current,
        "user_fMMXDBybzUN5ZeoGhMrnr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5> <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" /> <h4>Email</h4>
            <h5>web.mahmudulhasan@gmail.com</h5>
            <a href="mailto:web.mahmudulhasan@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <MdOutlineEmail /> <h4>Email</h4>
            <h5>web.mahmudulhasan@gmail.com</h5>
            <a href="mailto:web.mahmudulhasan@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <MdOutlineEmail /> <h4>Email</h4>
            <h5>web.mahmudulhasan@gmail.com</h5>
            <a href="mailto:web.mahmudulhasan@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <div className="from_container">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />{" "}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />{" "}
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>{" "}
            <button type="submit" className="btn btn-primary">
              Send Message{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
