import { Link } from 'react-router-dom'
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
                        <Link to={`/detail/${id}`} key={id}>
                            <h2>Mas info</h2>
                        </Link>
                        <img src={image} alt='img not found' height={200}/>

                    </div>
                </div>
        </div>
    )
}

export default Card;