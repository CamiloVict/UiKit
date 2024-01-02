import React from 'react';
import {
  CheckboxStyled
} from '../Checkbox/Checkbox.style';
import PropTypes from 'prop-types';

const Checkbox = ({type,...props}) => {
    return (
      <CheckboxStyled
        type = {type}
        { ...props}>
      </CheckboxStyled>
    );}

Checkbox.propTypes = {
    /**
     * What type of checkbox to use?
     */
    type: PropTypes.oneOf(['checkbox', 'radio']),

};

Checkbox.defaultProps = {
    type: 'checkbox',
  };

export default Checkbox