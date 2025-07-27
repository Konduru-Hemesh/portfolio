import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Konduru Hemesh </span>
            from <span className="purple"> Andhra pradesh, India.</span>
            <br />
            I am currently pursuing B.TECH in computer science and engineering (CSE) at Amrita viswavidya peetam.
            <br />
            I have completed Intermediate in (MPC) at Narayana Junior college.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Manga and story books
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Songs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Explore the things that you are interested in and start working on it, one day they will give you life."{" "}
          </p>
          <footer className="blockquote-footer">K.Hemesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
