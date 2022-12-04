import Image from "next/image"
import github from "../images/icons/github.svg"

function HeroSection() {
  return (
    <section className="m-10 p-10">
        <p className="">Hi I’m</p>
        <h1 className="">Nikhil Sunny</h1>
        <p>Web Developer</p>
        <div>
            <button>Let’s Talk!</button>
            <Image
              alt="github"  
              layout="responsive"
              src={github}
              height={100}
             width={200}
            />

            

        </div>
    </section>
  )
}

export default HeroSection