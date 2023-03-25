import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCar";
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Projects = () => {
    const projects = [
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
            
                
                    <h2>Projects</h2>
                    <p>My Is Name Omar Hifnawy. I live in tanta .this is 5th Proj in react Dev ,And God willing, it won't be the last...</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                        <Nav.Link eventKey="first">1st Section</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link  eventKey="second" href="#connects">2nd Section</Nav.Link>
                    
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">3rd Section</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp">
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
                        <Tab.Pane eventKey="second"
                        >
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <p>My name omar. I live in tanta .this is 5th Proj in react Dev ,And God willing, it won't be the last...</p>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                
                
            </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}