import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Main>
        <Logo>Juliment</Logo>
        <Navs>
          <Nav to="">Language</Nav>
          <Nav to="">Courses</Nav>
          <Nav to="">Guides</Nav>
          <Nav to="">Category</Nav>
          <Nav to="/dictionary">Dictionary</Nav>
        </Navs>
<Link to="/register" style={{textDecoration:"none" , color:"black"}}>
     <Botton>Get Started</Botton>
</Link>
     
      </Main>
    </Container>
  );
};

export default Header;

const Botton = styled.button`
width: 100px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
outline: none;
border: 1px solid;
border-radius: 10px 0px 10px 0px;
transition: all 400ms;
color: black;

:hover{
    cursor: pointer;
}
`;

const Nav = styled(Link)`
 margin: 0px 10px;
 text-decoration: none;
 color: white;
  cursor: pointer;
`;

const Navs = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: white;
  display: flex;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 600;
  color:white;
  cursor: pointer;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0000FF;
`;
