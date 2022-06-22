import PropTypes from 'prop-types'
import BarImage from '../assets/bar.jpeg'
import styled from 'styled-components'
import { theme } from '../styles/theme'

const Wrapper = styled.div`
    width: 100vw;
    max-width: 1920px;
    height: 100vh;
    max-height: 1280px;
    position: relative;
    background-image: url(${BarImage});
    background-position: center;
    margin: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    h1 {
        margin: 0;
        font-size: ${({ theme }) => theme.fontSize.xl};
        span {
            font-size: ${({ theme }) => theme.fontSize.xxl};
        }
    }
`

function WelcomePage(props) {
    return (
        <Wrapper>
            <h1><span>HANDCRAFTED</span><br /> BEERS MENU</h1>
        </Wrapper>
    )
}

WelcomePage.propTypes = {}
export default WelcomePage;