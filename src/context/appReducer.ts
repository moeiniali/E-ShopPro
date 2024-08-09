interface State {
  step: string | null;
  controller: string | null;
  userStep: string | null;

}

interface Action {
  type: string;
  payload: string;
}

const appReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'STEP':
      return {
        ...state,
        step: action.payload
      };

    case 'CONTROLLER':
      return {
        ...state,
        controller: action.payload
      };
    case 'USERSTEP':
      return {
        ...state,
        userStep: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;
