import React from "react";
import {
 Adote,
 Background,
 Box,
 Filtro,
 Grade,
 AD1,
 AD2,
 AD3,
 AD4,
 Imagem1,
 Imagem2,
 Imagem3,
 Imagem4,
} from "./styles";

const Adotar = () => {
  return (
    
    <Adote>
      <Background>
        <Box >
          <h1>QUERO ADOTAR!</h1>
          <h1>Conheça os Aumigos que estão precisando de um lar!</h1>
        </Box>
        </Background>


      

    <Filtro>
        <h1>
          Filtro
        </h1>
        <h1>
          Porte
        </h1>

        <p><input type="radio" name="Porte" />Pequeno</p>
        <p><input type="radio" name="Porte" />Médio</p>
        <p><input type="radio" name="Porte" />Grande</p>

        <h1>
          Idade
        </h1>

        <p><input type="radio" name="Idade" />0 a 2 anos</p>
        <p><input type="radio" name="Idade" />3 a 5 anos</p>
        <p><input type="radio" name="Idade" />6 a 10 anos</p>
        <p><input type="radio" name="Idade" />+ 10 anos</p>

        <h1>
          Sexo
        </h1>

        <p><input type="radio" name="Sexo" />Macho</p>
        <p><input type="radio" name="Sexo" />Fêmea</p>

        <h1>
          Espécie
        </h1>

        <p><input type="radio" name="Especie" />Cachorro</p>
        <p><input type="radio" name="Especie" />Gato</p>

        <input type="button" value="Filtrar"/>

      </Filtro>
      <Grade>
      <AD1>
        <Imagem1/>
      <h1>  MEL </h1>
       <p> &bull; Idade: 2 Anos</p>
       <p> &bull; Porte: N/A</p>
       <p> &bull; Vacinado:Sim</p>
       <p> &bull; Sexo:Fêmea</p>
       <p> &bull; Espécie:Gato</p>
       
      </AD1>
      <AD2>
        <Imagem2/>
      <h1>  MEL </h1>
       <p> &bull; Idade: 2 Anos</p>
       <p> &bull; Porte: N/A</p>
       <p> &bull; Vacinado:Sim</p>
       <p> &bull; Sexo:Fêmea</p>
       <p> &bull; Espécie:Gato</p>
       
      
      
      </AD2>
      <AD3>
        <Imagem3/>
      
      <h1>  MEL </h1>
       <p> &bull; Idade: 2 Anos</p>
       <p> &bull; Porte: N/A</p>
       <p> &bull; Vacinado:Sim</p>
       <p> &bull; Sexo:Fêmea</p>
       <p> &bull; Espécie:Gato</p>
       
      
      
      </AD3>
      <AD4>
        <Imagem4/>
      <h1>  MEL </h1>
       <p> &bull; Idade: 2 Anos</p>
       <p> &bull; Porte: N/A</p>
       <p> &bull; Vacinado:Sim</p>
       <p> &bull; Sexo:Fêmea</p>
       <p> &bull; Espécie:Gato</p>
       
      
      
      </AD4>
      </Grade>
      </Adote>
      
  );
};


export default Adotar;
