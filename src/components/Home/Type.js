import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return ( 
    <Typewriter
      options={{
        strings: [
          "Fullstack Developer",
          "Data Guy",
          "Data Storyteller",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
