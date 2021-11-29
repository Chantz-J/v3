import React from 'react'
import styled from 'styled-components'
import Background from '../materials/Background'
import Navbar from './Navbar'
import { CSSReset } from '../styles/CSSReset'


const SiteWrapper = styled.div`
   position: absolute;
   color: white;
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
`;


export default function Layout(props){
    return (
        <>
        <CSSReset />
        <SiteWrapper>
            <Navbar />
            {props.children}
        </SiteWrapper>
        <Background/>
        </>
    )
}