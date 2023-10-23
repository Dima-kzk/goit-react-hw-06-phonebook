import { Сentralizer } from './App.styled';
import { Section } from 'components/Section/Section';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';

import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Сentralizer>
      <Section title="Phonebook">
        <AddContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactsList />
          </>
        ) : (
          <>
            <p>No contacts.</p>
            <p>You can add contacts.</p>
          </>
        )}
      </Section>
    </Сentralizer>
  );
};
