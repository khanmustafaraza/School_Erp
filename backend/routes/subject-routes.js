const { Router } = require('express');
const router = Router();

router.get('/create-subject', )

router.post('/', async(req, res) => {
    try {
        let apps = new Apps({
            key:value
        })
        apps = await apps.save()
        res.send(apps)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const apps = await Apps.findById(req.params.id)
        res.send(apps)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.put('/:id', async(req, res) => {
    try {
        const apps = await Apps.findByIdAndUpdate(req.params.id, {
            key:value
        },{new: true})
        res.send(apps)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const apps = await Apps.findByIdAndDelete(req.params.id)
        res.send(apps)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router