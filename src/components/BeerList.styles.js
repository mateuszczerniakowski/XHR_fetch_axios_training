import styled from 'styled-components';

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    div {
        text-align: left;
    }
    div:nth-child(even) {
        flex-direction: row-reverse;
        text-align: right;
    }
`
export const TitleWrapper = styled.article`
    max-width: 600px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 80px;
    h2 {
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
    p {
        color: ${({ theme }) => theme.colors.sand};
        letter-spacing: 2px;
        font-weight: 500;
        font-size: ${({ theme }) => theme.fontSize.l};
    }
    p:last-of-type {
        font-weight: 300;
        font-size: ${({ theme }) => theme.fontSize.m};
    } 

`