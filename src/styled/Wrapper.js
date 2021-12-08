import styled from "styled-components";

const SectionWrapper = styled.section`
  padding: 5%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 992px) {
     padding:5% 7%;
    }
    
  .inner {
    @media (min-width: 768px) {
      width: 55%;
      margin:auto 0;
    }
    @media (min-width: 992px) {
      width: 47%;
    }
  }
  .contact-inner{
    @media(min-width:768px){
      width:45%;
      margin:auto 0;
    }
    @media(min-width:992px){
      width:40%;
    }
  }
  ul {
    font-family: ${(props) => props.theme.fam.mont};
    font-weight: 500;
    font-size: 15px;
    line-height: 1.3;
    color: ${(props) => props.theme.color.grey};
    list-style: disc;
    margin-left: 20px;
    margin-bottom: 30px;
  }
`;

function Wrapper({ children }) {
  return <SectionWrapper>{children}</SectionWrapper>;
}

export default Wrapper;
