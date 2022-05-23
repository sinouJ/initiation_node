const user_data = require('../data/user_data.json')

module.exports = {
    getHome: (req, res) => {

        res.render('index', {
            title: 'Home',
            username: 'John Doe',
            users: users
        })
    },
}