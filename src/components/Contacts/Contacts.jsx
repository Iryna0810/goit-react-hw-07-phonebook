import React, { useEffect } from 'react';
import { useMemo } from 'react';
import { List, Button } from '../styled';
import { useSelector, useDispatch } from "react-redux";
// import { deleteContact } from '../redux/contactsSlice';
import { filterSelector, loadContactSelector} from '../redux/selectors'
import { getContactsThunk, deleteContactsThunk } from 'components/redux/thunk';

export const Contacts = () => {
    
    // const contacts = useSelector(contactsSelector);
    const filter = useSelector(filterSelector);
    const contacts = useSelector(loadContactSelector)
  
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getContactsThunk())
    }, [dispatch])
   

    
    const visibleContacts = useMemo(() => {
        if (!filter) return contacts;
       
        return contacts.filter(contact => contact.name.toLowerCase()
            .includes(filter))
    }, [contacts, filter])

 
    const handleDelete = () => dispatch(deleteContactsThunk(contacts.id));
   

    // eslint-disable-next-line no-lone-blocks
    {
        return <>
            <Button
                onClick={() => {dispatch(getContactsThunk())}}
            
            >Test</Button>
{/* {error} */}
            <List> {contacts &&
                contacts.map(({ name, id, phone }) =>
            <li key={id}>
            <p>{name}</p>
            <p>{phone}</p>
            <Button type="submit"
                onClick={() => handleDelete(id)}
            >Delete</Button>
        </li>)}
            </List>
            </>
    }
}

