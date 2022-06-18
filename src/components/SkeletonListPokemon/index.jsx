import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOnePokemon } from '../../reducer/pokemon/actions';
import { ListPokemons } from '../../pages/ListPokemons/index';
import './style.scss';

const isLoadCheck = (limit, data, isLoading) => {
  return isLoading ? Array.from(new Array(limit)) : data;
};

export const PokeCard = ({ limit }) => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon.pokemonsInfo);
  const { data, isLoading } = useSelector((state) => state.pokemon.pokemonInfo);

  useMemo(() => {
    if (!pokemons.isLoading) dispatch(getOnePokemon(pokemons.data));
  }, [dispatch, pokemons]);

  return (
    <div className='pokemon-oblast'>
      {isLoadCheck(limit, data, isLoading).map((item, index) => (
        <ListPokemons item={item} loading={!item} key={index} />
      ))}
    </div>
  );
};
