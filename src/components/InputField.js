import React from 'react'
import styled from "styled-components";

const InputField = ({type, label, name, placeholder, isRequired, onChange, error}) => {
  return (
    <div>
      <Lavel htmlFor={name}>{label}</Lavel>
      <Input type={type} name={name} id={name} placeholder={placeholder} required={isRequired ? 'required' : 'none'} onChange={onChange} />
      {error && (<p>{error}</p>)}
    </div>
  )
}

export default InputField

const Lavel = styled.label`
  padding-right: 10px;
`
const Input = styled.input`
  padding: 7px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
`