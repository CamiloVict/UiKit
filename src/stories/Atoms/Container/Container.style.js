import styled from "styled-components";

export const StyledContainer = styled.div`
    width: ${(props) => props.width || '300px'};
    height: ${(props) => props.height || '200px'};
    display: flex;
    align-items: center;
    justify-content: center;
`;