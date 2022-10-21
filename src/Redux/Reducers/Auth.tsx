import { ACTION_STATES } from "../Actions/ActionStates";
import { LOGIN } from "../Actions/Auth";

const initialState: ReduxState  = {
  token: null,
};

const authReducer = (state : ReduxState = initialState, action:ReduxAction) => {
    switch (action.type) {
      case LOGIN + ACTION_STATES.SUCCESS: {
        return {
          ...state,
          token: action.payload,
        };
      }
      default: {
        return state;
      }
    }
  };
  
  export default authReducer;
  


