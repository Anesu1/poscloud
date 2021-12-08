import styled from "styled-components";

const Wrapper = styled.p`
  font-family: ${(props) => props.theme.fam.mont};
  font-weight: 500;
  font-size: 15px;
  line-height: 1.3;
  color: ${(props) => props.theme.color.grey};
  max-width:370px;
  margin-bottom:30px;
`;

function Paragraph({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Paragraph;
