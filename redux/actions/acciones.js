import axios from 'axios';
import API from '../../api/api';

//CONSTANTES
export const IS_FETCHING = 'IS_FETCHING';
export const ANIME_FETCHED = 'ANIME_FETCHED';
export const ERROR_FETCHING_ANIME = 'ERROR_FETCHING_ANIME';

//PETICIONES HTTP
export const getanime = () => {
  const anime = axios.get(API.personajes);
  return dispatch => {
    dispatch({ type: IS_FETCHING });
      anime
      .then(({ data }) => {
        dispatch({ type: ANIME_FETCHED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING_ANIME, payload: err });
      });
  };
};