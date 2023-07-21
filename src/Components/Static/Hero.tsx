import React from "react";
import styled from "styled-components";
import img from "../../Assets/woman.jpeg"
const Hero = () => {
  return (
    <Container>
      <Main>
        <Big>Lorem ipsum dolor sit amet consectetur.</Big>
        <Small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Eum molestiae
          itaque at omnis repellat iure aspernatur porro id dolor rem.
        </Small>
        <Botton>Book session</Botton>
      </Main>
    </Container>
  );
};

export default Hero;

const Botton = styled.button`
  width: 170px;
  height: 40px;
  border: 1px solid black;
  border-radius: 20px;
  outline: none;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  transition: all 400ms;
  margin: 20px 0px;
  margin-left: 15px;

  :hover {
    cursor: pointer;
  }
`;

const Big = styled.div`
font-size: 30px;
font-weight: 600;
color: white;
`;

const Small = styled.div`
font-size: 20px;
font-weight: 500;
margin: 20px 0px;
color: white;
text-align: center;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #232822;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
`;
