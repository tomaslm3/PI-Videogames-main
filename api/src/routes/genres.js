const {Router} = require('express');
const { getGenres } = require('../controllers/getControllers');
const router = Router();

router.get('/', async function (req, res) {
    try {
        const genres = await getGenres();
        res.send(genres);
    } catch(error){
        console.log('Error getGenres en el llamado ' + error)
    }
})

module.exports = router;