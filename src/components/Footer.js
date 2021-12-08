import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import styled from "styled-components";
import Paragraph from "../styled/Paragraph";

const Wrapper = styled.footer`
  background: #000000;
  padding: 5%;
  color: #ffffff;
  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .footer-inner {
    img {
      width: 100%;
      max-width: 400px;
    }
    p,
    a {
      text-decoration: none;
      color: #ffffff;
      font-family:${props => props.theme.fam.mont};
      display: block;
      padding: 10px 0;
      font-size: 15px;
      margin-bottom:0;
    }
    @media (min-width: 992px) {
      width: 25%;
    }
    &:nth-child(2) {
      @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        .inner {
          width: 30%;
          &:first-child{
            width:40%;
            .item{
              width:50%;
            }
          }
        }
      }
      @media (min-width: 992px) {
        width: 70%;
      }
      .inner {
        display: flex;
        flex-wrap: wrap;
        p{
          width:max-content;
        }
        &:nth-child(2) {
          .item {
            width: 100%;
          }
        }
        h3 {
          width: 100%;
          font-family:${props => props.theme.fam.mont};
          padding-top:50px;
          font-weight:900;
        }
        .item {
          width: 30%;
        }
      }
    }
  }
  p {
    font-weight: 500;
    font-size: 15px;
    margin-top:0;
    font-family:${props => props.theme.fam.mont};
    color: #ffffff;
  }
  .icons {
    display: flex;
    margin: 30px 0;
    a {
      text-decoration: none;
      color: #ffffff;
      display: flex;
      height: 40px;
      align-items: center;
      justify-content: center;
      width: 40px;
      border: 2px solid #ffffff;
      margin-right: 10px;
      @media(min-width:992px){
        height:30px;
        width:30px;
      }
      svg {
        height: 20px;
        width: 20px;
        @media(min-width:992px){
        height:20px;
        width:20px;
      }
      }
    }
  }
  .bottom {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        max-width: unset;
        width: max-content;
        margin: 0;
        
      }
      
    }
    a{
          text-decoration:none;
          color:#ffffff;
        }
    @media (min-width: 992px) {
      justify-content: unset;
      width: 100%;
      .icons {
        width: 30%;
      }
    }
  }
`;

function Footer() {
  return (
    <Wrapper>
      <div className="footer-inner">
        <img src="./images/logo1.png" alt="" />
        <Paragraph>
          One of the leading financial technology companies in Sub-Saharan
          Africa.
        </Paragraph>
      </div>
      <div className="footer-inner">
        <div className="inner">
          <h3>Quick Links</h3>
          <div className="item">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Our Services</Link>
          </div>
          <div className="item">
            <Link to="/devices">Our Devices</Link>
            <Link to="/helpdesk">HelpDesk</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="inner">
          <h3>Our Address</h3>
          <div className="item">
            <p>Block A, Smatsatsa Park,</p>
            <p>Borrowdale,</p>
            <p>Harare, Zimbabwe</p>
          </div>
        </div>
        <div className="inner">
          <h3>Get in touch</h3>
          <div className="item">
            <p>+263 242 254605 </p>
            <p>+253 242 720961</p>
            <p>info@poscloud.co.zw</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <Link to="/">
            <FaFacebookF />
          </Link>
          <Link to="/">
            <FaLinkedinIn />
          </Link>
          <Link to="/">
            <FaInstagram />
          </Link>
          <Link to="/">
            <FaTwitter />
          </Link>
        </div>
        <Paragraph>
          © 2021 | PosCloud | All Rights Reserved. Developed by <a href="https://business.facebook.com/revixions/">Revixions</a>
        </Paragraph>
      </div>
    </Wrapper>
  );
}

export default Footer;
