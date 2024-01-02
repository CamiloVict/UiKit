import styled, { css } from 'styled-components';

export const TitleStyled = styled.h2`
    color: black;
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 800;
    margin-bottom: 0;

    ${props => props.size ==="small" && css`
    font-size: 24px;
  `};

  ${props => props.size ==="large" && css`
    font-size: 32px;
  `};
`;

