import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterByName: (state, actions) => {
      state.filter = actions.payload;
    },
  },
});

export const { addContact, deleteContact, filterByName } = slice.actions;

export const reducer = slice.reducer;
