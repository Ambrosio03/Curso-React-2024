import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import CardPokemon from './CardPokemon';

  
const URL = "https://pokeapi.co/api/v2/pokemon?limit=100"

export const  PokeApiPokemons = () => {

  const [pokemons, setPokemons] = useState([])
  const[loading, setLoading] = useState(true)
    
    useEffect(() => {
      const fechData = async () => {
        try{
          const response = await fetch(URL)
          if(!response.ok){
            throw new console.error("No se conecta a la api");
          }
  
          const data = await response.json();
          const results = data.results;
          const pokemonData = await Promise.all(
            results.map( async (pokemon) => {
                const resp = await fetch(pokemon.url);
                const pokemonDetails = await resp.json();
                return {
                  key : pokemonDetails.id,
                  id: pokemonDetails.id,
                  name: pokemon.name,
                  img: pokemonDetails.sprites.other.dream_world.front_default 
                  //stats: pokemonDetails.stats.base_stat 
  
                }
  
            })
          )
            setTimeout(() => {
              setPokemons(pokemonData);  
            setLoading(false);
            }, 3000);
          

        }catch(error){
          throw new error("No se conecta a la api") 
      }
  }
      fechData();
    }, [])
    

  return (
   
    <div className='mx-auto max-w-[75%] text-center relative'>
            <h1 className='text-4xl font-bold mb-8 mt-2 bg-red-600'>PoKeApi</h1>
            {loading ? (<Spinner/>) : (
              
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto relative'>
                    {pokemons.map(pokemon => (
                        <CardPokemon
                        key = {pokemon.id}  
                        id = {pokemon.id} 
                        img = {pokemon.img}
                        name ={pokemon.name}
                        html_url = {pokemons.url}>
                        </CardPokemon>  
                    ))}
                    </div>
                
            )}
    </div> 

  )
}
