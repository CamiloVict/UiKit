import styled, { css } from 'styled-components';

export const InputStyled = styled.input`
    background-color: white;
    border-radius: 8px;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    height: 48px;
    padding: 4px 12px;
    text-align: center;

  :focus-visible {
    outline: none;
  }

  ${props => !props.error && css`
  border: 1px solid darkblue;
  color: darkblue;

  :focus-visible {
    border: 1px solid blue;
    box-shadow: 0px 4px 8px rgba(11, 64, 255, 0.16);
  }

  ::placeholder {
    color: lightgrey;
  }
`};

  ${props => props.error && css`
    border: 1px solid ;
    color: darkblue;
    
    :focus-visible {
        border: 1px purple;
        box-shadow: 0px 4px 8px rgba(11, 64, 255, 0.16);
      }
  
      ::placeholder {
        color: grey;
      }
    `};
  
    :disabled {
      background-color: lightgrey;
      border: 1px solid lightgrey;
      color: grey;
    }
  
    :-webkit-autofill,
    :-webkit-autofill:hover, 
    :-webkit-autofill:focus, 
    :-webkit-autofill:active {
      /* stylelint-disable property-no-vendor-prefix */
      -webkit-box-shadow: 0 0 0 30px white inset !important;
      /* stylelint-enable property-no-vendor-prefix */
      -webkit-text-fill-color: darkblue !important;
    }
  `;
  
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 100%;
  `;
  
export const ErrorContainer = styled.div`
    margin-top: 4px;
    align-items: center;
    display: flex;
  `;
  
export const Text = styled.span`
    color: red;
    font-family: Helvetica;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  `;