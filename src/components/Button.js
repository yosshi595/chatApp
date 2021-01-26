import styled from 'styled-components'
import { Link } from "react-router-dom";

const Button = ({ label, type, to }) => {
  return (
    type === 'link' ?
      <LinkStyle to={to}>{label}</LinkStyle>
    :
      <Btn type={type}>{label}</Btn>
  )
}
export default Button

const Btn = styled.button`
  background-color: #aaa;
  color: #fff;
  border-radius: 3px;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
`
const LinkStyle = styled(Link)`
    background-color: #aaa;
    color: #fff;
    border-radius: 3px;
    border: none;
    padding: 8px 15px;
    text-decoration: none;
    display: block;
    width: 20%;
    margin: 0 auto;
    margin-top: 20px;
`