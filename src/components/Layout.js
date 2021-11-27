import React from 'react'
import Background from '../materials/Background'
import { CSSReset } from '../styles/CSSReset'

export default function Layout(props){
    return (
        <>
        <CSSReset />
        <Background>
            {props.children}
        </Background>
        </>
    )
}