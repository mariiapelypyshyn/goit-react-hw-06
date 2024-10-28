import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contactsSlice.';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  
 const onDeleteContact = (contactId) => {
   const action = deleteContact(contactId);
    dispatch(action);
  }
  
  return (
    <div className={css.container}>
      <div>
      <p>{contact.name}</p>
        <p>{contact.number}</p>
        </div>
      <button className={css.btn } onClick={() => onDeleteContact(contact.id)} type="button">Delete</button>
    </div>
  )
}

export default Contact;
