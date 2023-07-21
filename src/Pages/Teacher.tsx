import React from 'react'
import styled from 'styled-components'
import img from "../Assets/e-learning2.png"
import {AiOutlineArrowRight} from "react-icons/ai"
import {AiOutlineCheck} from "react-icons/ai"
import { Link } from 'react-router-dom'

const Teacher = () => {
  return (
    <Container>
        <Main>
            <Left src={img}/>
            <Right>
                <Title>Lorem, ipsum dolor.</Title>
                <Divs>
                    <Icon><AiOutlineCheck size={25}/></Icon>
                    <Txt>Lorem ipsum dolor sit amet consectetur adipisicing.</Txt>
                </Divs>
                <Divs>
                    <Icon><AiOutlineCheck size={25}/></Icon>
                    <Txt>Lorem ipsum dolor sit amet consectetur adipisicing.</Txt>
                </Divs>
                <Divs>
                    <Icon><AiOutlineCheck size={25}/></Icon>
                    <Txt>Lorem ipsum dolor sit amet consectetur adipisicing.</Txt>
                </Divs>

                <Bottom>
                    <Icon1><AiOutlineArrowRight size={20}/></Icon1>
                    <Link to="/teacher-auth" style={{textDecoration:"none", color:"white"}}>
                    <Botton>Register as a teacher</Botton>
                    </Link>
                   
                </Bottom>
            </Right>
        </Main>
    </Container>
  )
}

export default Teacher

const Botton =styled.div`
width: 200px;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
padding-left: 10px;
outline: none;
border-radius: 10px;
background-color: transparent;
transition: all 400ms;
color: white;
position: absolute;
right: 440px;
transition: all 400ms;

:hover{
    cursor: pointer;
    background-color: #00FFFF;
    color: black;
}
`

const Icon1 =styled.div`
width: 35px;
height: 35px;
border-radius: 50%;
background-color: #00FFFF;
display: flex;
justify-content: center;
align-items: center;
position: relative;
color: black;
transition: all 350ms;
:hover{
    color: black;
}
`

const Bottom =styled.div`
margin-top: 40px;
display: flex;
margin-left: 20px;


`

const Txt=styled.div`
margin: 0px 10px;
margin-top: 20px;
`

const Icon=styled.div`
display: flex;
margin-top: 20px;
`

const Divs=styled.div`
display: flex;
margin-left: 20px;
`

const Title=styled.div`
font-size: 25px;
font-weight: 500;
margin: 20px 20px;
`

const Right =styled.div`
width: 50%;
height: 100%;
background-color: #00002B;
color: white;
`

const Left =styled.img`
width: 50%;
height: 100%;
object-fit: cover;
border-radius: 5px;
background-color: red;
`

const Main =styled.div`
width: 70%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`

const Container =styled.div`
width: 100%;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
flex-wrap: wrap;
`