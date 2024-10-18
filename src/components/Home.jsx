import React from "react";
import Container from "./Container";
import { FadeIn } from "./FadeIn";
import Socials from "./Socials";
import profile from "../assets/pas-foto-utama-square.png"

function Home() {
  return (
    <Container id="home">
      <FadeIn>
        <div className="grid gap-x-2 gap-y-2 grid-cols-[1fr_0.7fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">
          <div className="flex w-full max-w-[746px] flex-col items-start gap-x-8 gap-y-8 bg-white/40 backdrop-blur-md border border-white/40 px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">
            <img
              src={profile}
              alt="profile-picture"
              className="overflow-hidden w-[108px] h-[108px] flex-[0_0_auto] rounded-full"
            />
            <h1 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em] drop-shadow-lg">
              <span className="text-[#1d4ed8] font-bold">
              Rio Sidqi
              </span>
              <br />
              front end developer{" "}
              <span className="">
                {" "}
                who build things for the web.
              </span>
            </h1>
          </div>
          <div className="flex flex-col justify-between items-stretch gap-x-8 gap-y-8 bg-white/40 backdrop-blur-md border border-white/40 text-center p-12 rounded-3xl max-md:p-8">
            <div className="flex flex-col justify-center items-center mt-8 mb-8 gap-3 max-md:mb-4">
              <h2 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em] drop-shadow-lg">
                Have a project in mind? Let's bring your vision to life together!
              </h2>
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=riosidqi21@gmail.com" target="_blank"
              className="min-h-[96px] bg-[#FF4343] hover:bg-black border border-white/40 transition-[background-color] duration-300 ease-[ease-out] text-[40px] leading-[48px] font-medium text-center tracking-[-0.01em] px-8 py-6 m-8 rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 text-white drop-shadow-lg"
            >riosidqi21@gmail.com</a>
          </div>
        </div>
        <Socials />
        <div className="flex w-full flex-col items-start gap-x-8 gap-y-10 bg-white/40 backdrop-blur-sm border border-white/40 px-12 py-10 mb-3 rounded-3xl max-mdd:max-w-none max-md:p-8 ">
          <h3 className="max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em] drop-shadow-lg">
            I am an aspiring up and coming full-stack developer with a love for frontend and
            design, I like to think creativly when approaching a problem.{" "}
            <span className="text-[#ff6600]">
              {" "}
              I'm currently seeking for an opportunity to further explore my skills and experiences.
            </span>
          </h3>
        </div>
      </FadeIn>
    </Container>
  );
}

export default Home;
