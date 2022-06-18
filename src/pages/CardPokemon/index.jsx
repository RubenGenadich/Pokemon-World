import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import defaultImg from '../../img/chto-za-pokemon.jpg';
import './style.scss';

export const CardPokemon = () => {
  const { name } = useParams();
  const pokemonInfo = useSelector((state) => state.pokemon.pokemonInfo.data);
  const pokeInfo = pokemonInfo?.find((pokeName) => pokeName.name === name);
  const history = useHistory();

  const FuncGoBack = () => {
    history.goBack();
  };

  return (
    <div className='InfoCard'>
      <div className='InfoCard-Pokemon'>
        <div className='InfoCard-Pokemon-img'>
          <img
            src={pokeInfo?.sprites.front_default || defaultImg}
            alt='данных нет'
          />
          <img
            src={pokeInfo?.sprites.back_default || defaultImg}
            alt='данных нет'
          />
          <img
            src={pokeInfo?.sprites.front_shiny || defaultImg}
            alt='данных нет'
          />
          <img
            src={pokeInfo?.sprites.back_shiny || defaultImg}
            alt='данных нет'
          />
        </div>
        <div className='InfoCard-Pokemon-info'>
          <p>ИМЯ: {pokeInfo?.name.toUpperCase()}</p>
          <p>ТИП: {pokeInfo?.types[0].type.name.toUpperCase()}</p>
          <p>ЗДОРОВЬЕ: {pokeInfo?.height}</p>
          <p>БАЗОВЫЙ ОПЫТ: {pokeInfo?.base_experience}</p>
        </div>
      </div>
      <Button onClick={() => FuncGoBack()} variant='contained'>
        Go back
      </Button>
    </div>
  );
};
