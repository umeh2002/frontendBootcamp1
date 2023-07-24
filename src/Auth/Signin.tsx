import React from "react";
import styled from "styled-components";
import sign from "../Assets/sign.jpg"

const Signin = () => {
  return (
    <Container>
      <Main>
        <Right>
          <img src={sign} alt="" />
        </Right>
        <Left>
          <Title>Welcome back</Title>
          <Divs1>
            <Nam>Email</Nam>
            <Input placeholder="enter your email" />

            <Nam>Password</Nam>
            <Input placeholder="enter your password" type="pasword"/>
          </Divs1>
          <Button>Sign In</Button>
          <Txt2>Don't have an account ?: <span>Sign Up</span></Txt2>
        </Left>
      </Main>
    </Container>
  );
};

export default Signin;

const Txt2 =styled.div`
  font-size: 13px;
  font-weight: 500;
  margin: 10px 0px;

  span{
    font-weight: 700;
    color: blue;
    font-size: 15px;
    cursor: pointer;
  }
`

const Button =styled.button`
margin: 10px 0px;
width: 90%;
height: 30px;
background-color: dodgerblue;
border: 1px solid;
border-radius: 10px;
outline: none;
transition: all 400ms;

:hover{
  cursor: pointer;
}
`



const Input = styled.input`
  width: 300px;
  height: 30px;
  outline: none;
  border: 1px solid silver;
  border-radius: 10px;
  padding-left: 10px;
  margin-bottom: 5px;
  ::placeholder {
    font-size: 13px;
    color: grey;
  }
`;

const Nam = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin: 5px 0px;
`;

const Divs1 = styled.div`
  margin: 20px 0px;
`;


const Title = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  margin: 20px 0px;
`;


const Left = styled.div`
  width: 50%;
  height: 100%;
`;

const Right = styled.div`
  width: 50%;
  height: 50vh;
  display: flex;
  align-items: center;
  padding: 10px 0px;

  img{
    height: 50vh;
    width: 90%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const Main = styled.div`
  width: 700px;
  min-height: 300px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  border: 1px solid white;
  border-radius: 10px;
  padding-right: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
`;
