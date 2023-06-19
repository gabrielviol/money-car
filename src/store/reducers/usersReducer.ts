import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '..';
import { HYDRATE } from 'next-redux-wrapper';

interface userList{
  users:{
    id: number;
    name: string;
    total: number;
  }[]
  selectedUser: string | null,
  selections: {
    [key: string]: number
  } ,
}

const initialState: userList = {
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
  selectedUser: null,
  selections: {},
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload
    },
    setSelectedUser(state, action) {
      state.selectedUser = action.payload;
    },
    incrementSelection(state) {
      const { selectedUser, selections } = state;
      if (selectedUser) {
        selections[selectedUser] = (selections[selectedUser] || 0) + 1;
      }
    }
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

export const { setUsers, setSelectedUser, incrementSelection } = user.actions
export const setUserState = (state: AppState) => state.users;
export default user.reducer;