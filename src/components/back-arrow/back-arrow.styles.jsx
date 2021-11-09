import styled from 'styled-components';

export const BackArrowContainer = styled.button`
    border: 1px solid transparent;
    font-size: 1.4rem;
    background: transparent;
    cursor: pointer;
    color: #000;
    &:hover {
          color: #34568b;
          text-decoration: underline;
          transform: scale(1.02);
    }
`;