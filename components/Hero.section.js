import Image from "next/image"
import github from "../images/icons/github.svg"
import linkedin from "../images/icons/linkedin.svg"

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
         
              src={github}
              height={50}
             width={50}
            />
             <Image 
              alt="github"  
            
              src={linkedin}
              height={50}
              width={50}
            />

            

        </div>
    </section>
  )
}

export default HeroSection