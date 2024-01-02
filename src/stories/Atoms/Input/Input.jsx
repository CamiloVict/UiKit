import React from 'react';
import {
  InputStyled,
} from '../Input/Input.style';
import PropTypes from 'prop-types';

const Input = ({error, ...props}) => {
  const mode = error ? 'false' : 'true';
    return (
        <InputStyled
        variant = {mode}
        {...props}>
        </InputStyled>
    );}


Input.propTypes = {
    /**
     * Is the entered text valid?
     */
    error: PropTypes.bool,
  };
  
  Input.defaultProps = {
    error: false,
  };

export default Input