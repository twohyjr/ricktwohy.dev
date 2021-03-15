import { Container, Row, Col } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import ModalImage from "react-modal-image";

const WoodshopPage = () => {
  const projects = {
    "Farmstyle L Shaped Desks": {
      id: 1,
      description: "This was my first desk!",
      images: ["L-desk-1.0.0.png", "L-desk-1.0.png", "L-desk-1.1.png", "L-desk-1.2.png", "L-desk-1.3.png", "L-desk-1.4.png", "L-desk-2.0.png", "L-desk-2.1.png", "L-desk-2.1.png", "L-desk-2.4.png"],
      filter: "desk",
    },
    "Farmstyle Desks": {
      id: 2,
      description: "Once I figured out how to build a desk it became my goal to make as smooth of a desktop as I could.",
      images: ["desk-1.0.png", "desk-1.1.png", "desk-1.2.png", "desk-1.3.png", "desk-2.0.png", "desk-2.1.png", "desk-2.2.png"],
      filter: "desk",
    },
    "Huge Cabinet": {
      id: 3,
      description: "I loved making this monster cabinet. ",
      images: ["cabinet-1.1.png", "cabinet-1.2.png"],
      filter: "desk",
    },
    Stool: {
      id: 4,
      description: "I loved making this monster cabinet. ",
      images: ["stool-1.png"],
      filter: "desk",
    },
  };

  const responsiveSize = {
    0: {
      items: 3,
    },
    1024: {
      items: 5,
    },
  };

  const handleDragStart = (e) => e.preventDefault();

  return (
    <>
      <div className="woodshop-wrapper">
        <h1>Woodshop</h1>
        <p>This page is a temporary placeholder. I need to refactor it so be patient with it! In early September of 2020 during the worldwide Covid pandemic, I decided that I would get outside by starting my own woodshop. I figured that I could practice my craftsmanship and get my eyes away from computer screens at the same time!</p>
        <hr />
        <div class="images">
          {Object.keys(projects).map((projectName) => {
            let project = projects[projectName];
            return (
              <AliceCarousel clasName="carousel" autoWidth mouseTracking responsive={responsiveSize}>
                {project.images.map((image) => {
                  return <ModalImage className="sliderimg" small={`${process.env.PUBLIC_URL}/assets/projects/${image}`} large={`${process.env.PUBLIC_URL}/assets/projects/${image}`} alt="Hello World!" />;
                })}
              </AliceCarousel>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WoodshopPage;
