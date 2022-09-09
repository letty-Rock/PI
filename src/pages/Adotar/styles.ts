import styled from "styled-components";



const Adote = styled.body`
display:grid;
grid-template-columns: auto auto auto;
grid-template-rows: auto 100vh auto;
grid-template-areas:
"Background Background Background "
"Filtro  Grade Grade"

`;
const Background = styled.div`
grid-area: Background


`;

const Filtro = styled.div`

grid-area: Filtro;
background-color: #F5F5F5;
border-style: solid;
`;
const Grade = styled.div`

display: grid;
grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
  grid-gap: 30px;

  max-width: 960px;
  margin: 0 auto 30px
`;


const Imagem1 = styled.div`


`;
const Imagem2 = styled.div``;
const Imagem3 = styled.div``;
const Imagem4 = styled.div``;




export {
    Adote,
 Background,

 Filtro,
 Grade,

 Imagem1,
 Imagem2,
 Imagem3,
 Imagem4,
};
