const express = require('express')
const router = express.Router()
const { GET } = require('../controlers/goals')

router.get('/', GET)

router.post('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: "Add new Goal"
    })
})

router.put('/:id', (req, res) => {
    res.status(200).json({
        status: true,
        message: "Edit Goal " + req.params.id
    })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({
        status: true,
        message: "Delete Goal " + req.params.id
    })
})

module.exports = router