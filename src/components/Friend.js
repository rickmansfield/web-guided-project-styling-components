import React from 'react';
import styled from 'styled-components';
//outside of the friend component
//outside of the friend component
//outside of the friend component
//outside of the friend component
//Capitalize the SC
//Remember your semicolons " : "


const StyledFriend = styled.div`
color: ${pr => pr.theme.primaryColor};
font-weight: bold;
width: 60%;
display: flex;
justify-content: space-between;

@media (max-width: 550px) {
  width: 100%;
}

button {
  color: ${pr => pr.theme.tertiaryCorlor};
  &:hover{
    transform:scale(2);
    transition: all 0.5s ease-in-out;
  }
  transition: all 0.5s ease-in-out;
}

&:hover {
  color: ${pr => pr.theme.secondaryColor};
  background-color: cyan;
  transition: all 0.5s ease-in-out;
}
transition: all 0.5s ease-in-out;
`;



export default function Friend({ info, action }) {
  return (
    
    <StyledFriend >
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </StyledFriend>
  )
}
