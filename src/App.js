import { useMemo, useState } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/Loader/loader';
import s from './App.module.css';
import { useGetContactsQuery } from 'redux/contacts/contacts';

export default function App() {
  const [filter, setFilter] = useState('');
  const { data, error, isFetching: loading } = useGetContactsQuery();

  const getFilteredContacts = useMemo(() => {
    const normalizedFilter = filter?.toLowerCase();
    if (filter) {
      return data?.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
    return data;
  }, [data, filter]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm contacts={data} />
      <h2 className={s.contactsTitle}>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      {loading && <Loader />}
      {error && <p>{error.message}</p>}
      {
        /* {Boolean(getFilteredContacts.length) && ( */
        <ContactList contacts={getFilteredContacts} />
        /*   )} */
      }
    </div>
  );
}
