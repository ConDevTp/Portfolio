import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import Content from "../Content/Content";
import "./index.css";

const Skill = () => {
  const skills = [
    { name: "Html 5", level: "حرفه ای", progress: 95 },
    { name: "Css3", level: "حرفه ای", progress: 95 },
    { name: "Sass", level: "متوسط", progress: 65 },
    { name: "JavaScript (ES6+)", level: "پیشرفته", progress: 80 },
    { name: "React.js", level: "حرفه ای", progress: 95 },
    { name: "Next.js", level: "متوسط", progress: 65 },
    { name: "Redux", level: "پیشرفته", progress: 80 },
    { name: "Bootstrap", level: "حرفه ای", progress: 95 },
    { name: "MUI", level: "پیشرفته", progress: 80 },
    { name: "Node Js", level: "متوسط", progress: 65 },
    { name: "Type Script", level: "پیشرفته", progress: 80 },
    { name: "Git/Github", level: "پیشرفته", progress: 80 },
    { name: "PWA", level: "پیشرفته", progress: 80 },
    { name: "SEO", level: "متوسط", progress: 65 },
    { name: "REST API", level: "پیشرفته", progress: 80 },
    { name: "Figma", level: "پیشرفته", progress: 80 },
    { name: "Adobe Xd", level: "پیشرفته", progress: 80 },
    { name: "#C", level: "متوسط", progress: 65 },
  ];

  return (
    <div className="skill-bg">
      <Content>
        <div className="skill-container">
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
