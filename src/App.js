import React, { Component } from 'react';
import api from './api';
import './index.css'
import './App.css'
import image from './images/marvelstudios.png'


class App extends Component {

    state = {
      characters: []

    }

    async componentDidMount(){
      const {data} = await api.get(`characters`,
      
      // Aqui você pode setar quantos personagens você quer puxar da API
      // limit : A quantidade de personagens que você quer puxar
      // offset : valor para pular uma determinada quantia de personagens e começar a contar dali.
      
      {params: {
          limit:42,
          offset:0,
        }});
      this.setState({ characters: data.data.results})
    }

  render(){

   const {characters} = this.state;

    return(
      <div>
      <div className='fulltitle'>
      <img className ='imagemlogo' src={image}/>

        <h1 className='titleperson'>Listagem de Personagens</h1>
        </div>
      <div className='maindiv'>
        {console.log(characters)}
        {characters.map(data =>(
          <div className='charlist'>
            <img className='logomarvel' src={`${data.thumbnail.path}.${data.thumbnail.extension}`}/>
            <p>
            {data.name}
            {/* Caso queiramos mostrar os restantes das informações da API na SPA, deve-se inserir {data.nomedoobjeto} nesta tag <p> */}
            {/* Exemplo :  */}
            {/* {data.description} */}
            {/* optei apenas por não mostrar neste desafio pois algumas das informações na API estão incompletas, como a .description. */}
            </p>    

            </div>
        ))}
      </div>
      <footer> 	&copy; Created by Breno Barbosa (using Marvel's API)</footer>

      </div>
      
    );
  }

}

export default App;
