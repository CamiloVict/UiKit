import React from 'react';
import { StyledLink } from '../Link/Link.style';
import PropTypes from 'prop-types';

export const LinkComp = ({href, text,...props}) => {
    return (
            <StyledLink
            href = {href}
            text = {text}
            {...props}>
                {text}
            </StyledLink>
    );
};

LinkComp.propTypes = {
    /**
     * Add the path or url
     */
    href: PropTypes.string,
    /**
     * Link text
     */
    text: PropTypes.string.isRequired,
  };

export default LinkComp