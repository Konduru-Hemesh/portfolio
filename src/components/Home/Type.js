import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Power BI Analyst",
          "Freelancer",
          "MERN Stack Developer",
          "DSA Enthusiast",
          "Embedded systems enthisiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
