import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { Notify } from 'notiflix';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contacts';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/filter/filter-selectors';

const ContactList = () => {
  const [deleteContact] = useDeleteContactMutation();
  const { data: contacts } = useGetContactsQuery();
  const filteredContacts = useSelector(state =>
    getVisibleContacts(contacts, state)
  );

  return (
    <ul className={s.contactList}>
      {filteredContacts?.map(el => {
        return (
          <li
            className={s.contactListItem}
            key={el.id}
            style={{ listStyle: 'none' }}
          >
            {el.name}: <span>{el.phone}</span>
            <button
              className={s.contactListBnt}
              type="button"
              onClick={() => {
                Notify.info(`${el.name} was deleted from contacts`);
                deleteContact(el.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
};
