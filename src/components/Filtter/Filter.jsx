import React from 'react';
import { Input } from '../styled';
import { useDispatch} from 'react-redux';
import { setFilter } from '../redux/filterSlice';

export const Filter = () => {
    const dispatch = useDispatch();
  
    const handleChangeFilter = (event) => {  
        dispatch(setFilter(event.target.value));
    }
    return <label>Find contacts by name
            <Input type='text'
                onChange={handleChangeFilter}
                name="filter"
                autoComplete="off">
            </Input>
        </label>
};