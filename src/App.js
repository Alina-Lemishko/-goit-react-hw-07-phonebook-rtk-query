import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/Loader/loader';
import s from './App.module.css';
import { useGetContactsQuery } from 'redux/contacts/contacts';

export default function App() {
  const { error, isFetching: loading } = useGetContactsQuery();

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.contactsTitle}>Contacts</h2>
      {loading && <Loader />}
      <Filter />
      {error && <p>{error.message}</p>}
      <ContactList />
    </div>
  );
}
