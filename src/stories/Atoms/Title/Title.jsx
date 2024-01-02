import React from 'react';
import {TitleStyled} from '../Title/Title.style';
import PropTypes from 'prop-types';

// export const TitleComp = ({size,label, ...props}) => {
//     return (
//         <TitleStyled
//         size = {size}
//         label = {label}
//         {...props}
//         >
//         {label}
//         </TitleStyled>
//     );
// };

// TitleComp.propTypes = {
//     /**
//      * How large should the text be?
//      */
//     size: PropTypes.oneOf(['small','large']),
//     /**
//      * Title text
//      */
//     label: PropTypes.string.isRequired,
//   };

// TitleComp.defaultProps = {
//     size: 'small',
//   };

// export default TitleComp

export const TitleComp = ({Tag,text, ...props}) => {
  return (
    <TitleStyled>
      <Tag>
        {text}
      </Tag>
    </TitleStyled>
  );
}

TitleComp.propTypes = {
  /**
  * How large the title should be?
  */
  Tag: PropTypes.oneOf(['h1', 'h2','h3','h4','h5','h6']),
  /**
  * Title text
  */
  text: PropTypes.string.isRequired,
}

export default TitleComp;