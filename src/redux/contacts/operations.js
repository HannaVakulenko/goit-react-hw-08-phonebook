import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену "contacts/fetchContacts"
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      toast.error('An error occurred!', { position: 'top-center' });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// addContact - додавання контакту (метод POST). Базовий тип екшену "contacts/addContact"
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      toast.success('Contact added successfully!', { position: 'top-center' });
      return response.data;
    } catch (error) {
      toast.error('An error occurred!', { position: 'top-center' });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// deleteContact - видалення контакту (метод DELETE). Базовий тип екшену "contacts/deleteContact"
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.success('Contact deleted successfully!', {
        position: 'top-center',
      });
      return response.data;
    } catch (error) {
      toast.error('An error occurred!', { position: 'top-center' });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// updateContact - видалення контакту (метод PATCH). Базовий тип екшену "contacts/updateContact"
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/contacts/${data.id}`, {
        name: data.name,
        number: data.number,
      });
      toast.success('Contact updated successfully!', {
        position: 'top-center',
      });
      return response.data;
    } catch (error) {
      toast.error('An error occurred!', { position: 'top-center' });
      return rejectWithValue(error.message);
    }
  }
);
