
import Heading from "../../styled/Heading";
import Image from "../../styled/Image";
import Paragraph from "../../styled/Paragraph";
import Wrapper from "../../styled/Wrapper";

function Custom() {
  return (
    <Wrapper>
      <Image imageSrc="savetime.png" />
      <div className="inner">
        <Heading>
          <span>Custom </span> Software Development
        </Heading>
        <Paragraph>
          Poscloud designs and builds software solutions to address unique needs
          for its clients. With vast experience in IT, Poscloud provides
          all-round custom software development services to deploy highly
          customized software with speed and quality.
        </Paragraph>
      </div>
    </Wrapper>
  );
}

export default Custom;
