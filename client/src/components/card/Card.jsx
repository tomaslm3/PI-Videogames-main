const Card = ({id, name, image, genres, rating, platforms}) => {
    return(
        <div className="card">
                <div key={id}>
                    <h1>{name}</h1>
                    <div>
                        <ul>
                        {genres.map(genre => {
                            return (
                                <li key={genre}>{genre}</li>
                            )
                        })}
                        </ul>
                        <img src={image} alt='img not found' height={200}/>

                    </div>
                </div>
        </div>
    )
}

export default Card;