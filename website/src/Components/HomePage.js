import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import fightPic from "../Assets/fight-pic.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

import TechCards from "./TechCards";

const HomePage = () => {
  return (
    <>
      <Container fluid className="container container-main-content">
        <Row className="about-me-header">
          <Col sm="9" className="about-me-info">
            <h1>Rick Twohy</h1>
            <h3>Senior Software Engineer</h3>
            <p>
              I grew up in a smaller town in Northern California called Manteca.
              Most of my life I played sports and filled the time in between
              that with video games and working out. In 2012 I graduated from a
              small University called Graceland University located in the
              stoplightless city of Lamoni Iowa. A few short years later after
              trying out the business aspect of industry, I decided to try out
              programming. I figured I didn't like selling things that I didn't
              create, so why not make things with my hands. Well, I liked it so
              much I decided to go back to school at Iowa State University.
              Nowadays you can find me working at Ally Bank in Charlotte NC. At
              night you can find me mastering the art of computer science
              through personal projects / inventions.
            </p>
            <Link to="/resume" className="btn resume-button">
              <FontAwesomeIcon icon={faFileAlt} fixedWidth /> View Resume
            </Link>
          </Col>

          <Col sm="2" className="about-me-image">
            <img src={fightPic} alt="Fight Pic Of Me" />
          </Col>
        </Row>
        <hr />
        <Row className="what-i-do-section">
          <Col>
            <h2>What I Do</h2>
            <p>
              I have more than 4 years' experience building software for clients
              in many industries. Below is a quick overview of my main technical
              skill sets and technologies I use. Want to find out more about my
              experience? Check out my online <Link to="/resume">Resume</Link>.
            </p>
          </Col>
        </Row>
        <Row>
          <TechCards />
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
