import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  margin-top: 20px;
`;
export const FormWrapper = styled.form`
  margin: 0 auto;
  padding: 10px;
  gap: 20px;
  width: 100%;


`;

export const Button = styled.button`
    display: block;
    width: auto;
    text-align: center;
    vertical-align: middle;
    padding: 12px 24px;
    margin: 0 auto;
    margin-bottom: 30px;
    margin-top: 30px;
    border: 1px solid #131468;
    border-radius: 8px;
    background: #3537ff;
    background: -webkit-gradient(linear, left top, left bottom, from(#3537ff), to(#131468));
    background: -moz-linear-gradient(top, #3537ff, #131468);
    background: linear-gradient(to bottom, #3537ff, #131468);
    -webkit-box-shadow: #4042ff 0px 0px 40px 0px;
    -moz-box-shadow: #4042ff 0px 0px 40px 0px;
    box-shadow: #4042ff 0px 0px 40px 0px;
    text-shadow: #0b0b3a 1px 1px 1px;
    font: normal normal bold 20px comic sans ms;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;`;

export const Input = styled.input`
display: block;
 margin: 0 auto;
  align-items: center;
  justify-content: center;
  background-color: #d4bfd3;
  color: #50174c;
  font-weight: 100;
  border: 1px solid #d4bfd3;
  height: 50px;
  width: auto;
  font-size: 20px;
  border-radius: 4px;
  padding: 0 20px;
  transition: 300ms;
  cursor: pointer;
  ::placeholder {
    color:#50174c;
  }
`;
