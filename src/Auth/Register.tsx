import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUser } from "../Utils/AUthApi";

const Register = () => {
  const nagivate = useNavigate();

  const model = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(model) });

  const onSubmt = handleSubmit(async (res: any) => {
    const { name, password, confirm, email } = res;
    createUser({ name, password, confirm, email }).then(() => {
      nagivate("/sidn-in");
    });
  });

  return (
    <Container>
      <Main>
        <Card onSubmit={onSubmt} >
          <Title>Create New Account</Title>
          <Holder>
            <Nam>name</Nam>
            <Input placeholder="User name" {...register("name")} />
            {errors.name && <Err>enter name</Err>}
            <Nam>password</Nam>
            <Input placeholder="Password" type="password"{...register("password")} />
            {errors.password && <Err>enter password</Err>}
            <Nam>confirm</Nam>
            <Input placeholder="Re-type password" type="password"{...register("confirm")} />
            {errors.confirm && <Err>enter confirm</Err>}
            <Nam>email</Nam>
            <Input placeholder="Email" {...register("email")} />
            {errors.email && <Err>enter email</Err>}
          </Holder>
          <Txt>
            By signing you agree to our <span>Term</span> and
            <span> Private Policy</span>
          </Txt>
          <Link
            to="/sign-in"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Botton type="submit">Sign up</Botton>
          </Link>
          <Tst>
            <Txt1>Already have an account ?</Txt1>
            <Link
              to="/sign-in"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Txt2>Sign in</Txt2>
            </Link>
          </Tst>
        </Card>
      </Main>
    </Container>
  );
};

export default Register;


const Nam =styled.div`
margin-top: 5px;
font-size: 18px;

`

const Err = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  color: red;
  margin: 0px 20px;
`;

const Txt2 = styled.div`
  font-size: 20px;
  margin-left: 10px;
  margin-bottom: 3px;
  font-weight: 500;
  transition: all 400ms;

  :hover {
    cursor: pointer;
  }
`;

const Txt1 = styled.div`
  font-size: 15px;
  font-weight: 400;
`;

const Tst = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;

const Botton = styled.button`
  width: 90%;
  height: 30px;
  border: 1px solid black;
  border-radius: 10px;
  outline: none;
  display: flex;
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

const Txt = styled.div`
  padding: 10px;
  font-weight: 400;
  font-size: 15px;
  span {
    font-weight: 700;
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 270px;
  height: 30px;
  border-radius: 5px;
  margin-top: 5px;
  padding-left: 10px;
  outline: none;
  border: 1px solid;
  ::placeholder {
    font-size: 15px;
    color: gray;
  }
`;

const Holder = styled.div`
  margin-left: 5px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin: 10px 0px;
`;

const Card = styled.form`
  width: 300px;
  min-height: 200px;
  border: 1px solid dodgerblue;
  border-radius: 10px;
  padding: 0px 10px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
`;
