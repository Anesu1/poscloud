import Button from "../../styled/Button";
import Heading from "../../styled/Heading";
import Image from "../../styled/Image";
import Paragraph from "../../styled/Paragraph";
import ReverseWrapper from "../../styled/ReverseWrapper";

function GettingPaid() {
  return (
    <ReverseWrapper>
      <div className="inner">
        <Heading>Get paid fast from anywhere.</Heading>
        <Paragraph>
        Send professional invoices, track them in real time, and accept payments online—all from one place. Save time with auto-billing, stored information, and powerful reporting tools.
        </Paragraph>
        <Button>Learn about Our Invoices</Button>
      </div>
      <Image imageSrc="getpaid.png" />
    </ReverseWrapper>
  );
}

export default GettingPaid;
