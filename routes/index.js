const express = require('express')

const testController = require('../controllers/testController')

exports.router = ( () => {
    const router = express.Router()

    router.route('/').get(testController.getHome)

    return router
})()
