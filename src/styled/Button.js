import styled from "styled-components";

const Wrapper = styled.button`
  background: ${(props) => props.theme.color.blue};
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-family: ${(props) => props.theme.fam.avenir};
  font-weight: 600;
  font-size: 14px;
  height: 40px;
  padding: 0 10px;
  width: 280px;
  line-height: 22px;
`;

function Button({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Button;
