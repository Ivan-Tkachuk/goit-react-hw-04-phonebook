import React from 'react';
import PropTypes from 'prop-types';

import { List, Button, Text } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <Text>
          {name}: {number}
        </Text>
        <Button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </Button>
      </li>
    ))}
  </List>
);

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
};

export default ContactList;
