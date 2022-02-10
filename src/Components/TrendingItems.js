import { v4 as uuidv4 } from 'uuid';
import TrendingData from '../data/TrendingData'
import TrendingTemp from './TrendingTemp'

const TrendingItems = () => {
    return (<article className="partnerimages">
        {
            TrendingData.map(elt =>
                <TrendingTemp
                    key={uuidv4()}
                    img={elt.img}
                    headline={elt.headline}
                    text={elt.text}
                    link={elt.link}
                />)
        }
    </article>);
}

export default TrendingItems;