import React from 'react';
import { ButtonWrapper } from '../Button/Button.style';
import PropTypes from 'prop-types';

const Button = ({variant, backgroundColor, size, label, ...props}) => {
    return (
        <ButtonWrapper
        variant = {variant}
        backgroundColor = {backgroundColor}
        size = {size}
        label = {label}
        {...props}>
            {label}
        </ButtonWrapper>
    );
};

Button.propTypes = {
    /**
     * What type of button to use?
     */
    variant: PropTypes.oneOf(['primary', 'secondary']),
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
  };
  
  Button.defaultProps = {
    variant: 'primary',
    backgroundColor: null,  
    size: 'medium',
    onClick: undefined,
  };

export default Button