import styled from 'styled-components';
import Header from './Header';

const Wrapper = styled.section`
    background:#4b4b4b;
    height:100vh;
    width:100%;
    display:flex;
    align-items:center;
    justify-content: center;
    @media(min-width:768px){
        height:660px;
    }
    @media(min-wdith:1200px){
        height:100vh;
    }
    img{
        width:100px;
    }
    .box{
        padding:5%;
    }
    h1{
        font-size:40px;
        @media(min-width:992px){
        width:60%;
        font-size:50px;
    }
    }
`

function Banner() {
    return (
        <Wrapper>
             <Header />
            <div className="box">
                <div className="inner">
                    <h1>One of the leading financial technology companies in Sub-Saharan Africa.</h1>
                    
                </div>
            </div>
        </Wrapper>
    )
}

export default Banner
