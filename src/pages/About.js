import Herosection from "../Components/Herosection";

const About = () => {
    return (
        <section className='Home'>
            <Herosection />
            <article className='HomeArticle'>
                <article>
                    <h2>Guides by Thousand Sunny</h2>
                    <p>Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.</p>
                    <button>Downloads</button>
                </article>
                <div>
                    <img src='../images/walking.png' alt='woman with baloon' />
                </div>
            </article>
        </section>
    );
}

export default About;