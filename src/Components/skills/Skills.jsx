import "./Skills.css";

const skills = [
  {
    name: "HTML",
    level: 90
  },
  {
    name: "CSS",
    level: 85
  },
  {
    name: "JavaScript",
    level: 80
  },
  {
    name: "React",
    level: 80
  },
  {
    name: "Python",
    level: 70
  },
  {
    name: "C",
    level: 65
  }
];

function Skills() {

  return (

    <section id="skills" className="skills-section">

      <h2>My Skills</h2>

      <div className="skills-grid">

        {skills.map((skill) => (

          <div
            className="skill-item"
            key={skill.name}
          >

            <span>
              {skill.name}
            </span>

            <div className="skill-bar">

              <div
                style={{
                  width: `${skill.level}%`
                }}
              />

            </div>

            <small>
              {skill.level}%
            </small>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;