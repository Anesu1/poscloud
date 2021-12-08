import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {useState} from 'react';

const Wrapper = styled.header`
    position:absolute;
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items:center;
    top:0%;
    @media(min-width:768px){
       width:95%;
       margin:0 auto;
    }
    .img{
        margin:20px;
        width:150px;
        @media(min-width:768px){
            width:250px;
            margin:10px;
        }
        img{
            width:100%;
         }
    }
    ul{
        position:absolute;
        top:0;
        right:0;
        overflow:hidden;
        width:100%;
        height:100vh;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme.color.blue};
        max-width:0;
    transition:0.7s;
    @media(min-width:768px){
        background:transparent;
        flex-direction: row;
        max-width:unset;
        psition:unset;
        width:max-content;
        height:100%;

        align-items:center;
    }
        li{
            a{
                display:block;
                text-decoration:none;
                color:#ffffff;
                font-family:${props => props.theme.fam.mont};
                padding:20px;
                font-weight:bold;

                @media(min-width:768px){
            font-size:20px;
    }
            }
        }
    }
    .change{
      max-width:100%;
      
  }
    .hamburger {
    position: absolute;
    padding: 30px 27px 27px 28px;
    right: 5%;
    top: 11px;
    z-index: 9;
    @media(min-width:768px){
        display:none;
    }
    span {
      width: 20px;
      height: 7px;
      background: #ffffff;
      position: absolute;
      border-radius: 2px;
      transition: 0.7s;
      &:before {
        width: 200%;
        height: 100%;
        background: #ffffff;
        content: "";
        position: absolute;
        top: -12px;
        right: 0%;
        border-radius: 2px;
        transition: 0.7s;
      }
      &:after {
        width: 200%;
        height: 100%;
        background: #ffffff;
        content: "";
        position: absolute;
        top: 12px;
        right: 0%;
        border-radius: 2px;
        transition: 0.7s;
      }
    }
  }
  .open{
      span{
          
          transform:translateX(-20px);
          &:before{
            transform:translateX(20px);
            
          }
          &:after{
            transform:translateX(20px);
            
          }
      }
  }
`;

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <Wrapper>
            <div className="img">
                 <img src="./images/logo1.png" alt="" />
            </div>
           
            <div  className={open ? 'hamburger open': 'hamburger'} onClick={()=> setOpen(!open)} >
                <span></span>
            </div>
            <ul className={open ? 'change' : ''}>
                <li onClick={()=> setOpen(false)}>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/devices">Devices</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Header
