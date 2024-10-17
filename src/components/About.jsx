import React from "react";
import { FadeIn } from "./FadeIn";
import Container from "./Container";
import Card from "./Card";

function About() {
  return (
    <Container id="home">
      <FadeIn>
        <div className="flex w-full flex-col items-start gap-x-8 gap-y-10 bg-[#FF4D00]/90 backdrop-blur-sm border border-white/40 px-12 py-5 my-2 rounded-3xl max-mdd:max-w-none max-md:p-8 ">
          <h3 className="max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em] drop-shadow-lg">About Me.</h3>
        </div>
        <div className="flex w-full flex-col items-start gap-x-8 gap-y-10 bg-white/40 backdrop-blur-sm border border-white/40 px-12 py-10 mb-3 my-2 rounded-3xl max-mdd:max-w-none max-md:p-8 ">
          <h3 className="max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em] text-justify drop-shadow-lg">
            I am a fifth-semester undergraduate student at Binus University, majoring in Information Systems. I have acquired a comprehensive understanding of the field through both theoretical and technical learning. My academic journey
            has equipped me with a solid foundation in information systems. Outside of college, I am passionate about learning new things, including exploring other things, such as following technology growth and improvement. I am eager to
            gain practical experience and further develop my skills in the professional world.
          </h3>
        </div>
      </FadeIn>
    </Container>
  );
}

export default About;
