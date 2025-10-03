import gsap from "gsap"
import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="flex justify-center items-center h-screen w-full gap-9">
      <div className="">
        <Image src="/assets/about.jpeg" alt="about" width={300} height={400} />
      </div>
      <div className="">
        <p className="font-semibold text-xl">Ketika ketenangan berpadu dengan keindahan alam.</p>
      </div>
    </section>
  );
}

export default About