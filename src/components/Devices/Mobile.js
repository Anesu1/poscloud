import Heading from "../../styled/Heading";
import Image from "../../styled/Image";
import Paragraph from "../../styled/Paragraph";
import Wrapper from "../../styled/Wrapper";

function Mobile() {
  return (
    <Wrapper>
      <Image imageSrc="device2.png" />
      <div className="inner">
        <Heading>V36-H mobile POS (mPOS)</Heading>
        <h4>Technical Specifications</h4>
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

export default Mobile;
