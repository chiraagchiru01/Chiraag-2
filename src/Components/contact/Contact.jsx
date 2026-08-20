import { useState } from "react";
import "./Contact.css";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const [status, setStatus] = useState("idle");

  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  }

  async function handleSubmit(e) {

    e.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (form.message.trim().length < 10) {
      newErrors.message =
        "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setStatus("sending");

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    setStatus("sent");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    setTimeout(() => {
      setStatus("idle");
    }, 3000);
  }

  return (

    <section
      id="contact"
      className="contact-section"
    >

      <h2>Contact Me</h2>

      <p className="contact-intro">
        Have a project in mind?
      </p>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">

          <label htmlFor="name">
            Your Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />

          {errors.name && (
            <span className="error-msg">
              {errors.name}
            </span>
          )}

        </div>

        <div className="form-group">

          <label htmlFor="email">
            Your Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />

          {errors.email && (
            <span className="error-msg">
              {errors.email}
            </span>
          )}

        </div>

        <div className="form-group">

          <label htmlFor="subject">
            Subject
          </label>

          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          >

            <option value="">
              Select a topic
            </option>

            <option value="hire">
              I want to hire you
            </option>

            <option value="collab">
              I want to collaborate
            </option>

            <option value="others">
              Others
            </option>

          </select>

        </div>

        <div className="form-group">

          <label htmlFor="message">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={handleChange}
          />

          {errors.message && (
            <span className="error-msg">
              {errors.message}
            </span>
          )}

        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={status === "sending"}
        >

          {status === "sending"
            ? "Sending..."
            : status === "sent"
            ? "✅ Message Sent"
            : "Send Message 🚀"}

        </button>

      </form>

    </section>
  );
}

export default Contact;