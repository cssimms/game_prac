import { MOVE_OBJECTS } from "../actions";
import moveObjects from './moveObjects';

const initialState = {
  message: 'barf',
  angle: 45,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    default:
      return state;
  }
}

export default reducer;
