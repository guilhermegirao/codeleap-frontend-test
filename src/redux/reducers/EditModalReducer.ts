interface Action {
  type: 'EDIT_MODAL_OPEN' | 'EDIT_MODAL_CLOSE';
}

const INITIAL_STATE = false;

// eslint-disable-next-line default-param-last
const EditModalReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'EDIT_MODAL_OPEN': {
      return true;
    }

    case 'EDIT_MODAL_CLOSE': {
      return false;
    }

    default:
      return state;
  }
};

export default EditModalReducer;
