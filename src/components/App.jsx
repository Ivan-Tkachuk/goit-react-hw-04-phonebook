import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { Container } from './App.styled';
import initialContacts from './contacts';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');

    if (contacts !== null) {
      const parsedContacts = JSON.parse(contacts);
      this.setState({
        contacts: parsedContacts
      });
      return;
    }
    this.setState({
      contacts: initialContacts
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.state.contacts.filter(contact => contact.name === name).length
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
    console.log(this.state.contacts);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
