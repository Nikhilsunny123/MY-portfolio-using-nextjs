import Image from "next/image";
import github from "../images/icons/github.svg";
import linkedin from "../images/icons/linkedin.svg";

function HeroSection() {
  return (
    <section className="container ml-20 p-20 flex flex-col gap-5 ">
      <p className="text-3xl">Hi I’m</p>
      <h1 className="text-6xl">Nikhil Sunny</h1>
      <p className="text-3xl">Web Developer</p>
      {/* <div>
        <button className="bg-sky-700 hover:bg-sky-300 text-white font-bold py-2 px-4 border border-sky-700 rounded scale-75 hover:scale-100 ease-in duration-500">
          Let’s Talk!
        </button>
        <Image alt="github" src={github} height={50} width={50} />
        <Image alt="github" src={linkedin} height={50} width={50} />
      </div> */}
    </section>
  );
}

export default HeroSection;
