const axios = require('axios');
const { Op } = require('sequelize');
const { Videogame, Genre } = require('../db.js');
const { APIKEY } = process.env;

const getVideogames = async () => {
    try {
        let dbInfo = await Videogame.findAll({ include: {model: Genre, attributes: ['name'], through: { attributes: [] }} });
        let apiInfo = await axios.get(`https://api.rawg.io/api/games?key=${APIKEY}`)
        dbInfo = dbInfo.map(game => {
            return {
                id: game.id,
                // image: game.image,
                name: game.name,
                genres: game.genres.map(genre => genre.name),
                rating: game.rating,
                platforms: game.platforms.map(platform => platform)
            }
        })
        apiInfo = apiInfo.data.results.map(game => {
            return {
                id: game.id,
                image: game.background_image,
                name: game.name,
                genres: game.genres.map(genre => genre.name),
                rating: game.rating,
                platforms: game.platforms.map(platform => platform.platform.name)
            }})
        let allGames = [...dbInfo, ...apiInfo]
        return allGames
    } catch (error) {
        console.log("Error getVideogames " + error)
    };
};

const getVideogamesByName = async (name) => {
    try {
        let dbInfo = await Videogame.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                },
            },
            include: {
                model: Genre,
                attributes: ["name"],
                through: {
                    attributes: [],
                },
            },
        });
        dbInfo = dbInfo.map(game => {
            return{
                id: game.id,
                // image: game.image,
                name: game.name,
                genres: game.genres.map(genre => genre.name),
                rating: game.rating,
                platforms: game.platforms.map(platform => platform)
            }
        })
        let apiInfo = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${APIKEY}`)
        apiInfo = apiInfo.data.results.map(game => {
            return {
                id: game.id,
                image: game.background_image,
                name: game.name,
                genres: game.genres.map(genre => genre.name),
                rating: game.rating,
                platforms: game.platforms.map(platform => platform.platform.name)
            };
        });
        let allGames = [...dbInfo,...apiInfo]
        return allGames.splice(0, 15)
    } catch(error) {
        console.log('Error getVideogamesByName ' + error)
    };
};

const getVideogameById = async (id) => {
    if(id.toString().includes('-')){
        try {
            let dbInfo = await Videogame.findAll({
                where: {
                    id: id,
                },
                include: {
                    model: Genre,
                    attributes: ["name"],
                    through: {
                      attributes: [],
                    },
                  },
            });
            let dbGame = dbInfo.map(game => {
                return{
                    // id: game.id,
                    name: game.name,
                    // image: game.image,
                    genres: game.genres.map(genre => genre.name),
                    rating: game.rating,
                    description: game.description,
                    released: game.released,
                    platforms: game.platforms.map(platform => platform)
                }
            })
            return dbGame[0]
        } catch(error){
            console.log('Error getVideogameByid en DB ' + error)
        };
    };
        try {
            let apiInfo = await axios.get(`https://api.rawg.io/api/games/${id}?key=${APIKEY}`)
            let game = apiInfo.data
            let gameData = {
                name: game.name,
                image: game.background_image,
                genres: game.genres.map(genre => genre.name),
                rating: game.rating,
                description: game.description_raw,
                released: game.released,
                platforms: game.platforms.map(platform => platform.platform.name)
            }
            return gameData
        } catch (error) {
            console.log('Error getVideogameById en Api' + error)
        };
}

const getGenres = async () => {
    try {
        let dbInfo = await Genre.findAll();
        if(!dbInfo.length){
            let apiInfo = await axios.get(`https://api.rawg.io/api/genres?key=${APIKEY}`)
            let genres = apiInfo.data.results.map(genre => {
                return {name: genre.name}
            });
            await Genre.bulkCreate(genres)
            return(genres)
        }
        return(dbInfo)
    } catch(error) {
        console.log('Error getGenres ' + error)
    }
}

module.exports = {
    getVideogames,
    getVideogamesByName,
    getVideogameById,
    getGenres,
};