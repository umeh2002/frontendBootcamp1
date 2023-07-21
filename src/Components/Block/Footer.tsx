import React from "react";
import styled from "styled-components";
import {AiFillFacebook} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"

const Footer = () => {
  return (
    <Container>
      <Main>
        <Divs>
          <Logo>Juliment</Logo>
          <Social>
            <Icon1><AiFillFacebook size={30}/></Icon1>
            <Icon2><BsWhatsapp size={30}/></Icon2>
            <Icon3><BsTwitter size={30}/></Icon3>
            <Icon4><BsInstagram size={30}/></Icon4>
          </Social>
        </Divs>
        <Divs>
          <Title>Language</Title>
          <Nav>Lorem, ipsum.</Nav>
          <Nav>Lorem, ipsum.</Nav>
          <Nav>Lorem, ipsum.</Nav>
        </Divs>
        <Divs>
          <Title>Courses</Title>
          <Nav>Lorem, ipsum.</Nav>
          <Nav>Lorem, ipsum.</Nav>
          <Nav>Lorem, ipsum.</Nav>
        </Divs>
        <Divs>
          <Title>Guides</Title>
          <Nav>Lorem, ipsum.</Nav>
          <Nav>Lorem, ipsum.</Nav>
          <Nav>Lorem, ipsum.</Nav>
        </Divs>
        <Divs>
          <Title>Category</Title>
          <Nav>Lorem, ipsum.</Nav>
          <Nav>Lorem, ipsum.</Nav>
          <Nav>Lorem, ipsum.</Nav>
        </Divs>
        <Divs>
          <Title>Dictionary</Title>
          <Nav>Lorem, ipsum.</Nav>
          <Nav>Lorem, ipsum.</Nav>
          <Nav>Lorem, ipsum.</Nav>
        </Divs>
      </Main>
    </Container>
  );
};

export default Footer;

const Icon4 =styled.div`
margin-right: 20px;
cursor: pointer;
`

const Icon3 =styled.div`
margin-right: 20px;
cursor: pointer;
`

const Icon2 =styled.div`
margin-right: 20px;
cursor: pointer;
`

const Icon1 =styled.div`
margin-right: 20px;
cursor: pointer;
`

const Nav = styled.div`
font-size: 15px;
margin-top: 10px;
transition: al 400ms;

:hover{
  cursor: pointer;
}
`;

const Title = styled.div`
margin-bottom: 20px;
font-weight: 700;
transition: al 400ms;

:hover{
  cursor: pointer;
}
`;

const Social = styled.div`
display: flex;
margin: 10px 0px;
display: flex;
justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  margin-top: 100px;
`;

const Divs = styled.div`
 margin-top: 20px;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
