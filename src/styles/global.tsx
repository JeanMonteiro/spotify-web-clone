import { createGlobalStyle } from "styled-components";
import px2vw from "src/utils/px2vw";

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus{
    outline:0;
  }
  html, body, #root{
    height:100%;
    background: #111211;
    color: #b2b3b2;
  }
  body{
    -webkit-font-smoothing: antialiased;
  }
  body, input, button{
    font: 14px 'Roboto', sans-serif;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  button{
     cursor: pointer;
  }
  .title{
    background-color: '#fff'
  }

  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }

  .control-button-circled{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 500px;
    border: 1px solid hsla(0,0%,100%,.6);
  }

  .ball { 
  background-color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  transition-timing-function: linear;
  transition-property: margin;
  transition-duration: 1s;
  margin: 0 10px 0 0;

  }

  .move {
    margin: 0px 50px 0 0;
  }
`;
