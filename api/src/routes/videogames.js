const { Router } = require('express')
const { getVideogames, getVideogamesByName } = require('../controllers/getControllers')
const router = Router()

router.get('/', async function(req, res) {
    const { name } = req.query;
    try {
        if(name){
            const byNameXV = await getVideogamesByName(name);
            if(byNameXV){
                res.status(200).send(byNameXV)
            } else {
                res.status(404).send('No se encontro el juego')
            }
        } else {
            const allGames = await getVideogames();
            res.status(200).send(allGames)
        }
    } catch (error) {
        console.log('Error getVideogames en el llamado ' + error)
    }
})

module.exports = router
