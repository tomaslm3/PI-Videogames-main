import Card from "../card/Card";

function Cards({allVideogames}) {
    return(
        <div>
            {allVideogames.map(game => {
                return(
                    <Card
                    key={game.id}
                    id={game.id}
                    name={game.name}
                    image={game.image}
                    genres={game.genres}
                    rating={game.rating}
                    platforms={game.platforms}/>
                )
            })}
        </div>
            
        
    )
}

export default Cards;