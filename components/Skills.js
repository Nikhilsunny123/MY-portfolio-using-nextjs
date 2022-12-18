import Image from "next/image";
import { skillsdata } from "./projectData";

function Skills() {
 console.log(...skillsdata)
  return (
    <>

      <h1 className=" text-4xl text-center m-5">I’m Familier with</h1>
      <div className=" container flex justify-center gap-5 mx-40 ">
        <div className="flex grid-cols-4 gap-4">
          {skillsdata.map((skill) => (
            <div className="hover:" key={skill.id}>
              <div className="bg-sky-700  rounded-md flex items-center flex-col p-2" >
                <Image alt="react" src={skill.image} height={40} width={40} />
                
              </div>
              <p className="p-3 text-m">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
