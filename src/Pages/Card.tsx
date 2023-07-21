import React from "react";
import styled from "styled-components";
import img1 from "../Assets/pexels-anastasiya-gepp-1462630.jpg"
import img2 from "../Assets/pexels-andrea-piacquadio-3793238.jpg"
import img3 from "../Assets/pexels-tam-hoang-1007066.jpg"

const Card = () => {
  return (
    <Container>
      <Main>
        <Pic>
            <Pics src={img1}/>
            <Pics src={img2}/>
            <Pics src={img3}/>
        </Pic>
       
      </Main>
    </Container>
  );
};

export default Card;

const Pics =styled.img`
    width: 300px;
    height: 90%;
    margin: 10px 20px;
    background-color: gold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    object-fit: cover;
`

const Pic = styled.div`
width: 90%;
height: 100%;
display: flex;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
  flex-wrap: wrap;
`;
