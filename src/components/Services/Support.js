import Heading from "../../styled/Heading";
import Image from "../../styled/Image";
import Paragraph from "../../styled/Paragraph";
import ReverseWrapper from "../../styled/ReverseWrapper";

function Support() {
  return (
    <ReverseWrapper>
      <div className="inner">
        <Heading>24/7 Support</Heading>
        <Paragraph>
          Poscloud offers 24hour support services through the Helpdesk where
          issues can be logged at any time. Turnaround time for issues is 2
          hours maximum. Being available for our clients’ needs at any time,
          including weekends, also recommends us as a service provider of
          choice. Below is the link to the help desk:
        </Paragraph>
        <Paragraph>https://helpdesk.poscloud.co.zw/</Paragraph>
      </div>
      <Image imageSrc="getpaid.png" />
    </ReverseWrapper>
  );
}

export default Support;
