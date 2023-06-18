import React from 'react';
import { useMemo } from 'react';
import { List, Button } from '../styled';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from '../redux/contactsSlice';
import {contactsSelector, filterSelector} from '../redux/selectors'

export const Contacts = () => {
    
    const contacts = useSelector(contactsSelector);
    const filter = useSelector(filterSelector);
    
    const visibleContacts = useMemo(() => {
    if (!filter) return contacts;
        return contacts.filter(contact => contact.name.toLowerCase()
            .includes(filter))
    }, [contacts, filter])

    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contacts.id));

    // eslint-disable-next-line no-lone-blocks
    {return <List> {visibleContacts.map(({ name, id, number }) => <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <Button type="submit"
                onClick={() => handleDelete(id)}
            >Delete</Button>
        </li>)}
        </List>
    }
}

