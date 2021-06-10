import React from 'react'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
  50% {
    transform: scale(0.8)
  }
  100% {
    opacity: 1;
    transform: scale(1)
  }
`

const StyledFriend = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 2px solid white;

  background-color: ${props => props.theme.primaryColor};
  color: ${({ theme }) => theme.white};
  
  @media ${({ theme }) => theme.breakpointMobile} {
    width: initial;
  }
  
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.secondaryColor};
  }
  
  &::before {
    content: "${props => props.besty ? '💚' : '🙂'}"
  }

  transform: scale(2);
  opacity: 0;
  animation: ${kf} 0.3s ease-in-out forwards;

  
`
const StyledButton = styled.button`
  background-color: ${props => props.theme.tertiaryColor};
  &:hover {
    transform: scale(1.1);
  }
`

export default function Friend({ info, action, besty }) {
  return (
    <StyledFriend besty={besty}>
      {info.name}
      <StyledButton onClick={() => action(info.id)}>
        See details
      </StyledButton>
    </StyledFriend>
  )
}
