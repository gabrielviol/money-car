import { createAction } from '@reduxjs/toolkit';

export const updateUsers = createAction('users/update', (updatedUsers) => {
  return {
    payload: updatedUsers,
  };
});