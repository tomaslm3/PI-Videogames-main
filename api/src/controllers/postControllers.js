const { Videogame, Genre } = require('../db.js');

const postVideogame = async function (name, description, released, rating, platforms, genres) {
    try {
        let newVideogame = await Videogame.create({
            name,
            description,
            released,
            rating,
            platforms
        });
        let selectGenres = await Genre.findAll({
            where: {
                name: genres
            }
        });
        await newVideogame.addGenres(selectGenres);
        return newVideogame
    } catch (error) {
        console.log('fallo postVideogame ' + error)
    }
};

module.exports = {
    postVideogame
};