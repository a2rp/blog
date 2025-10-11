import { Box, CircularProgress } from '@mui/material'
import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const Home = lazy(() => sleep(0).then(() => import('../pages/home')))
const Blog = lazy(() => sleep(0).then(() => import('../pages/blog')))
const About = lazy(() => sleep(0).then(() => import('../pages/about')))
const NotFound = lazy(() => sleep(0).then(() => import('../pages/notFound')))

const AppRoutes = () => {
    return (
        <>
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
        </>
    )
}

export default AppRoutes

