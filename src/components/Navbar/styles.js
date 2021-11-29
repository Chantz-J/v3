import styled from 'styled-components';

export const StyledHeader = styled.header`
    z-index: 3;
    position: fixed;
    top: 0px;
    width: 100%;
    padding: 16px 0px;
    // border-bottom: 1px solid rgb(237, 242, 249);
    backdrop-filter: saturate(180%) blur(20px);
    color: rgb(29, 25, 41);
`;

export const Outer = styled.div`
    display: flex;
    width: 100%;
    max-width: 1140px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Nav = styled.nav`
    height: auto;
    opacity: 1;
    display: flex;
    font-size: 16px;
    color: white;
`;