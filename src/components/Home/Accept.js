import styled from 'styled-components';
import Button from '../../styled/Button';
import Heading from '../../styled/Heading';
import Image from '../../styled/Image';
import Paragraph from '../../styled/Paragraph';

const Wrapper = styled.section`
    padding:5%;
    background:${props => props.theme.color.bgblack};
    display: flex;
  flex-direction: column-reverse;
  @media (min-width: 768px) {
    flex-direction:row;
    /* justify-content: space-between; */
  }
  @media (min-width: 992px) {
    padding:5% 7%;
  }
  .inner {
    @media (min-width: 768px) {
      width: 50%;
      margin:auto auto auto 0;
    }
  }
    h2,p{
        color:#ffffff;
    }
    button{
        color:${props => props.theme.color.blue};
        background:#ffffff;
    }
    .img{
        @media(min-width:992px){
            margin:0 auto 0 0;
        }
    }
`;

function Accept() {
    return (
        <Wrapper>
            <div className="inner">
                <Heading>Accept the fastest <br /> and most secure <br /> ways to pay.</Heading>
                <Paragraph>Take payments quickly and confidently knowing every sale is securely encrypted. Pay one flat rate for every tap, dip, or swipe: 2.6% + 10¢. Get your funds as fast as the next business day.</Paragraph>
                <Button>Payment processing options</Button>
            </div>
            <Image middle imageSrc="accept.png">
                <img className="topleft" src="./images/topleft.png" alt="" />
                <img className="right" src="./images/right.png" alt="" />
                <img className="bottom" src="./images/bottom.png" alt="" />
            </Image>
        </Wrapper>
    )
}

export default Accept
