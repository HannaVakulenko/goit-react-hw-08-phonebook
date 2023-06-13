import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchContactsFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const addContactFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const deleteContactFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(index, 1);
};

const logOutUserFulfilledReducer = state => {
  state.items = [];
  state.error = null;
  state.isLoading = false;
};

const updateContactFulfilledReducer = (state, action) => {
  const index = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(index, 1);
  state.items.unshift(action.payload);
  state.isLoading = false;
  state.error = null;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      //
      .addCase(fetchContacts.pending, pendingReducer)
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(fetchContacts.rejected, rejectedReducer)
      //
      .addCase(addContact.pending, pendingReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(addContact.rejected, rejectedReducer)
      //
      .addCase(deleteContact.pending, pendingReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addCase(deleteContact.rejected, rejectedReducer)
      //
      .addCase(updateContact.pending, pendingReducer)
      .addCase(updateContact.fulfilled, updateContactFulfilledReducer)
      .addCase(updateContact.rejected, rejectedReducer)
      .addCase(logOut.fulfilled, logOutUserFulfilledReducer);
  },
});

export const contactsReducer = contactsSlice.reducer;
