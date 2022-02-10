import Herosection from "../Components/Herosection";


const Home = () => {
    return (
        <main className='Home'>
            <Herosection />
            <article className='HomeArticle'>
                <div>
                    <img src='../images/balloon.png' alt='woman with baloon' />
                </div>
                <article>
                    <h2>A new way to explore the world </h2>
                    <p>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect
                        trip, but now, they can also let Lonely Planet Experiences lead the way</p>
                    <button>Learn More</button>
                </article>
            </article>
        </main>

    );
}

export default Home;