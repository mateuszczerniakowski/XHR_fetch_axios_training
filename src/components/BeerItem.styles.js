import styled from 'styled-components';
export const Wrapper = styled.div`
    border-radius: 6px;
    margin: 200px 0;
    height: 50vh;
    width: 60vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -80px;
        left: 50%;
        transform: translateX(-50%);
        width: 10%;
        height: 1px;
        background-color: ${({theme})=>theme.colors.sand};
    }
    img {
        height: 70%;
        margin: 0 50px 0 10px;
        align-self: center
    }
    article {
        letter-spacing: 1px;
        color: ${({theme})=>theme.colors.sand};
        text-transform: uppercase;
        max-width: 400px;
        h1 {
            font-size: ${({theme})=>theme.fontSize.xl};
            color: ${({theme})=>theme.colors.white};
            margin-bottom: 5px;
            margin: 10px 0;
            opacity: .92;
        }
        h3{
            font-weight: 500;
            font-size: ${({theme})=>theme.fontSize.m};
            margin: 0;
        }
        p {
            font-size: ${({theme})=>theme.fontSize.m};
            letter-spacing: 1px;
            text-transform: initial;
            font-weight: 300;
            margin: 0;
            letter-spacing: 2px;
        }
    }
    
`