import {  useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const selectContacts = useSelector((state) => state.contactsData.items);
  const selectNameFilter = useSelector((state) => state.filtersData.name);
  
  const visibleContacts = selectContacts.filter((contact) => contact.name.toLowerCase().includes(selectNameFilter.toLowerCase().trim()));

  return (
    <div>
      <ul className={css.contactList}>
        {visibleContacts && visibleContacts.map(contact =>  (
            <li className={css.contactItem} key={contact.id}>
            <Contact contact={contact}
             />
            </li>
          )
        )}
      </ul>
     
    </div>
  )
}

export default ContactList
