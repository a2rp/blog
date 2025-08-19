import { Box, CircularProgress } from '@mui/material'
import { lazy, Suspense } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { Styled } from './App.styled'
import ScrollToTop from './components/ScrollToTop'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const Home = lazy(() => sleep(800).then(() => import('./pages/home')))
const Blog = lazy(() => sleep(800).then(() => import('./pages/blog')))
const About = lazy(() => sleep(800).then(() => import('./pages/about')))
const NotFound = lazy(() => sleep(800).then(() => import('./pages/notFound')))

const App = () => {
    return (
        <>
            <Styled.Wrapper>
                <Styled.Header>
                    <Styled.HeaderMain>
                        <Styled.NavLink to="/">Home</Styled.NavLink>
                        <Styled.NavLink to="/about">About</Styled.NavLink>
                    </Styled.HeaderMain>
                </Styled.Header>
                <Styled.Main>
                    <ScrollToTop />
                    <Suspense fallback={<Box sx={{
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <CircularProgress />
                    </Box>}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/:slug" element={<Blog />} />
                            <Route path="/about" element={<About />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </Styled.Main>
                <Styled.Footer>
                    <Styled.FooterMain>
                        <Styled.FooterCol>
                            &copy; {new Date().getFullYear()} | All Rights Reserved.
                        </Styled.FooterCol>
                        <Styled.FooterCol>
                            crafted with ♥ by <a href="https://www.ashishranjan.net" target="_blank">Ashish Ranjan</a>
                        </Styled.FooterCol>
                    </Styled.FooterMain>
                </Styled.Footer>
            </Styled.Wrapper>
        </>
    )
}

export default App
