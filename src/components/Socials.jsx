import React from "react";

function Socials() {
  return (
    <div className="flex overflow-hidden justify-around items-center gap-x-2 gap-y-4 my-2  max-md:grid max-md:auto-cols-[1fr] max-md:gap-x-2 max-md:gap-y-2 max-md:grid-cols-[1fr_1fr] max-md:grid-rows-[auto_auto]">
        <a
          href="https://www.linkedin.com/in/rio-s-57aa59223"
          className="flex w-full min-h-[60px] justify-center items-center bg-[#0072b1] border border-white/40 hover:bg-black transition-[background-color] duration-300 ease-[ease-out] text-white text-lg leading-6 text-center tracking-[-0.01em] px-8 py-4 rounded-[99px]"
          >
          LinkedIn
        </a>
        <a
          href="https://github.com/sanpo9k"
          className="flex w-full min-h-[60px] justify-center items-center bg-[#2dba4e] border border-white/40 hover:bg-black transition-[background-color] duration-300 ease-[ease-out] text-white text-lg leading-6 text-center tracking-[-0.01em] px-8 py-4 rounded-[99px]"
          >
          GitHub
        </a>
    </div>
  );
}

export default Socials;
