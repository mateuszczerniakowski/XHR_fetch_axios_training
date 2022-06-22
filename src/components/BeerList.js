import BeerItem from './BeerItem';
import { useEffect, useState } from 'react';
import { MainWrapper, TitleWrapper } from './BeerList.styles';

const API_URL = 'https://api.punkapi.com/v2/beers'

function BeerList() {
    const [beerItems, setBeerItems] = useState([])

    const error = (error) => {
        console.error(error);
    }
    const success = (data) => {
        setBeerItems(data)
    }
    useEffect(()=>{
        fetch(API_URL)
        .then(res => res.json())
        .then(success)
        .catch(error)
    },[])

    return (
        <MainWrapper>
            <TitleWrapper>
                <p>MENU</p>
                <h2>We want to give you incredible experience</h2>
                <p>This place is an expression of our great love for tradition,
                    which has developed around the peculiarities and character of beer.
                    It is not only a place of worship.</p>
            </TitleWrapper>
            <div>
                {beerItems.map(item => {
                    return <BeerItem key={item.id} title={item.name} tagline={item.tagline} description={item.description} img={item.image_url}></BeerItem>
                })}
            </div>
        </MainWrapper>)
}

export default BeerList;