import { styled } from "styled-components";

export const HomeDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 500px;
  background: #235390;
  gap: 200px;
`;
export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 70%;
  h1 {
    color: #fff;
    text-align: center;
    font-family: sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 125% */
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background: #58cc02;
    box-shadow: 0px 4px 0px 0px #58a700;
    padding: 0 100px;
    height: 46px;

    cursor: pointer;
    color: #fff;
    text-align: center;
    font-family: sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 138.462% */
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }
  button {
    cursor: pointer;
    padding: 0 80px;
    height: 48px;
    border-radius: 16px;
    border: 2px solid #042c60;
    background: #235390;
    box-shadow: 0px 2px 0px 0px #042c60;
    margin-top: 20px;
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 138.462% */
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }
`;
export const LanguageCarousel = styled.div`
  display: flex;
  width: 100%;
  height: 74px;
  justify-content: space-evenly;
  align-items: center;
  background: #0a4a82;
  gap: 22px;
  p {
    color: #fff;
    font-family: sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 153.846% */
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }
`;
export const Worldbest = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 187px;
  align-items: flex-start;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px 40px 40px 64px;
    align-items: center;
    gap: 48px;
  }
  h1 {
    color: #3c3c3c;
    font-family: sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 118.182% */
  }
  span {
    color: #777;
    font-family: sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 25.5px; /* 170% */
  }
  h2 {
    color: #1cb0f6;
    font-family: sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 153.846% */
    letter-spacing: 0.8px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;
export const Linediv = styled.div`
  border-bottom: 2px solid #e5e5e5;
  height: 2px;
  width: 70%;
  margin-top: 20px;
`;
export const Learning = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0px 187.5px;
`;
export const Features = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 48px;
  padding: 0 218px;
  div {
    display: flex;
    padding-top: 48px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex: 1;
  }
  p {
    color: #777;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 23.8px; /* 170% */
  }
  h1 {
    color: #3c3c3c;
    font-family: sans-serif;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 123.81% */
  }
`;
export const Effective = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  h1 {
    color: #3c3c3c;
    font-family: sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 117.647% */
  }
`;
export const LearnAnything = styled.div`
  display: inline-flex;
  padding: 0px 187.5px;
  align-items: flex-start;
  
  div {
    align-items: start;
    gap: 48px;
    padding: 40px;
  }
  h1 {
    color: #3c3c3c;
    font-family: sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 118.182% */
  }
  span {
    color: #777;
    font-family: sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 25.5px; /* 150% */
  }
  h3{
    color: rgba(28, 176, 246, 1);
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: 20px; /* 153.846% */
letter-spacing: 0.8px;
text-transform: uppercase;
cursor: pointer;
  }
`;
export const Buttondiv = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    border: 2px solid #e5e5e5;
    background: #fff;
    box-shadow: 0px 2px 0px 0px #e5e5e5;
    cursor: pointer;
  }

`;
export const Footer=styled.div`
display: flex;
flex-direction: column;
height: fit-content;
width: 100%;
padding: 5.5px 19.1px 6.5px 34px;
justify-content: flex-end;
align-items: center;
background-color:  #235390;
`
export const Writings=styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 40px;
margin-top: 50px;
h1{
  color: #FFF;
text-align: center;
font-family: sans-serif;
font-size: 29px;
font-style: normal;
font-weight: 700;
line-height: 40px; /* 137.931% */
}
button{
  cursor: pointer;
  color: #FFF;
text-align: center;
font-family: sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: 18px; /* 138.462% */
letter-spacing: 0.8px;
text-transform: uppercase;
  /* width: 150px; */
height: 46px;
padding: 0 40px;
  border-radius: 16px;
background: #58CC02;
box-shadow: 0px 4px 0px 0px #58A700;
}
`

export const MoreInfos=styled.div`
display: inline-flex;
padding: 24px 40px;
align-items: flex-start;
gap: 33.75px;
margin-top: 50px;
div{
  display: flex;
padding: 0px 24px 291px 0px;
flex-direction: column;
align-items: flex-start;
gap: 11px;
}
h1{
  color: #FFF;
font-family: sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 20px; /* 125% */
}
p{
  color: rgba(255, 255, 255, 0.50);
font-family: sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: 22.5px; /* 173.077% */
}
p:hover{
  cursor: pointer;
  color: black;
}
span{
  color: rgba(255, 255, 255, 0.50);
font-family: monospace;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: 22.5px; /* 173.077% */
cursor: pointer;
}
`