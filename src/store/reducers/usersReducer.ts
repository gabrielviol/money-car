import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '..';
import { HYDRATE } from 'next-redux-wrapper';

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

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.product,
      }
    }
  }
})

export const { setUsers } = user.actions
export const selectProductsState = (state: AppState) => state.users;
export default user.reducer;

// const usersReducer = createReducer(initialState, (builder) => {
//   builder.addCase(updateUsers, (state, action) => {
//     state.users = action.payload;
//   })
// });

// export default usersReducer;
