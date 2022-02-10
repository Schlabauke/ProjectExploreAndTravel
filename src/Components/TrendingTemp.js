const TrendingTemp = (props) => {
    return (<article>
        <div>
            <img className="trendingStoriesImg" src={props.img} alt={props.headline} />
        </div>
        <h3>{props.headline}</h3>
        <p>{props.text}</p>
        <a href={props.link}>Read More...</a>
    </article>
    )
}

export default TrendingTemp;