import React from 'react';
import { StyledHeader, 
        Inner,
        Nav,
        FlexWrap,
        LeftWrap,
        RightWrap,
        Logo,
        LeftContent } from './styles';


export default function Navbar(){
    return (
        <StyledHeader>
            <Inner>
                <Nav>
                    <FlexWrap>
                        <LeftWrap>
                            <Logo>CJ</Logo>
                            <LeftContent><ul><li>test</li><li>test</li><li>test</li></ul></LeftContent>
                        </LeftWrap>
                        <RightWrap></RightWrap>
                    </FlexWrap>
                </Nav>
            </Inner>
        </StyledHeader>
    );
};
