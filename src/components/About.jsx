import React from "react";

export default function About() {
  return (
    <>
      <div className="relative h-[316px] w-full">
        <img
          src="https://coolwallpapers.me/picsup/5043436-building-city-japan-light-night-time-lapse-tokyo.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-playfair text-white">About</h1>
        </div>
      </div>
      <div className="w-11/12 m-auto py-20 md:w-10/12">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h1 className="text-xl font-bold mb-4  border-b">
              Project Overview
            </h1>
            <p className="">
              This is a capstone project about Footstep Power Generator with
              Arduino which captures energy from footfalls to generate
              electricity. Using sensors and an Arduino microcontroller, it
              converts mechanical energy into electrical energy efficiently. The
              project showcases the feasibility of harvesting renewable energy
              from human movement, promoting sustainability and energy
              efficiency.
            </p>
          </div>
          <div>
            <h1 className="text-xl border-b font-bold mb-4 ">Team Members</h1>
            <ul>
              <li>Jhun Tibayan</li>
              <li>Carey Cole S. Garcia</li>
              <li>Cedrick Abitria Guiriba</li>
              <li>Erika Mae Petero</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4 border-b ">
              Technology and Innovation
            </h1>
            <p className="">
              Technology and innovation drive progress across industries,
              reshaping the way we live and work. From renewable energy
              solutions to cutting-edge advancements, they redefine efficiency
              and sustainability. Through ingenuity, we unlock new opportunities
              and address complex challenges, shaping a brighter future.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4 border-b ">Future Plans</h1>
            <p className="">
              In the future, our team intends to further develop our skills in
              project management, problem-solving, and collaboration as we
              progress throughout our career. We aim to enhance our
              understanding of sustainable energy solutions and Arduino
              technology through practical implementation and experimentation.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4 border-b ">
              Impact and Benefits
            </h1>
            <p className="">
              Our project offers sustainable energy solutions by harnessing
              human kinetic energy. It promotes environmental conservation,
              reduces reliance on traditional power sources, and demonstrates
              the potential of renewable energy integration in high-traffic
              areas.
            </p>
          </div>
          <p className="">
            All rights reserved © 2024. Unauthorized use or reproduction of
            content is prohibited without prior consent.
          </p>
        </div>
      </div>
    </>
  );
}
