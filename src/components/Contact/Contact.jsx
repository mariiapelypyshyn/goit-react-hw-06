import css from './Contact.module.css';

const Contact = ({ name, number, id, onDeleteContact }) => {

  return (
    <div className={css.container}>
      <div>
      <p>{name}</p>
        <p>{number}</p>
        </div>
      <button className={css.btn } onClick={() => onDeleteContact(id)} type="button">Delete</button>
    </div>
  )
}

export default Contact;
