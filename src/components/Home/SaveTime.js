import Button from "../../styled/Button";
import Heading from "../../styled/Heading";
import Image from "../../styled/Image";
import Wrapper from "../../styled/Wrapper";

function SaveTime() {
  return (
    <Wrapper>
      <Image imageSrc="savetime.png" />
      <div className="inner">
        <Heading>
          Save time with tools that connect your entire business.
        </Heading>
        <ul>
          <li>POS Device Supply & Management</li>
          <li>Merchant Hosting</li>
          <li>Custom Software Development</li>
          <li>Near Field Communication</li>
          <li>Postilion System</li>
          <li>Data Analytics</li>
          <li>Real-Time Monitoring</li>
          <li>24/7 Support</li>
          <li>Payroll Services</li>
        </ul>
        <Button>Learn more about our restaurant offering</Button>
      </div>
    </Wrapper>
  );
}

export default SaveTime;
