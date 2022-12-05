import React from "react";
import Image from "next/image";
import Link from "next/link";
import hulu from "../images/projects/hulu.png";

import { projectList } from "../components/projectData";

const projects = () => {
  projectList.map((project) => {
    console.log(project.name);
  });
  return (
    <div className=" container  p-20 ">
      <h1 className="text-center text-2xl underline">Projects</h1>
      <div className="mt-20">
        <div className="flex flex-wrap grid-cols-2 gap-4 place-content-around">
          {/* {projectList.map((project, key) => (
            <div className="p-2" key={key}>
              <Image
                alt="hulu"
                src={project.image}
                height={1080}
                width={1920}
              />{" "}
              <h3 className="text-2xl font-bold">{project.name}</h3>
              <p>Developed using : {project.description} </p>
              <div className="flex gap-3 m-3">
                <button className="bg-sky-700 hover:bg-sky-300 text-white font-bold py-2 px-4 border border-blue-700 rounded scale-75 hover:scale-100 ease-in duration-500">
                  <Link href={project.liveLink}>Live Demo</Link>
                </button>
                <button className="bg-green-700 hover:bg-green-300 text-white font-bold py-2 px-4 border border-green-700 rounded scale-75 hover:scale-100 ease-in duration-500">
                  <Link href={project.projectLink}>Source Code</Link>
                </button>
              </div>
            </div>
          ))} */}
          <div className=" p-2">
            <Image alt="hulu" src={hulu} height={500} width={500} />
            <h3 className="text-2xl font-bold">Hulu Demo</h3>
            <p>Developed using : HTML 5, CSS, JavaScript, React.js </p>
            <div className="flex gap-3 m-3">
              <button className="bg-sky-700 hover:bg-sky-300 text-white font-bold py-2 px-4 border border-blue-700 rounded scale-75 hover:scale-100 ease-in duration-500">
                <Link href="https://hulu-demo-clone.vercel.app/">
                  Live Demo
                </Link>
              </button>
              <button className="bg-green-700 hover:bg-green-300 text-white font-bold py-2 px-4 border border-green-700 rounded scale-75 hover:scale-100 ease-in duration-500">
                <Link href="https://github.com/Nikhilsunny123/hulu-demo-clone">
                  Source Code
                </Link>
              </button>
            </div>
          </div>
          <div className=" p-2">
            <Image alt="hulu" src={hulu} height={500} width={500} />
            <h3 className="text-2xl font-bold">Hulu Demo</h3>
            <p>Developed using : HTML 5, CSS, JavaScript, React.js </p>
            <div className="flex gap-3 m-3">
              <button className="bg-sky-700 hover:bg-sky-300 text-white font-bold py-2 px-4 border border-blue-700 rounded scale-75 hover:scale-100 ease-in duration-500">
                <Link href="https://hulu-demo-clone.vercel.app/">
                  Live Demo
                </Link>
              </button>
              <button className="bg-green-700 hover:bg-green-300 text-white font-bold py-2 px-4 border border-green-700 rounded scale-75 hover:scale-100 ease-in duration-500">
                <Link href="https://github.com/Nikhilsunny123/hulu-demo-clone">
                  Source Code
                </Link>
              </button>
            </div>
          </div>
          <div className=" p-2">
            <Image alt="hulu" src={hulu} height={500} width={500} />
            <h3 className="text-2xl font-bold">Hulu Demo</h3>
            <p>Developed using : HTML 5, CSS, JavaScript, React.js </p>
            <div className="flex gap-3 m-3">
              <button className="bg-sky-700 hover:bg-sky-300 text-white font-bold py-2 px-4 border border-blue-700 rounded scale-75 hover:scale-100 ease-in duration-500">
                <Link href="https://hulu-demo-clone.vercel.app/">
                  Live Demo
                </Link>
              </button>
              <button className="bg-green-700 hover:bg-green-300 text-white font-bold py-2 px-4 border border-green-700 rounded scale-75 hover:scale-100 ease-in duration-500">
                <Link href="https://github.com/Nikhilsunny123/hulu-demo-clone">
                  Source Code
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
