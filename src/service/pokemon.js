import { api } from './api';

export const getPokemonsForPage = async (page, limit) => {
  try {
    const offset = limit * (page - 1);
    const res = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
    return {
      count: res.data.count,
      data: res.data.results.map((el) => el.url),
    };
  } catch (err) {
    throw err;
  }
};

export const getOnePokemon = async (data) => {
  try {
    const usedPromise = await Promise.allSettled(
      data.map((el) => api.get(`${el}`))
    );
    return {
      data: usedPromise.map((el) => el.value.data),
    };
  } catch (err) {
    throw err;
  }
};
