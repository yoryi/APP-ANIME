import { IS_FETCHING, ANIME_FETCHED, ERROR_FETCHING_ANIME } from '../actions/acciones';

const initialState = {
  anime: [],
  fetching: false,
  fetched: false,
  error: null
};

//EXPORTAMOS A ESTADOS
export const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, fetching: true };
    case ANIME_FETCHED:
      console.log('ANIME: ', action.payload);
      return {
        ...state,
        fetched: true,
        fetching: false,
        anime: Object.keys(action.payload)
      };
    case ERROR_FETCHING_ANIME:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};