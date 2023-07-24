import React, {  useEffect, useState } from "react";
import styled from "styled-components";
// import { dictionaryPost } from "../../Utils/AUthApi";
import axios from "axios"

const Dictionary = () => {

  const [text,SetText] = useState<string>("")
  const [data,Setdata] = useState<any>([])

  const Data = async(text:any)=>{
    await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`).then((res:any)=>{
 return Setdata(res.data)
    
     }).catch((res:any)=>{
        return res.data
     })
  }
  console.log(data)

  useEffect(() => {
    Data(text)
    }, )

  

  return (
    <Container>
      <Main>
        <Up>
           <Input placeholder="input a word" onChange={(e:any)=>{
   SetText(e.target.value)
          }}/>
          <Search onClick={()=>{
          Data(text)
          }}>search</Search>
        </Up>
        <Down>
      {
        Array.isArray(data) ? ( 
          data?.map((props:any)=>(
            <>
               <h3 style={{fontSize:"30px",fontFamily:"poppins",margin:"0"}}>{props?.word}</h3>
          <Icon>
              {/* <FcSpeaker size={30}/> */}
              <audio src={props?.phonetics[0]?.audio} controls   preload="auto" ></audio>
            </Icon>
            <Divs>
              <Tran>{props?.phonetic}</Tran>
            </Divs>
            <Mean>
         {props?.meanings[0]?.definitions[0]?.definition}
            </Mean>
            <Part> {props?.meanings[0]?.partOfSpeech}</Part>
            <Examples> {props?.meanings[0]?.definitions[0]?.example}</Examples>
            </>
          ))
         ):<>loading....</>
      }
        </Down>
      </Main>
    </Container>
  );
};

export default Dictionary;

const Examples =styled.div`
font-size: 15px;
margin-left: 30px;
`

const Part =styled.div``

const Icon =styled.div`
margin-top: 10px;
`

const Mean = styled.div`
  font-weight: 500;
  margin: 20px 0px;
`

const Tran = styled.div`
  margin-left: 20px;
`;


const Divs = styled.div`
  display: flex;
  margin: 10px 0px;
`;

const Down = styled.div`
  width: 700px;
  height: 75vh;
  margin-top: 20px;
  background-color: white;
  color: white;
  padding: 10px 10px;
  color: black;
  overflow: hidden;
  overflow-y: scroll;
  background-color: #e7e7e7;
  border-radius: 10px;

::-webkit-scrollbar {
  width: 10px;
  height :20px ;
}

::-webkit-scrollbar-thumb {
  background-color: #888; 
  border-radius: 5px; 
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555; 
}

`;

const Search = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid;
  outline: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  margin-left: 10px;
  font-size: 18px;
  transition: all 400ms;
  :hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 500px;
  height: 30px;
  outline: none;
  border-radius: 20px;
  padding-left: 20px;
  border: 1px solid;
`;

const Up = styled.div`
  width: 700px;
  height: 40px;
  color: white;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div``;

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;
