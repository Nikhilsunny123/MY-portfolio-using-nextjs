import Image from "next/image";
import { skillsdata } from "./projectData";
import reactjs from "../images/skills/react.svg";

function Skills() {
  skillsdata.map((item) => console.log(item));
  return (
    <>
      <h1 className=" text-4xl text-center m-5">I’m Familier with</h1>
      <div className=" container flex justify-center gap-5 mx-40 ">
        <div className="flex grid-cols-4 gap-4">
          {skillsdata.map((skill, key) => (
            <div className="bg-sky-700 w-40 p-3" key={key}>
              {/* <Image alt="react" src={skill.image} height={50} width={50} /> */}
              <p className="p-3 text-2xl">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
