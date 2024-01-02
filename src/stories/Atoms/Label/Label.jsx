import React from 'react';
import {LabelStyled} from '../Label/Label.style';
import PropTypes from 'prop-types';

export const LabelComp = ({type,name, ...props}) => {
  return (
    <LabelStyled
        type = {type}
        name = {name}>
    </LabelStyled>
  );
}

LabelComp.propTypes = {
  /**
  * What type of label is?
  */
  type: PropTypes.oneOf(['label', 'text']),
  /**
  * Label name
  */
  name: PropTypes.string.isRequired,
}

export default LabelComp;