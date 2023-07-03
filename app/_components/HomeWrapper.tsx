'use client'
import Button from "@/components/Button";
import SocialIcon from "./SocialIcon";

const HomeWrapper = () => {
  const handleContactClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(event);
  }
  const handleDownloadResume = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    window.open("https://drive.google.com/file/d/1Fgos-Y5n7lkARJSQuOL4Wqc7ARWgKwZW/view", "_blank")
  }

  const socialLinksList = [{ src: "linkedin.svg", href: "" }, { src: "twitter.svg", href: "" }]
  return (<>
    <section className="w-[min(calc(100%-4rem),80rem)] flex-grow flex flex-col-reverse justify-start lg:flex-row gap-x-10 py-10">
      <section className="w-full lg:w-1/2 flex flex-col gap-y-4 flex-grow">
        <h1 className="text-[2rem] text-center lg:text-left sm:text-[4rem] font-bold mt-auto">Your name</h1>
        <h2 className="text-center lg:text-left">Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h2>
        <section className="flex gap-x-4 mt-4 sm:flex-row flex-col justify-center lg:justify-start items-center gap-y-2 lg:items-start">
          <Button handleClick={handleContactClick} label={"Contact me"} extraClass={"green-shadow"} styleType="primary" />
          <Button handleClick={handleDownloadResume} label={"Download resume"} extraClass={""} styleType="secondary" />
        </section>
        <section className="flex gap-x-2 mt-auto justify-center sm:justify-end lg:justify-start">
          {socialLinksList?.map((icon, index) => {
            return <SocialIcon src={icon?.src} href={icon?.href} key={index} />
          })}
        </section>
      </section>
      <section className="flex-col lg:flex-row lg:w-1/2 flex items-center justify-end flex-grow">
        <div className="profile-mask green-shadow">
          <img src="profile.jpeg" alt="Couldn't load properly" className="w-[10rem] sm:w-[20rem] aspect-square lg:w-[25rem]" />
        </div>
      </section>
    </section>
  </>);
}

export default HomeWrapper;

