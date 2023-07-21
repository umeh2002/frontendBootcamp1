import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signIn } from "../Utils/AUthApi";
import { useDispatch } from "react-redux";
import { signInUser } from "../Global/authGlobal";

const Signin = () => {
  const nagivate = useNavigate();
  const dispatch = useDispatch();

  const model = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(model) });

  const onSubmit = handleSubmit(async (res: any) => {
    signIn(res).then((res: any) => {
      console.log(res)
      dispatch(signInUser(res));
      nagivate("/");
    });
  });
  return (
    <Container>
      <Main>
        <Card onSubmit={onSubmit}>
          <Title>Sign In</Title>
          <Holder>
            <Nam>email</Nam>
            <Input placeholder="Email" {...register("email")} />
            {errors.email && <Err>enter email</Err>}
            <Nam>password</Nam>
            <Input placeholder="Password" type="password"{...register("password")} />
            {errors.password && <Err>enter password</Err>}
          </Holder>

            <Botton type="submit">Sign in</Botton>
          <Tst>
            <Txt1>Don't have an account ?</Txt1>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Txt2>Sign up</Txt2>
            </Link>
          </Tst>
        </Card>
      </Main>
    </Container>
  );
};

export default Signin;

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

// const Txt =styled.div`
// padding: 10px;
// font-weight: 400;
// font-size: 15px;
// span{
//   font-weight: 700;
//   cursor: pointer;
// }
// `

const Input = styled.input`
  width: 270px;
  height: 30px;
  border-radius: 5px;
  margin-top: 10px;
  padding-left: 10px;
  border: 1px solid;
  outline: none;
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
  font-size: 25px;
  font-weight: 700;
  margin: 10px 0px;
`;

const Card = styled.form`
  width: 300px;
  min-height: 200px;
  border: 1px solid black;
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
