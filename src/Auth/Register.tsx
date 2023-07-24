import React from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
// import reg from "../Assets/register.jpg";

const Register = () => {
  return (
    <Container>
      <Main>
        <Left>
          <Title>Create an account</Title>
          <Divs>
            <Divs4 style={{ display: "flex", alignItems: "center" }}>
              <Icon />
              <Google>Sign up with google</Google>
            </Divs4>

            <Divs5 style={{ display: "flex", alignItems: "center" }}>
              <Icon1 />
              <Face>Sign up with facebook</Face>
            </Divs5>
          </Divs>
          <Divs1>
            <div style={{ display: "flex" }}>
              <div>
                <Nam>Name</Nam>
                <Input placeholder="enter your name" />
              </div>
              <div>
                <Nam style={{ marginLeft: "10px" }}>Password</Nam>
                <Input placeholder="enter your password" type="password" />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <Nam>Confirm</Nam>
                <Input placeholder="confirm password" type="password" />
              </div>
              <div>
                <Nam style={{ marginLeft: "10px" }}>Email</Nam>
                <Input placeholder="enter your email" />
              </div>
            </div>
          </Divs1>
          <Divs3>
            <input type="checkbox" />
            <Txt>
              I agree to <span>Term</span> and <span>Policies</span>
            </Txt>
          </Divs3>
          <Button>Sign Up</Button>
          <Txt2>
            Have an account ?: <span>Sign In</span>
          </Txt2>
        </Left>
      </Main>
    </Container>
  );
};

export default Register;

const Icon1 = styled(FaFacebookF)`
  font-size: 20px;
  margin-right: 5px;
`;

const Icon = styled(FcGoogle)`
  font-size: 20px;
  margin-right: 5px;
`;

const Txt2 = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin: 10px 0px;

  span {
    font-weight: 700;
    color: blue;
    font-size: 15px;
    cursor: pointer;
  }
`;

const Button = styled.button`
  margin: 10px 0px;
  width: 120px;
  height: 40px;
  background-color: dodgerblue;
  border: 1px solid;
  border-radius: 10px;
  outline: none;
  transition: all 400ms;

  :hover {
    cursor: pointer;
  }
`;

const Txt = styled.div`
  font-size: 13px;
  margin-left: 5px;

  span {
    font-weight: 700;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Divs3 = styled.div`
  display: flex;
  align-items: center;

  input {
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  outline: none;
  border: 1px solid silver;
  border-radius: 10px;
  padding-left: 10px;
  margin-bottom: 5px;
  margin-right: 20px;
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

const Divs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin: 20px 0px;
`;

const Google = styled.div`
  font-size: 13px;
`;

const Divs5 = styled.div`
  width: 210px;
  height: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid silver;
  outline: none;
  margin-right: 10px;
  font-weight: 700;
  transition: all 400ms;

  :hover {
    cursor: pointer;
  }
`;

const Divs4 = styled.div`
  width: 200px;
  height: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid silver;
  outline: none;
  margin-right: 30px;
  font-weight: 700;
  transition: all 400ms;

  :hover {
    cursor: pointer;
  }
`;

const Face = styled.div`
  font-size: 13px;
`;

const Left = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


const Main = styled.div`
  width: 50%;
  height: 80vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  border-radius: 10px;
  border: 1px solid;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
`;
