import React from 'react'
import styled from "styled-components";

const Title = ({ text }) => {
    return (
        <TitleWrap>
            {text}
        </TitleWrap>
    )
}

export default Title

const TitleWrap = styled.h2`
  font-size: 30px;
  color: #aaa;
  text-align: center;
`
