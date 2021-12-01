import styled from 'styled-components';

export const StyledHeader = styled.header`
    z-index: 3;
    position: fixed;
    top: 0px;
    width: 100%;
    padding: 16px 0px;
    // border-bottom: 1px solid rgb(237, 242, 249);
    // backdrop-filter: saturate(180%) blur(20px);
    background-color: #fff;
    color: rgb(29, 25, 41);
`;



export const Inner = styled.div`
    margin: 0 auto;
    max-width: 1040px;
    width: 100%;
`;

export const Nav = styled.nav`
z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 64px;
    font-size: 1.3rem;
`;

export const FlexWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 64px;
    font-size: 1.3rem;
`;

export const LeftWrap = styled.div`
    position: relative;
    flex: 1 0 auto;
    display: flex;
`;

export const RightWrap = styled.div`
    flex: 0 1 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 0;
    height: 64px;
`;

export const Left = styled.div`
flex: 1 0 auto;
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    margin-right: 10px;
    padding: 10px 0 80px;
    font-weight: 500;
    letter-spacing: .2px;
    text-transform: uppercase;
    white-space: nowrap;
    -ms-overflow-scrollin
`;

export const Logo = styled.a`
position: relative;
    flex-shrink: 0;
    display: inline-block;
    margin-right: 32px;
    padding: 12px 0;
    color: #fff;
    font-size: 1.7rem;
    line-height: 1.8rem;
    font-weight: 700;
    letter-spacing: -.5px;
    text-transform: none;
`;

export const LeftContent = styled.div`
    position: relative;
    align-self: flex-start;

    ul {
        position: absolute;
        display: flex;
        margin: 0 0 0 -12px;
        padding: 0;
        list-style: none;
        transition: all 1s cubic-bezier(.19,1,.22,1);
    }
`;