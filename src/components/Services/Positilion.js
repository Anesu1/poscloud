import Heading from "../../styled/Heading";
import Image from "../../styled/Image";
import Paragraph from "../../styled/Paragraph";
import Wrapper from "../../styled/Wrapper";

function Positilion() {
  return (
    <Wrapper>
      <Image imageSrc="posi.png" />
      <div className="inner">
        <Heading>Positilion System</Heading>
        <Paragraph>
        Poscloud’s Postillion system, “Pay 263” is a system that provides
          banking transaction switching software that routes financial
          transactions. Our Postilion switch software servers are set up in a
          relatively simple fashion, whereby transactions flow into the switch,
          which then sends them through to their appropriate destination.
        </Paragraph>
      </div>
    </Wrapper>
  );
}

export default Positilion;
