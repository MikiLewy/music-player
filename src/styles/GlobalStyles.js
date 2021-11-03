import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width:thin;
    scrollbar-color:rgba(155,155,155,0.5) transparent;
}
*::-webkit-scrollbar{
    width: 5px;
}
*::-webkit-scrollbar-track{
    background:transparent;
}
*::-webkit-scrollbar-thumb{
    background-color:rgba(155,155,155,0.5);
    border-radius: 20px;
    border:transparent;
}
body{
    font-family: 'Lato', sans-serif;
}
h3,h4{
    font-weight:400;
    color: rgb(100,100,100);
}
h1,h2,h3{
    color: rgb(54,54,54);
}
.selected{
    background-color: #96b3f0;
}
.App{
    transition: all 0.5s ease;
}
.library-active{
    margin-left: 30%;
}
`;
