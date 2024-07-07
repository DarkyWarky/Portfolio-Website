import React from 'react';

const Intro = () => {
  return (
    <div className="bg-gray-900 text-white flex pt-20 px-5 items-center">
      <div className="md:w-1/2 md:pr-8 z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-xl leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis massa at
          iaculis blandit. Cras auctor purus at sapien rutrum, id tristique risus feugiat. Ut ac
          condimentum dolor, sed convallis lorem. Nulla facilisi.
        </p>
      </div>
      <div className="absolute z-0 top-24 left-0 p-3 opacity-45 md:w-1/2 md:relative md:mt-0 md:top-0 md:flex md:justify-around md:opacity-100 md:p-0">
        <img
          src="../../public/image.png" // Replace with your image URL
          alt="Portfolio Image"
          className="rounded-lg shadow-lg w-[100vw] h-[80vh] md:w-[50vh] "
        />
      </div>
    </div>
  );
};

export default Intro;
