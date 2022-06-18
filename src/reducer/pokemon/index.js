import {
  ALL_POKEMONS_START,
  ALL_POKEMONS_SUCCESS,
  ALL_POKEMONS_ERROR,
  INFO_POKEMON_START,
  INFO_POKEMON_SUCCESS,
  INFO_POKEMON_ERROR,
} from './constants';

const defaultState = {
  pokemonsInfo: {
    data: [],
    isLoading: false,
    error: false,
    count: 0,
    page: 0,
    limit: 0,
  },
  pokemonInfo: {
    data: [],
    isLoading: false,
    error: false,
  },
};

export default function pokemon(state = defaultState, action) {
  switch (action.type) {
    case ALL_POKEMONS_START: {
      return {
        ...state,
        pokemonsInfo: {
          data: [],
          isLoading: true,
          error: false,
          count: 1118,
          page: action.page,
          limit: action.limit,
        },
      };
    }
    case ALL_POKEMONS_SUCCESS: {
      return {
        ...state,
        pokemonsInfo: {
          data: [...action.payload.data],
          isLoading: false,
          error: false,
          count: action.payload.count,
          page: action.page,
          limit: action.limit,
        },
      };
    }
    case ALL_POKEMONS_ERROR: {
      return {
        ...state,
        pokemonsInfo: {
          data: [],
          isLoading: false,
          error: action.payload,
        },
      };
    }
    case INFO_POKEMON_START: {
      return {
        ...state,
        pokemonInfo: {
          data: [],
          isLoading: true,
          error: false,
        },
      };
    }
    case INFO_POKEMON_SUCCESS: {
      return {
        ...state,
        pokemonInfo: {
          data: [...action.payload.data],
          isLoading: false,
          error: false,
        },
      };
    }
    case INFO_POKEMON_ERROR: {
      return {
        ...state,
        pokemonInfo: {
          data: [],
          isLoading: false,
          error: action.payload,
        },
      };
    }
    default:
      return state;
  }
}
