import { useEffect, useState } from "react";
import "./Hero.css";

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Good Morning";
  }

  if (hour < 17) {
    return "Good Afternoon";
  }

  return "Good Evening";
}

function Hero() {

  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {

    const timer = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000);

    return () => clearInterval(timer);

  }, []);

  return (
    <section className="hero-section" id="hero">

      <h1>
        {greeting}, I'm Chiraag R 👋
      </h1>

      <p className="tagline">
        I'm a passionate web developer from Bengaluru
      </p>

      <div className="hero-button">

        <a href="#projects" className="btn btn-primary">
          View My Projects
        </a>

        <a href="#contact" className="btn btn-secondary">
          Contact Me
        </a>

      </div>

    </section>
  );
}

export default Hero;