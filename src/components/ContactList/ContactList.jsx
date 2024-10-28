import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {

  // console.log('contacts: ', contacts);
  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map(contact =>  (
            <li className={css.contactItem} key={contact.id}>
            <Contact onDeleteContact={onDeleteContact } name={contact.name}
              number={contact.number} id={contact.id}
             />
            </li>
          )
        )}
      </ul>
     
    </div>
  )
}

export default ContactList
