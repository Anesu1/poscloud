import Heading from "../../styled/Heading";
import Image from "../../styled/Image";
import Paragraph from "../../styled/Paragraph";
import Wrapper from "../../styled/Wrapper";

function Intergrated() {
  return (
    <Wrapper>
      <Image imageSrc="device.png" />
      <div className="inner">
        <Heading>V37 Integrated POS (iPOS)</Heading>
        <h4>Technical Specifications</h4>
        <Paragraph>
          Poscloud has an exclusive distributorship agreement with Vanstone
          Electronics (Beijing) Co. Limited, a State-Owned Chinese Company
          listed on the Shanghai Stock Exchange that manufactures Aisino branded
          Point of Sale devices. Our team is trained to provide after sale POS
          device support, repair and maintenance.
        </Paragraph>
      </div>
    </Wrapper>
  );
}

export default Intergrated;
