// export const contactSelector = state => state.contacts.items;
export const filterSelector = state => state.filter;

export const getVisibleContacts = (contacts, state) => {
  const filter = filterSelector(state);
  const normalizedFilter = filter?.toLowerCase();

  if (filter) {
    return contacts?.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
  return contacts;
};
