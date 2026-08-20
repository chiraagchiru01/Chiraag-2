import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">

      <h2>About Me</h2>

      <div className="about-content">

        <figure className="profile-figure">

          <img
            src="public/images/chiraag-photo.jpeg"
            alt="Chiraag R"
          />

          <figcaption>
            Chiraag R - Web Developer
          </figcaption>

        </figure>

        <div className="about-text">

          <p>
            I love building things on the web.
            Currently learning HTML, CSS, JavaScript and React.
          </p>

          <p>
            I enjoy creating responsive and user-friendly
            websites using modern web technologies.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;