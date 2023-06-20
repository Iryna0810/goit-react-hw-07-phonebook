import React, { useEffect } from 'react';
import { List, Button } from '../styled';
import { useSelector, useDispatch } from "react-redux";
import { selectVisibleContacts, selectIsLoading, selectError} from '../redux/selectors'
import { getContactsThunk, deleteContactsThunk } from 'components/redux/thunk';
import Loader from 'components/Loader/Loader'

export const Contacts = () => {
    const visibleContacts = useSelector(selectVisibleContacts)
    const loading = useSelector(selectIsLoading)
    const error = useSelector(selectError)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getContactsThunk())
    }, [dispatch])
   

    const handleDelete = (id) => {
        dispatch(deleteContactsThunk(id))
    };
   

    // eslint-disable-next-line no-lone-blocks
    {
        return <>
            {loading && <Loader />}
            {error && <p>Something went wrong. Try again later</p>}
            <List> {visibleContacts &&
                visibleContacts.map(({ name, id, phone }) =>
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

