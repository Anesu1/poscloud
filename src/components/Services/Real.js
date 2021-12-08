import Heading from "../../styled/Heading";
import Image from "../../styled/Image";
import Paragraph from "../../styled/Paragraph";
import Wrapper from "../../styled/Wrapper";

function Real() {
  return (
    <Wrapper>
      <Image imageSrc="savetime.png" />
      <div className="inner">
        <Heading>Real-time Monitoring</Heading>
        <Paragraph>
          To enable us to respond to problems right away, Poscloud uses
          real-time monitoring tools. By tracking real-time monitoring data over
          time, our clients can reveal and predict trends and performance. The
          data also helps to adjust resources if needed based on traffic.
        </Paragraph>
      </div>
    </Wrapper>
  );
}

export default Real;
