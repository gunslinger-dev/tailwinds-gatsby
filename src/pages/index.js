import React from "react";

const IndexPage = () => {
  return (
    <div className="text-center py-20 mx-auto ">
      <p className="text-4xl">
        Welcome to{" "}
        <a className="underline" href="https://www.gunslinger.dev">
          Tailwinds Gatsby Test Page
        </a>
      </p>
      <img
        src="https://via.placeholder.com/728x90.png?text=Placeholder Image"
        className="my-4 w-6/12 h-60 object-center object-contain mx-auto"
        alt="Placeholder"
      />
      <hr />
      <div className="w-6/12 mx-auto mt-20 p-10 bg-red-100 rounded-xl text-left">
        <p><center>This repository is the boilerplate for Gatsby with Tailwind CSS.</center></p>
      </div>
      <br />

    </div>
  );
};
export default IndexPage;
