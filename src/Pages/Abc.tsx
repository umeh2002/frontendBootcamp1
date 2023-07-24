import React from "react";
import styled from "styled-components";
import img from "../Assets/pexels-magda-ehlers-1337386.jpg"

const Abc = () => {
  return (
    <Container>
      <Main>
        <Right>
          <Button>LEARN MORE ABOUT ABC</Button>
          <Title>Lorem ipsum dolor sit amet.</Title>
          <Txt>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            harum voluptatibus aspernatur id eos quisquam excepturi pariatur
            laboriosam, eum sit.
          </Txt>
        </Right>
        <Left src={img}/>
      </Main>
    </Container>
  );
};

export default Abc;

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

  :hover {
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

const Left = styled.img`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  width: 45%;
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
  /* @media screen and (min-width: 320px){
    display: flex;
    flex-direction: column;
  } */
`;

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  flex-wrap: wrap;
`;
