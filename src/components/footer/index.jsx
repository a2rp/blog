import React from 'react'
import { Styled } from './styled'

const Footer = () => {
    return (
        <Styled.Footer>
            <Styled.FooterMain>
                <Styled.FooterCol>
                    &copy; {new Date().getFullYear()} | All Rights Reserved.
                </Styled.FooterCol>
                <Styled.FooterCol>
                    By <a href="https://www.ashishranjan.net/" target="_blank" rel="noreferrer">Ashish Ranjan</a>
                </Styled.FooterCol>
            </Styled.FooterMain>
        </Styled.Footer>
    )
}

export default Footer
