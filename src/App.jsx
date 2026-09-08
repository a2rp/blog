import { useState } from 'react'
import { Styled } from './App.styled'
import Footer from './components/footer'
import Header from './components/header'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'
import AppRoutes from './routes/AppRoutes'
import NavList from './components/navlist'

const App = () => {
    const [displaySlider, setDisplaySlider] = useState(false);
    const handleSliderButtonClick = () => {
        setDisplaySlider(prev => !prev);
    };
    // useEffect(() => {
    //     console.log("display slider", displaySlider);
    // }, [displaySlider]);

    return (
        <>
            <Styled.Wrapper>
                <Header handleSliderButtonClick={handleSliderButtonClick} />
                <Styled.Layout>
                    <Styled.Sidebar aria-label="Blog navigation">
                        <NavList />
                    </Styled.Sidebar>
                    <Styled.Content>
                        <Styled.Main>
                            <ScrollToTop />
                            <AppRoutes />
                        </Styled.Main>
                        <Footer />
                    </Styled.Content>
                </Styled.Layout>
            </Styled.Wrapper>
            <ScrollToTopButton threshold={101} />

            {displaySlider && <>
                <Styled.SliderWrapper>
                    <div className="empty" onClick={handleSliderButtonClick}></div>
                    <div className="navlistWrapper">
                        <NavList />
                    </div>
                </Styled.SliderWrapper>
            </>}
        </>
    )
}

export default App
