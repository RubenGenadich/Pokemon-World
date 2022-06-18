import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import './style.scss';
import { useHistory } from 'react-router-dom';
import defaultImg from '../../img/chto-za-pokemon.jpg';

export const ListPokemons = ({ item, loading }) => {
  const { push } = useHistory();

  return (
    <div
      className='pokemon-oblast_card'
      onClick={() => push(`/pokemons/${item.name}`)}
    >
      <div className='pokemon-oblast__img'>
        {(loading && (
          <Skeleton variant='circular' width={40} height={40} />
        )) || (
          <img
            src={item.sprites.front_default || defaultImg}
            alt='данных нет'
          />
        )}
        {(loading && (
          <Skeleton id='v2' variant='circular' width={40} height={40} />
        )) || (
          <img src={item.sprites.back_default || defaultImg} alt='данных нет' />
        )}
      </div>
      <div>
        {(loading && <Skeleton id='v3' variant='text' />) || (
          <p>{item.name.toUpperCase()}</p>
        )}
      </div>
    </div>
  );
};
