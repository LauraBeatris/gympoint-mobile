import { produce } from 'immer';

const INITIAL_STATE = {
  student: null,
};

export function student(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.data = action.payload.student;
      });
    case '@auth/SIGN_OUT':
      return produce(state, draft => {
        draft.data = null;
      });
    default:
      return state;
  }
}
