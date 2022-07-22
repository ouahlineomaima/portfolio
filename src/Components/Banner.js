import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from '../assets/img/OUAHLINE Omaima.png';
export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">WebDev is my word</span>
                        <h1>{"Hi I'm OUAHLINE Omaima"} <span className="wrap"> web developer</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quos eaque nemo tenetur neque ullam quidem nulla. Ut, nihil officia. Rem culpa rerum illum, totam illo animi perspiciatis aut? Exercitationem.</p>
                        <p>test commit</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md ={60} xl ={5}>
                        <img src={headerImg} alt="Header image" />
                    </Col>
                </Row>
            </Container>
        </section>
      );
}
 

