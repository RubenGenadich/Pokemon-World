import {
  ALL_POKEMONS_START,
  ALL_POKEMONS_SUCCESS,
  ALL_POKEMONS_ERROR,
  INFO_POKEMON_START,
  INFO_POKEMON_SUCCESS,
  INFO_POKEMON_ERROR,
} from './constants';

export const getAllPokemons =
  (page, limit) =>
  async (dispatch, _getState, { PokemonApi }) => {
    try {
      dispatch({ type: ALL_POKEMONS_START, page: page, limit: limit });
      const data = await PokemonApi.getPokemonsForPage(page, limit);

      setTimeout(() => {
        dispatch({
          type: ALL_POKEMONS_SUCCESS,
          payload: data,
          page: page,
          limit: limit,
        });
      }, 0);
    } catch (err) {
      dispatch({
        type: ALL_POKEMONS_ERROR,
        payload: err,
      });
    }
  };

export const getOnePokemon =
  (data) =>
  async (dispatch, _getState, { PokemonApi }) => {
    try {
      dispatch({ type: INFO_POKEMON_START, payload: [] });

      const pokeInfo = await PokemonApi.getOnePokemon(data);

      setTimeout(() => {
        dispatch({
          type: INFO_POKEMON_SUCCESS,
          payload: pokeInfo,
        });
      }, 0);
    } catch (err) {
      dispatch({
        type: INFO_POKEMON_ERROR,
        payload: err,
      });
    }
  };
