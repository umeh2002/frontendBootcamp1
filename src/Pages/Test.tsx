import React from 'react'
import styled from 'styled-components';
import img from "../Assets/pexels-pixabay-207756.jpg"

const Test = () => {
  return (
    <Container>
    <Main>
      <Right src={img}/>
      <Left>
      
        <Title>Lorem ipsum dolor sit amet.</Title>
        <Txt>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          harum voluptatibus aspernatur id eos quisquam excepturi pariatur
          laboriosam, eum sit.
        </Txt>
        <Button>CERTIFY YOUR ENGLISH</Button>
      </Left>
    </Main>
  </Container>
  )
}

export default Test


const Button = styled.button`
width: 250px;
height: 40px;
border: 1px solid silver;
color: dodgerblue;
outline: none;
border-radius: 20px;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
font-weight: 500;

:hover{
    cursor: pointer;
    background-color: lightgrey;
}
`;

const Txt = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;
  line-height: 30px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
`;

const Left = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Right = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
`;

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;

`;