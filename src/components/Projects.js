import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Car.png";
import projImg2 from "../assets/img/Car.png";
import projImg3 from "../assets/img/Game.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "CarShow Case",
      description: "Explore, rent, or buy your ideal car effortlessly with this app. Detailed specs like fuel efficiency and transmission make finding the perfect match a breeze. Your automotive journey begins here.",
      imgUrl: projImg1,
    },
    {
      title: "MediaMixUp",
      description: "MediaMixUp: Your all-in-one hub for movies, TV shows, and video games. Explore, discover, and enjoy seamlessly with our user-friendly app.",
      imgUrl: projImg2,
    },
    {
      title: "2D Adventure Game",
      description: "Embark on a Java-coded 2D treasure hunt with nostalgic pixel art and intuitive gameplay. Conquer challenges, outsmart guardians, and claim the ultimate treasure!",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                  Explore a diverse range of impactful projects, including mobile app development (Java/Kotlin), low-level programming (C), 
                  and dynamic web design (React.js/Next.js). From seamless mobile experiences to system-level programming intricacies and modern web interfaces, 
                  each project reflects a commitment to innovation and effectiveness in software solutions. Check out my GitHub for more!
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second"> 
                      {/* <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row> */}
                    </Tab.Pane>

                    <Tab.Pane eventKey="third"> 
                      {/* <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row> */}
                    </Tab.Pane>

                    <Tab.Pane eventKey="section">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Nothing for now.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Nothing for now.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
