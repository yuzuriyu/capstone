import React from "react";

const ProjectDetails = () => {
  return (
    <>
      <div className="relative h-[316px] w-full">
        <img
          src="https://r4.wallpaperflare.com/wallpaper/666/572/996/virtual-youtuber-hololive-kazama-iroha-bamboo-hd-wallpaper-e215e33cf8ea55665ea7dfaaadabcba3.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-playfair">Project Details</h1>
        </div>
      </div>
      <div className="w-11/12 m-auto py-20 md:w-10/12">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h1 className="text-xl font-bold mb-4  border-b">
              Project Overview
            </h1>
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quo
              ab expedita praesentium accusantium voluptates fugiat aliquam
              eveniet dolores. Quaerat adipisci fugit sequi nesciunt quam
              suscipit, est eos ducimus sapiente?
            </p>
          </div>
          <div>
            <h1 className="text-xl border-b font-bold mb-4 ">Team Members</h1>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              quasi aspernatur accusamus doloribus voluptatibus reiciendis unde
              laudantium? Ratione aliquam doloribus soluta qui animi. Ipsum hic
              officia eos corporis est. Eos?
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4 border-b ">
              Technology and Innovation
            </h1>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              libero ad dolore earum laborum necessitatibus delectus
              perspiciatis molestias illum quibusdam laboriosam quo provident
              autem labore, doloremque similique sequi, numquam reiciendis.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4 border-b ">Future Plans</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              nisi qui corporis porro animi mollitia illum minus odit nulla
              ipsum officiis asperiores natus beatae ut quasi, molestias quas
              voluptate. Cupiditate!
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4 border-b ">
              Impact and Benefits
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsam
              quo atque nulla veritatis tempore libero unde asperiores ea
              ratione, eveniet voluptate animi corporis ex esse enim explicabo
              perspiciatis nostrum?
            </p>
          </div>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            accusamus suscipit, voluptatem tempore veniam nihil,
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
