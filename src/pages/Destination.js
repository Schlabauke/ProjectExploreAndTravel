import Herosection from "../Components/Herosection";

const Destination = () => {
    return (
        <section className='Home'>
            <Herosection />
            <h2>Featured destinations</h2>
            <article>
                <img src='/images/image 4.png' alt='island' />
                <img src='/images/Fels.png' alt='Fels' />
                <img src='/images/city.png' alt='city' />
                <img src='/images/felszwei.png' alt='felszwei' />
            </article>
        </section>
    );
}

export default Destination;