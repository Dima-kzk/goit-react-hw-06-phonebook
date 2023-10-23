import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    {
      name: 'Pamela Grady',
      number: '617-423-6419',
      id: '1',
    },
    {
      name: 'Mrs. Nora Green',
      number: '784-432-8108',
      id: '2',
    },
    {
      name: 'Julius Wyman',
      number: '833-550-2172',
      id: '3',
    },
    {
      name: 'Lionel Hintz',
      number: '473-932-5252',
      id: '4',
    },
  ],
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
