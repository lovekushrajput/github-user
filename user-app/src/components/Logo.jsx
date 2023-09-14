import React from "react";

function Logo() {
  return (
    <div className="flex pb-2 justify-center items-center border-b border-grey-500">
      <img
        className="w-24 rounded-full"
        src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
        alt="cat"
      />

      <h1 className="text-2xl px-2 first-letter:text-5xl">Github User</h1>
    </div>
  );
}

export default Logo;
