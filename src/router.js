const { Router } = require('express')
const { get } = require('./controller/cepController')

const router = Router()

router.get('/cep', get)

module.exports = router