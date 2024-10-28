import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import Section from './components/Section/Section';

import './App.css'


function App() {

  return (
    <div>
      <Section title="Phonebook">
  {/* <h1>Phonebook</h1> */}
        <ContactForm  />
        <SearchBox/>
        <ContactList />
        </Section>
</div>
  )
}

export default App;
