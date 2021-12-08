// import styled from "styled-components";
import Form from "../styled/Form";
import Heading from "../styled/Heading";
import Paragraph from "../styled/Paragraph";
import Wrapper from "../styled/Wrapper";

function Contact() {
  return (
    <Wrapper>
      <div className="contact-inner">
        <Heading>Contact Us</Heading>
        <span>
          Our team is ready to answer any questions and attend to any queries
          that you might have. Give us a call or drop us an email any time.
        </span>
        <Paragraph>
          Please complete the form and then click on Submit and we’ll be in
          contact.
        </Paragraph>
      </div>
      <Form />
    </Wrapper>
  );
}

export default Contact;
