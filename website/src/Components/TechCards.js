import { Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import cpp from "../Assets/Icons/cpp.png";
import metal from "../Assets/Icons/metal.png";
import terraform from "../Assets/Icons/terraform.png";
import golang from "../Assets/Icons/golang.png";
import bash from "../Assets/Icons/bash.png";
import opengl from "../Assets/Icons/opengl.png";

import {
  faReact,
  faPython,
  faAngular,
  faEmber,
  faHtml5,
  faSass,
  faSwift,
  faNode,
  faAws,
  faDocker,
  faJenkins,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";

const TechCards = () => {
  return (
    <>
      {/* Code Languages */}
      <Col lg="3" className="language-card">
        <div class="techs">
          <img
            src={golang}
            title="Golang"
            className="tech-icon fa-golang"
            alt="Golang"
          />
          <img
            src={cpp}
            width="28"
            title="C++"
            className="tech-icon"
            alt="C++"
          />

          <FontAwesomeIcon
            icon={faJsSquare}
            size="2x"
            title="NodeJs"
            className="tech-icon"
          />
          <FontAwesomeIcon
            icon={faSwift}
            size="2x"
            title="Swift"
            className="tech-icon"
          />
          <FontAwesomeIcon
            icon={faPython}
            size="2x"
            title="Python"
            className="tech-icon"
          />
        </div>
        <h4>Code Languages</h4>
        <p>
          I have programmed in many different languages. My favorite is c++ but
          each language definately has a special place in my heart. Except VB.
          Burn it to the ground!
        </p>
      </Col>

      {/* Computer Graphics */}
      <Col lg="4" className="language-card">
        <div class="techs">
          <img
            src={metal}
            width="30"
            title="Metal"
            className="tech-icon"
            alt="Metal"
          />
          <img
            src={opengl}
            width="50"
            title="OpenGL"
            className="tech-icon"
            alt="OpenGL"
          />
          <img
            src={cpp}
            width="28"
            title="C++"
            className="tech-icon"
            alt="C++"
          />
        </div>
        <h4>Computer Graphics</h4>
        <p>
          My first passion is Computer Graphics. I am absolutely addicted to how
          video games / movies can create realist looking images using math and
          a "couple" lines of code. I even created a youtube channel to present
          how computer graphics work using Metal (Apples proprietary shading
          language)
        </p>
      </Col>

      {/* Backend & Apis */}
      <Col lg="3" className="language-card">
        <div class="techs">
          <img
            src={golang}
            title="Golang"
            className="tech-icon fa-golang"
            alt="Golang"
          />
          <FontAwesomeIcon
            icon={faNode}
            size="2x"
            title="NodeJs"
            className="tech-icon"
          />
          <FontAwesomeIcon
            icon={faDocker}
            size="2x"
            title="Docker"
            className="tech-icon"
          />
          <FontAwesomeIcon
            icon={faAws}
            size="2x"
            title="AWS"
            className="tech-icon"
          />
        </div>
        <h4>Backend & APIs</h4>
        <p>
          My second passion lies in the backend systems of applications. I love
          developing tools / apis for users to use and consume. I have written
          many RESTful apis from scratch using both node and golang. I love
          trying to develop architecture and solve problems.
        </p>
      </Col>

      {/* Frontend */}
      <Col lg="3" className="language-card">
        <div class="techs">
          <FontAwesomeIcon
            icon={faReact}
            size="2x"
            title="ReactJs"
            className="tech-icon"
          />
          <FontAwesomeIcon
            icon={faEmber}
            size="2x"
            title="EmberJs"
            className="tech-icon"
          />
          <FontAwesomeIcon
            icon={faAngular}
            size="2x"
            title="AngularJs"
            className="tech-icon"
          />
          <FontAwesomeIcon
            icon={faHtml5}
            size="2x"
            title="Html5"
            className="tech-icon"
          />
          <FontAwesomeIcon
            icon={faSass}
            size="2x"
            title="Sass"
            className="tech-icon"
          />
        </div>
        <h4>Frontend</h4>
        <p>
          While I am more of a backend developer, I find that frontend work can
          sometimes be pleasing. My favorite frontend framework/ library is by
          far ReactJS. In the past I have also done work in EmberJs and Angular.
        </p>
      </Col>

      {/* Devops */}
      <Col lg="3" className="language-card">
        <div class="techs">
          <img
            src={terraform}
            width="30"
            title="Terraform"
            className="tech-icon"
            alt="Terraform"
          />
          <img
            src={bash}
            width="30"
            title="Bash"
            className="tech-icon"
            alt="Bash"
          />
          <FontAwesomeIcon
            icon={faJenkins}
            size="2x"
            title="Jenkins"
            className="tech-icon"
          />
        </div>
        <h4>Devops</h4>
        <p>
          I am so interested in how things work I sometimes find myself doing
          devops. I love writing infrastructure as code because it allows me to
          understand the resources I am creating at a more fundamental level.
        </p>
      </Col>
    </>
  );
};
export default TechCards;
