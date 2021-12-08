import Button from "../../styled/Button";
import Heading from "../../styled/Heading";
import Image from "../../styled/Image";
import Paragraph from "../../styled/Paragraph";
import Wrapper from "../../styled/Wrapper";

function Simple() {
  return (
    <Wrapper>
      <Image imageSrc="simple.png" />
      <div className="inner">
        <Heading>
          Simple. <br />
          Swift. <br />
          Secure.
        </Heading>
        <Paragraph>
          Enjoy peace of mind. Focus on the more important things. Spend more
          time moving forward
        </Paragraph>
        <Button>Learn more about our restaurant offering</Button>
      </div>
    </Wrapper>
  );
}

export default Simple;
