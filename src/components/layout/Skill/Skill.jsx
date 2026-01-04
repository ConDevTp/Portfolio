import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import Content from "../Content/Content";
import "./index.css";

const Skill = () => {
  const skills = [
    { name: "HTML5", level: "حرفه‌ای", progress: 95 },
    { name: "CSS3", level: "حرفه‌ای", progress: 95 },
    { name: "JavaScript (ES6+)", level: "حرفه‌ای", progress: 90 },
    { name: "TypeScript", level: "حرفه‌ای", progress: 90 },
    { name: "React.js", level: "حرفه‌ای", progress: 95 },
    { name: "Next.js", level: "پیشرفته", progress: 85 },
    { name: "Redux / RTK", level: "حرفه‌ای", progress: 90 },
    { name: "Tailwind CSS", level: "حرفه‌ای", progress: 90 },
    { name: "Framer Motion", level: "حرفه‌ای", progress: 85 },
    { name: "Material-UI (MUI)", level: "حرفه‌ای", progress: 90 },
    { name: "Bootstrap", level: "حرفه‌ای", progress: 90 },
    { name: "Sass / SCSS", level: "پیشرفته", progress: 80 },
    { name: "Node.js", level: "متوسط", progress: 65 },
    { name: "RESTful APIs", level: "حرفه‌ای", progress: 90 },
    { name: "Git & GitHub", level: "حرفه‌ای", progress: 90 },
    { name: "PWA", level: "حرفه‌ای", progress: 85 },
    { name: "Testing (Jest, RTL)", level: "حرفه‌ای", progress: 85 },
    { name: "Technical SEO", level: "پیشرفته", progress: 80 },
    { name: "Figma", level: "حرفه‌ای", progress: 90 },
    { name: "Adobe XD", level: "حرفه‌ای", progress: 85 },
    { name: "C# (.NET Basics)", level: "متوسط", progress: 60 },
  ];

  return (
    <div className="skill-bg">
      <Content>
        <div className="skill-container" id="skills">
          <SectionTitle title="تـخصص ها" />

          <div className="skill-content mt-5">
            {skills.map((skill, index) => (
              <div className="progress-item" key={index}>
                <div className="d-flex justify-content-between align-items-center flex-row-reverse">
                  <h6>{skill.name}</h6>
                  <p>{skill.level}</p>
                </div>

                <div className="progress mt-3">
                  <div
                    className={`progress-bar bg-warning`}
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Skill;
