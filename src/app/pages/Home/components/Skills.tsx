import React, { CSSProperties } from "react";
import { skills } from "../../../../@data/Skills.json";
import { Skill } from "../../../../@types/Skill";
// Custom Components
import Title from "../../../components/Title";
// ------------------------------------------------

const Skills = () => {
  return (
    <section>
      <Title center>My Skills</Title>
      <ul className="grid grid-cols-2 lg:grid-cols-5 mt-10 gap-10">
        {skills.map((skill: Skill) => {
          // Define the style object
          const style: CSSProperties = {
            "--value": skill.percent,
            "--size": "12rem",
            "--thickness": "30px",
          } as React.CSSProperties; // Use type assertion to allow custom properties

          return (
            <li key={skill.id}>
              <div
                className="radial-progress odd:text-primary even:text-secondary flex flex-col items-center justify-center gap-4"
                style={style}
                role="progressbar"
              >
                <h3 className="font-bold text-lg">{skill.title}</h3>
                <span className="font-bold text-xl">{skill.percent}%</span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
