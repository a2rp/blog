import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('../pages/home'))
const Blog = lazy(() => import('../pages/blog'))
const About = lazy(() => import('../pages/about'))
const NotFound = lazy(() => import('../pages/notFound'))

const AppRoutes = () => {
    return (
        <>
            <Suspense fallback={<div className="routeLoading" role="status" aria-label="Loading page">
                <span className="routeLoadingSpinner" />
            </div>}>
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

