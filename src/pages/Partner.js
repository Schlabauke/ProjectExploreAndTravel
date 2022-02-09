import Herosection from "../Components/Herosection";
import { FaStar } from 'react-icons/fa';
const Partner = () => {
    return (
        <section className='Home'>
            <Herosection />
            <h2>Testimonials</h2>
            <section className='partner'>
                <article>
                    <div> <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                    </div>
                    <p>“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</p>
                    <p>Edward Newgate</p>
                    <p>Founder Circle</p>
                </article>
                <div>
                    <img src='/images/image 6.png' alt='Guy' />
                </div>
            </section>
            <section>
                <h2>Trending Stories</h2>
                <article>
                    <img src='' alt='' />
                    <h3>The many benefits of
                        taking a healing holiday</h3>
                    <p>‘Helaing holidays’ are on the rise
                        tohelp maximise your health and happines...</p>
                    <p>Read More</p>
                </article>
            </section>
        </section>
    );
}

export default Partner;