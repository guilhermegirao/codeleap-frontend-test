import { combineReducers } from 'redux';

import UserReducer from './reducers/UserReducer';
import PostReducer from './reducers/PostReducer';
import EditModalReducer from './reducers/EditModalReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  post: PostReducer,
  editModal: EditModalReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
