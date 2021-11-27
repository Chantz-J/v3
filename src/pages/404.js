import React from 'react'
import { Link } from 'gatsby'

export default function NotFound(){
    return (
        <>
        <h1>404</h1>
        <h2>You just hit a route that does not exist. The sadness...</h2>
        <Link to='/'><p>Go Home</p></Link>
        </>
    )
}