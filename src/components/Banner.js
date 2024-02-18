import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";


export const Banner = () => {

    const {loopNum, setLoopNum} = useState(0);
    const {isDeleing, setIsDeleting} = useState(false);
    const toRotate = [ "Mobile App Developer", "Web Developer", "Game Development", "Web Desiginer"];
    const {text, setText} = useState('');
    const {delta, setDelta} = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() =>{

        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, {text});

    const tick = () => {

        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText;

        if (isDeleing) {
            updatedText = fullText.substring(0, text.length - 1);
        } 
        else {
            updatedText = fullText.substring(0, text.length + 1);
        }
        
        setText(updatedText);

        if(isDeleing){
            setDelta(prevDelta => prevDelta / 2);
        }

        if(!isDeleing && updatedText === fullText){

            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleing && updatedText === ''){

            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">

                    <Col xs={12} md={6} xl={7}> 
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>
                            {"Hi I'm Mahim "}
                            <span className="wrap">{text}</span>
                        </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button onClick={() => console.log("connect")}>
                            Let's connect <ArrowRightCircle size={25}/>
                        </button>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Image" />
                    </Col>

                </Row>
            </Container>
        </section>
    )
}
