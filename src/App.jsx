import { useEffect, useState } from 'react'

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import { nanoid } from 'nanoid';

import './App.css'
import Section from './components/Section/Section';

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(stringifiedContacts) ?? [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];

    return parsedContacts;
  });

    useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem("contacts", stringifiedContacts);
    }, [contacts]);
  
  
  const [filter, setFilter] = useState("");

  const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase().trim()));

  const onnAddContact = (formData) => {
    const finalUser = {
      
      ...formData,
      id: nanoid(),
    }
    setContacts((prevState) => {
      return [...prevState, finalUser];
    });
  };

  const onDeleteContact = (contactId) => {
    const updatedContact = contacts.filter((contact) => contact.id !== contactId);
    setContacts(updatedContact);
     
   }
 

  return (
    <div>
      <Section>
  <h1>Phonebook</h1>
      <ContactForm onnAddContact={onnAddContact} />
      <SearchBox value={filter} setFilter={ setFilter} />
        <ContactList onDeleteContact={onDeleteContact} contacts={visibleContacts} />
        </Section>
</div>
     
  )
}

export default App
