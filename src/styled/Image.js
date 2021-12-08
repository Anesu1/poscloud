import styled from 'styled-components';

const Wrapper = styled.div`
    width:100%;
    margin:0 auto;
    max-width:400px;
    position:relative;
    @media(min-width:568px){
        margin-right:auto;
        margin-left:0;
    }
    
        @media(min-width:768px){
        width:40%;
        margin:auto 0;
    }
    img{
        width:100%;
    }
    .right,.bottom,.topleft{
        display: none;
        @media(min-width:992px){
            display: block;
            position:absolute;
        }
    }
    .topleft{
        @media(min-width:992px){
           top:10%;
           width:150px;
           left:-25%;
        }
    }
    .bottom{
        @media(min-width:992px){
            top:60%;
           width:150px;
           left:-25%;
        }
    }
    .right{
        @media(min-width:992px){
            top:40%;
           width:150px;
           right:-10%;
        }
        @media(min-width:992px){
            right:-25%;
        }
    }
    
`;

function Image({children,imageSrc }) {
    return (
        <Wrapper className="img">
            <img src={`images/${imageSrc}`} alt="" />
            {children}
        </Wrapper>
    )
}

export default Image
