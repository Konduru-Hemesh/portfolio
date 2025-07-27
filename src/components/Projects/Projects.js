import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wiki from "../../Assets/Projects/wikipedia.png";
import sgpa from "../../Assets/Projects/sgpa_.png";
import todo from "../../Assets/Projects/todoapp.png";
import foodmunch from "../../Assets/Projects/foodmunch.png";
import promptify from "../../Assets/Projects/promptify.png";
import learning from "../../Assets/Projects/learningpathgenerator.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learning}
              isBlog={false}
              title="Learning path Generator"
              description="Built an application using MCP(Model Context protocol) in which user can get the roadmap of anything they want to learn .By Providing youtube url and drive url it will automatically post the roadmap and create a playlist in youtube account."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodmunch}
              isBlog={false}
              title="FoodMunch"
              description="A Restaurent Menu to order food items , build with HTML, CSS, and Bootstrap. Have features which allows user for realtime ordering ,food items availability notifications as well as gift vouchers to claim."
              ghLink="https://github.com/Konduru-Hemesh/Food_Munch_Restaurant"
              
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="ActionPad"
              description="A todo type of application which is built using HTML,CSS,JavaScript,Bootstrap, Where user can track there daily tasks by creating and deleting and updating setting timer."
              ghLink="https://github.com/Konduru-Hemesh/ActionPad"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wiki}
              isBlog={false}
              title="InfoHub"
              description="A free encyclopedia maintained using API built with HTML,JS it is open source and collaborative , People can get anysort of information from this application."
              ghLink="https://github.com/Konduru-Hemesh/InfoHub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={promptify}
              isBlog={false}
              title="Promptify"
              description="An application which refnes the prompt before giving to any AI application to get better results,Built using ReactJs, NodeJs, ExpressJs, MySQL DB, Gemini API"
              ghLink="https://github.com/Konduru-Hemesh/Promptify"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sgpa}
              isBlog={false}
              title="SGPA Calculator"
              description="An application Built Using ReactJs,Tailwind CSs which helps to calculate SGPA and CGPA of semester and year by providing the necessary details required ,it also provides additional info like max mark , min mark."
              ghLink="https://github.com/Konduru-Hemesh/SGPA_CALCULATOR"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
