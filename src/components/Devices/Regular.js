import Heading from "../../styled/Heading";
import Image from "../../styled/Image";
import Paragraph from "../../styled/Paragraph";
import ReverseWrapper from "../../styled/ReverseWrapper";

function Regular() {
  return (
    <ReverseWrapper>
      <div className="inner">
        <Heading>V71 Regular POS</Heading>
        <h4>Technical Specifications</h4>
        <Paragraph>
          Poscloud provides several interfaces for developing custom-built
          payment platforms that will allow our clients to accept payments in
          real-time from their secure server and have complete control over
          their payment page, without having to redirect their customers to a
          Hosted Payment Page.
        </Paragraph>
      </div>
      <Image imageSrc="device1.png" />
    </ReverseWrapper>
  );
}

export default Regular;
