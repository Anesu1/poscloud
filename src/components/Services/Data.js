import Heading from "../../styled/Heading";
import Image from "../../styled/Image";
import Paragraph from "../../styled/Paragraph";
import ReverseWrapper from "../../styled/ReverseWrapper";

function Data() {
  return (
    <ReverseWrapper>
      <div className="inner">
        <Heading>Data Analytics</Heading>
        <Paragraph>
          At Poscloud we help clients make the right sense of data while
          tracking the effectiveness of their processes and strategies, &
          measuring performance. Our data management & analytics capabilities
          and research skills bring together context and data to generate
          meaningful business insights. We are one of the leading data analytics
          consulting services companies offering marketing analytics, customer
          analytics, research analytics, sales analytics, and other data
          analytics services
        </Paragraph>
      </div>
      <Image imageSrc="getpaid.png" />
    </ReverseWrapper>
  );
}

export default Data;
