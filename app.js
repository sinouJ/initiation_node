const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// routes
const router = require('./routes/index').router
app.use('', router)

app.set('view engine', 'ejs')

app.listen(port, () => {
    console.log(`le server écoute sur le port ${port}`)
})
