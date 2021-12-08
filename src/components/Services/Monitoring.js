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
        Real-time Monitoring
        </Heading>
        <Paragraph>
          WageCloud is an automated payroll management system designed to make
          payroll processing easier, faster and more secure. It offers
          comprehensive human resource management, statutory reports
          calculations, compliance, leave management.
        </Paragraph>
      </div>
    </Wrapper>
  );
}

export default Custom;
