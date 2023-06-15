import { createReducer } from '@reduxjs/toolkit';
import { updateUsers } from '../actions/updateUsers';

const initialState = {
  users: [
    {
      id: 1,
      name: 'Gabriel',
      total: 0,
    },
    {
      id: 2,
      name: 'Rebecca',
      total: 0,
    },
    {
      id: 3,
      name: 'Ninguém',
      total: 0,
    },
  ],
};

const usersReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateUsers, (state, action) => {
    state.users = action.payload;
  })
});

export default usersReducer;
