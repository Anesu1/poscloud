import styled from "styled-components";

const Wrapper = styled.h2`
  font-family: ${(props) => props.theme.fam.montb};
  font-weight: 900;
  font-size: 30px;
  line-height: 35px;
  color:${props => props.theme.color.txtblack};
  span{
    color:${props => props.theme.color.blue};
  }
  @media(min-width:992px){
      font-size:35px;
  }
`;

function Heading({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Heading;
