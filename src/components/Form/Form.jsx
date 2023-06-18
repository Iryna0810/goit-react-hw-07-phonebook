import {useState} from 'react';
import { FormWrapper, Button, Input } from '../styled';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from '../redux/contactsSlice';
import { contactsSelector } from '../redux/selectors';


export const Form = () => {

  const contacts = useSelector(contactsSelector);
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedName = name.toLowerCase();
    const nameCheck = contacts.filter(contact => contact.name.toLowerCase() === normalizedName);

    if (nameCheck.length >= 1) {
      return alert(`${name} is already in contacts`)
    }
    dispatch(addContact(name, number))
    reset();
  }

  const handleInputChange = ({ target: { value, name } }) => {
    if (name === 'name') setName(value)
    if (name === 'number') setNumber(value)
  }


  const reset = () => {
    setName('');
    setNumber('');
  }

  return <FormWrapper action="" onSubmit={handleSubmit}>
    <label>Name
      <Input
        type="text"
        name="name"
        value={name}
        autoComplete="off"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}>
      </Input>
    </label>
    <label>Number
      <Input
        type="tel"
        name="number"
        value={number}
        autoComplete="off"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleInputChange}>
        </Input>
    </label>
    <Button type="submit">Add contacts</Button>
  </FormWrapper>
};