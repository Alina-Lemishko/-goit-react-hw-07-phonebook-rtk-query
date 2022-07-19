import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { Notify } from 'notiflix';
import { useDeleteContactMutation } from 'redux/contacts/contacts';

const ContactList = ({ contacts }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul className={s.contactList}>
      {contacts?.map(el => {
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
