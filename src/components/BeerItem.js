import PropTypes from 'prop-types'
import {Wrapper} from './BeerItem.styles'

function BeerItem({id, title, tagline, description, img }) {
    return (
        <Wrapper key={id}>
            <article>
                <h3>{tagline}</h3>
                <h1>{title}</h1>
                <p>{description}</p>
            </article>
            <img src={img}></img>
        </Wrapper>)
}

BeerItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    tagline: PropTypes.string, 
    description: PropTypes.string,
    img: PropTypes.string
}
export default BeerItem;