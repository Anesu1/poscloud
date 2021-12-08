
import Heading from "../../styled/Heading";
import Image from "../../styled/Image";
import Paragraph from "../../styled/Paragraph";
import ReverseWrapper from "../../styled/ReverseWrapper";

function Mechant() {
  return (
    <ReverseWrapper>
      <div className="inner">
        <Heading>Merchant Hosting</Heading>
        <Paragraph>
          Poscloud provides several interfaces for developing custom-built
          payment platforms that will allow our clients to accept payments in
          real-time from their secure server and have complete control over
          their payment page, without having to redirect their customers to a
          Hosted Payment Page.
        </Paragraph>
      </div>
      <Image imageSrc="getpaid.png" />
    </ReverseWrapper>
  );
}

export default Mechant;
