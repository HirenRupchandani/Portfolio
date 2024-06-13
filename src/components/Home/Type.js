import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return ( 
    <Typewriter
      options={{
        strings: [
          "Data Analyst",
          "Machine Learning Engineer",
          "Data Scientist"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;
