import React from "react";
import {
 Adote,
 Background,
 
 Filtro,
 Grade,
 Imagem1,
 Imagem2,
 Imagem3,
 Imagem4,
} from "./styles";

const Adotar = () => {
  return (
    
    <Adote>
      
    <Background> 
          <img height="80%" width="100%" src="../../assets/images/Gato_adotar.png"/>
          
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
      <div>
        <Imagem1/>
      <h1>  MEL </h1>
       < p> &bull; Idade: 2 Anos</p>
       <p> &bull; Porte: N/A</p>
       <p> &bull; Vacinado:Sim</p>
       <p> &bull; Sexo:Fêmea</p>
       <p> &bull; Espécie:Gato</p>
      
      </div>
      <div>
        <Imagem2/>
      <h1>  MEL </h1>
       <p> &bull; Idade: 2 Anos</p>
       <p> &bull; Porte: N/A</p>
       <p> &bull; Vacinado:Sim</p>
       <p> &bull; Sexo:Fêmea</p>
       <p> &bull; Espécie:Gato</p>
       
      
      
      </div>
      <div>
        <Imagem3/>
      
      <h1>  MEL </h1>
      
       <p> &bull; Idade: 2 Anos</p>
       <p> &bull; Porte: N/A</p>
       <p> &bull; Vacinado:Sim</p>
       <p> &bull; Sexo:Fêmea</p>
       <p> &bull; Espécie:Gato</p>
       
      
      
      </div>
      <div>
        <Imagem4/>
      <h1>  MEL </h1>
       <p> &bull; Idade: 2 Anos</p>
       <p> &bull; Porte: N/A</p>
       <p> &bull; Vacinado:Sim</p>
       <p> &bull; Sexo:Fêmea</p>
       <p> &bull; Espécie:Gato</p>
       
      
      
      </div>
      </Grade>
      </Adote>
      
  );
};


export default Adotar;
