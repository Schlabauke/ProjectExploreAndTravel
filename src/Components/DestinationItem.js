import { v4 as uuidv4 } from 'uuid';
import FeaturedData from '../data/FeaturedData'
import DestinationTemp from './DestinationTemp'
const DestinationItem = () => {
    return (
        <article className="destinationImages">
            {
                FeaturedData.map(elt =>
                    <DestinationTemp
                        key={uuidv4()}
                        img={elt.img}
                        location={elt.location}
                        country={elt.country}
                    />)
            }
        </article>
    );
}

export default DestinationItem;