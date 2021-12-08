import Heading from "../../styled/Heading";
import Image from "../../styled/Image";
import Paragraph from "../../styled/Paragraph";
import ReverseWrapper from "../../styled/ReverseWrapper";

function Near() {
  return (
    <ReverseWrapper>
      <div className="inner">
        <Heading>Near Field Communication</Heading>
        <Paragraph>
          Poscloud offers Near Field Communication services. Near Field
          Communication (NFC) is a set of short-range wireless technologies,
          typically requiring a distance of 4cm or less to initiate a
          connection. Poscloud NFC services are currently being offered through
          an offline The card is currently being used by CBZ and NMB for ZUPCO &
          ZINARA
        </Paragraph>
      </div>
      <Image imageSrc="near.png" />
    </ReverseWrapper>
  );
}

export default Near;
