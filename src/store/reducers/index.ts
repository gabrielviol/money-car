import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

export interface User {
  id: number;
  name: string;
  total: number;
}

export interface RootState {
  users: User[]

}

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
