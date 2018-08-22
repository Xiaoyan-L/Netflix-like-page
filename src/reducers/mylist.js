import { actionTypes } from '../action/mylist';

const initState = [
  {
  'title': 'Futurama',
  'id': 1,
  'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
  },
  {
  'title': 'The Interview',
  'id': 2,
  'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp' 
  },
  {
  'title': 'Gilmore Girls',
  'id': 3,
  'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
  }
];

const mylist = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return [
        ...state,
        action.movie
      ];
    case actionTypes.REMOVE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)
      ];
    default:
      return state;
  }
}

export default mylist;

