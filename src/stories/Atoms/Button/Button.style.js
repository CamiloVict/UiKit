import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 0.8em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;

        ${props => props.variant === 'primary' && css`
            color: white;
            background-image: linear-gradient(to bottom right, #28256a,#5166b9);
            `};

        ${props => props.variant === 'secondary' && css`
            color: white;
            background-image: linear-gradient(to bottom left, #617cea, #617cea);
            box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
            `};     

        ${props => props.size === 'small' && css`
            font-size: 12px;
            padding: 12px 25px;
            `};

        ${props => props.size === 'medium' && css`
            font-size: 14px;
            padding: 15px 50px;
            `};

        ${props => props.size === 'large' && css`
            font-size: 16px;
            padding: 18px 75px;
            `};
        `;
