import React, { useEffect } from 'react';
import { useMemo } from 'react';
import { List, Button } from '../styled';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from '../redux/contactsSlice';
import {contactsSelector, filterSelector, loadContactSelector} from '../redux/selectors'
import { getContactsThunk } from 'components/Products/productSlice';

export const Contacts = () => {
    
    // const contacts = useSelector(contactsSelector);
    const filter = useSelector(filterSelector);
  
    const dispatch = useDispatch();
    
    useEffect(() => { dispatch(getContactsThunk()) }, [dispatch]);
   
    const contacts = useSelector(loadContactSelector)
    console.log(contacts)
    
    const visibleContacts = useMemo(() => {
        // if (!filter) return contacts;
       
        return contacts.filter(contact => contact.name.toLowerCase()
            .includes(filter))
    }, [contacts, filter])

 
    const handleDelete = () => dispatch(deleteContact(contacts.id));

    
    

    // eslint-disable-next-line no-lone-blocks
    {
        return <>
            <Button
                onClick={() => {dispatch(getContactsThunk())}}
            
            >Test</Button>
        <List> {contacts && contacts.map(({ name, id, number }) => <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <Button type="submit"
                onClick={() => handleDelete(id)}
            >Delete</Button>
        </li>)}
            </List>
            </>
    }
}

