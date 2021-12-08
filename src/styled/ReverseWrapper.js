import styled from "styled-components";

const SectionWrapper = styled.section`
  padding: 5%;
  display: flex;
  flex-direction: column-reverse;
  @media(min-width:768px){
        flex-direction:row;
        justify-content: space-between;
    }
    @media (min-width: 992px) {
     padding:5% 7%;
      
    }
    .inner{
        @media(min-width:768px){
        width:55%;
        margin:auto 0;
    }
    @media (min-width: 992px) {
      width: 47%;
      
    }
    }
`;

function ReverseWrapper({ children }) {
  return <SectionWrapper>{children}</SectionWrapper>;
}

export default ReverseWrapper;
