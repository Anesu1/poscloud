import styled from 'styled-components';
import Button from '../styled/Button';
import Heading from '../styled/Heading';

const Wrapper = styled.section`
    background-color:${props => props.theme.color.blue};
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:20% 5%;
    @media(min-width:768px){
        padding:10% 5% ;
    }
    h2{
        color:#ffffff;
        text-align:center;
    }
    button{
        background:#ffffff;
        color: ${props => props.theme.color.blue};
        margin-top:30px;
    }
`;

function StartSelling() {
    return (
        <Wrapper>
            <Heading>Start Selling With Us.</Heading>
            <Button>Get In Touch With us</Button>
        </Wrapper>
    )
}

export default StartSelling
