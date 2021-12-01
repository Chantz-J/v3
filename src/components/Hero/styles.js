import styled from 'styled-components';

export const HeroWrapper = styled.div`
    padding-top: 20rem;
    padding-bottom: 3em;
    margin-bottom: 6em;
    max-width: 1140px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    z-index: 3;
    display: none;

    h1 {
        font-size: 2.8em;
        line-height: 1.45;
        font-weight: 800;
        backdrop-filter: saturate(180%) blur(20px);
        padding: 2rem;
        border-radius: 45px;
    }
`;

