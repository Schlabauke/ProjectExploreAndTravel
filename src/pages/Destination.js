import DestinationItem from "../Components/DestinationItem";
import Herosection from "../Components/Herosection";

const Destination = () => {
    return (
        <main className='Home'>
            <Herosection />
            <section className='trending'>
                <h2>Featured destinations</h2>
                <DestinationItem />
            </section>
        </main>
    );
}

export default Destination;