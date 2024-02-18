import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  
  const formInitialDetails = {
    firstname : '',
    lastName : '',
    email : '',
    phone: '',
    messgae: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category] : value
    })
  }

  const handleSubmit = () =>{
    
  }


  return (
    <Section classname="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contactImg" />
          </Col>

          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.firstname} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)} />
                </Col>

                <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)} />
                </Col>

                <Col sm={6} className="px-1">
                  <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate("email", e.target.value)} />
                </Col>

                <Col sm={6} className="px-1">
                  <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate("phone", e.target.value)} />
                </Col>

                <Col>
                  <textarea rows="6" value={formDetails.messgae} placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)}></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {
                  status.messgae && 
                  <Col>
                    <p className={status.success === false ? "danger" : "success"}>{status.messgae}</p>
                  </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}