import React, { useMemo, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons } from '../../reducer/pokemon/actions';
import { pokemonsOnPage } from '../../constats/constant-pokemonOnPage';
import { PokeCard } from '../SkeletonListPokemon/index';
import './style.scss';

export const MainCard = () => {
  const selectValue = [];
  const pokemonList = useSelector((state) => state.pokemon.pokemonsInfo);
  const [limit, setLimit] = useState(
    pokemonList?.limit || pokemonsOnPage[0].number
  );
  const [page, setPage] = useState(pokemonList?.page || 1);
  const dispatch = useDispatch();
  pokemonsOnPage.map((el) =>
    el.number === pokemonList?.limit ? selectValue.push(el) : undefined
  );

  useMemo(() => {
    if (pokemonList?.page !== page || pokemonList?.limit !== limit)
      dispatch(getAllPokemons(page, limit));
  }, [dispatch, limit, page, pokemonList?.page, pokemonList?.limit]);

  return (
    <div className='PaginationCard'>
      <div className='PaginationCard_header'>
        <div>
          <label>Pokemon per page:</label>
          <select
            className='PaginationCard_header__base-input'
            onChange={(e) => setLimit(+e.target.value)}
            defaultValue={
              selectValue[0] !== undefined
                ? selectValue[0].number
                : pokemonsOnPage[0].number
            }
          >
            {pokemonsOnPage.map((option) => (
              <option key={option.id} value={option.number}>
                {option.value}
              </option>
            ))}
          </select>
        </div>
        <Pagination
          className='PaginationCard_header__pagination'
          count={Math.ceil(pokemonList.count / limit)}
          onChange={(_, num) => setPage(num)}
          page={pokemonList.page}
          defaultPage={pokemonList.page}
          variant='outlined'
          color='secondary'
        />
      </div>
      <PokeCard limit={limit} />
    </div>
  );
};
