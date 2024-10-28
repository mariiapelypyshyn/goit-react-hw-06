import { Form, Formik, Field, ErrorMessage } from 'formik'
// import * as Yup from 'yup';
import { AddContactSchema } from '../../utils/contactform';
import css from "./ContactForm.module.css";
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice.';


const INITIAL_VALUES = {
    name: "",
    number: "",
}



const ContactForm = () => {
    const dispatch = useDispatch();

     const onnAddContact = (formData) => {
    const finalUser = {
      
      ...formData,
      id: nanoid(),
         }
         
       const action = addContact(finalUser);
         dispatch(action)
    // setContacts((prevState) => {
    //   return [...prevState, finalUser];
    // });
    };
    
    const handleSubmit = (values, actions) => {
        onnAddContact(values);
        actions.resetForm();
    }
  
  return (
      <div className={css.container}>
          <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit} validationSchema={AddContactSchema}>
          
          <Form className={css.form}>
              
          <label className={css.label}>
                          <div className={css.labelName}>Name</div>
                          <Field className={css.input } type="text" name="name"  />
                          <ErrorMessage className={css.errorMessage } name="name" component="span" />
             
           </label>
              <label className={css.label}>
              <div className={css.labelName}>Number</div>
                          <Field className={css.input } type="text" name="number"   />
                           <ErrorMessage className={css.errorMessage } name="number" component="span" />
                  </label>
                 
                  <button className={ css.btn} type="submit">Add contact</button>
              </Form>
              </Formik>
    </div>
  )
}

export default ContactForm
