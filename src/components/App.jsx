import { Form } from "./Form/Form";
import { Title } from './Title/Title';
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filtter/Filter";
// import {newContactsReduser} from '../Products/productSlice'

export const App = () => {
  return (
      
    <div
      style={{
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: '#fff',
        backgroundColor: 'rgb(2,0,36)',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(191,4,171,0.6839985994397759) 35%, rgba(0,212,255,1) 100%)',
        width: '500px',
        maxHeight: '100%',
        padding: '20px',
        margin: '0 auto',
        borderRadius: '8px',
      }}>
      <Title title='Phonebook'></Title>
      <Form/>
      <Title title="Contacts"></Title>
      <Filter/>
      <Contacts/>
    </div>
  );
};


  