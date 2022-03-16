const {Router} = require('express');
const { getVideogameById } = require('../controllers/getControllers')
const { postVideogame } = require('../controllers/postControllers')
const router = Router();

router.get('/:id', async function (req, res) {
    const { id } = req.params;
    try {
        const gameById = await getVideogameById(id);
        if(gameById){
            res.status(200).send(gameById);
        }else {
            res.status(404).send('Juego no encontrado')
        }
    } catch(error) {
        console.log('Error gameById ' + error)
    };
});

router.post('/', async function(req, res) {
    const { name, description, released, rating, platforms, genres} = req.body;
    try {
        const createVideogame = await postVideogame(name, description, released, rating, platforms, genres)
        if(createVideogame){
            res.status(200).send(createVideogame)
        } else {
            res.status(404).send('Error al crear el juego')
        }
    } catch (error) {
        console.log('Error createVideogame ' + error)
    }
})


module.exports = router;