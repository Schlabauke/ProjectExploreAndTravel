import { FaFacebook, FaYoutubeSquare, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <footer>
            <section>
                <article>
                    <div className='circleoutside'>
                        <img src='/images/logologo.png' alt='logo' />
                    </div >
                    <p>
                        Plan and book your perfect trip with
                        expert advice, travel tips destination
                        information from us  </p>
                    <p>©2020 Thousand Sunny. All rights reserved</p>
                </article>
                <article>
                    <h2>Destinations</h2>
                    <p>Africa</p>
                    <p>Antarticta</p>
                    <p>Asia</p>
                    <p>Europe</p>
                    <p>America</p>
                </article>
                <article>
                    <h2>Shop</h2>
                    <p>Destination Guides</p>
                    <p>Pictorial & Gifts</p>
                    <p>Special Offers</p>
                    <p>Delivery Times</p>
                    <p>FAQ</p>
                </article>
                <article>
                    <h2>Interests</h2>
                    <p>Adventure Travel</p>
                    <p>Art And Culture</p>
                    <p>Wildlife And Nature</p>
                    <p>Family Holidays</p>
                    <p>Food And Drink</p>
                </article>
            </section>
            <section className='social'>

                <p><FaTwitter /></p>
                <p><FaFacebook /></p>
                <p><FaInstagram /></p>
                <p><FaLinkedinIn /></p>
                <p><FaYoutubeSquare /></p>

            </section>
        </footer >
    );
}

export default Footer;