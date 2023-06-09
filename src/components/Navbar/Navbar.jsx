import React from "react";
// import { Link } from "next/link";

function Navbar() {
  return (
    <div className="m-auto flex border-2 border-white-800 container">

      <div className="w-2/5 ml-4">
        <div className="flex m-1">
          <p>Siganos en</p>
          <ul className="flex pl-1">
            {["fb", "tw", "yt"].map((e, index) => (
              <li key={e + index} className="pr-1">{e}</li>
            ))}
          </ul>
        </div>

        <div className="border border-1 border-blue-500">
          <ul className="flex justify-center">
            {["home", "blog", "contact"].map((e, index) => (
              <li key={e + index} className="pr-2 m-2">{e}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="w-1/5 border border-1 border-green-500 text-center flex items-center justify-center">
        image
      </div>
      
      <div className="w-2/5 flex flex-col mr-4 ">
        <div className="m-1 flex justify-end">
          <p className="pr-2">Search</p>
          <input type="text" placeholder="mensaje o categoria" />
        </div>

        <div className="border border-1 border-blue-500">
          <ul className="flex justify-center">
            {["messages", "devotionals", "profile"].map((e, index) => (
              <li key={e + index} className="pr-2 m-2">{e}</li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
