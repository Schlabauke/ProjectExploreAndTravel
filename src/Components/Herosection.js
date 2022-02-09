const Herosection = () => {
    return (
        <section className='HeroSection'>
            <article>
                <h1>Explore and Travel</h1>
                <p>Holiday finder</p>
                <p>___</p>
                <article className='select'>
                    <select name='Location' value='Location' placeholder='Location'>
                        <option value='Location'>Location</option>
                    </select>
                    <select name='Activity' placeholder='Activity'>
                        <option value='Activity'>Activity</option>
                    </select>
                </article>
                <div>
                    <select type='number' name='Grade' placeholder='Grade'>
                        <option value='Grade'>Grade</option>
                    </select>
                    <select type='date' name='Date' placeholder='Date'>
                        <option value='Date'>Date</option>
                    </select>
                </div>
                <button>Explore</button>
            </article>
            <article className='sectionImg'>
                <img src='../images/world.png' alt='Guy walking with Starun in the back' />
            </article>
        </section>);
}

export default Herosection;