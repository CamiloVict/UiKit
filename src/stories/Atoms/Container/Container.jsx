import React from 'react';
import {StyledContainer} from '../Container/Container.style';
import PropTypes from 'prop-types'


export const ContainerComp = ({width,height,children,...props})=> {
    return(
        <StyledContainer 
        width = {width}
        height = {height}>
            {children}
        </StyledContainer>
    )
};

ContainerComp.propTypes = {
    /**
    * Container width
    */
    width: PropTypes.string,
    /**
    * Container height
    */
    height: PropTypes.string,
    /**
    * Container content
    */
    children: PropTypes.node.isRequired,    
  }

    ContainerComp.defaultProps = {
    width: '400px',
    height: '300px',
    children: 'This is a container'
  };
  
  export default ContainerComp;
