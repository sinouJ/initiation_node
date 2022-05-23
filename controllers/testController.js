const user_data = require('../data/users.json')
const fetch = require('node-fetch')

module.exports = {
    getHome: async (req, res) => {

        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        const response = await data.json()
        
        console.log(response)
        
        const users = user_data.filter(user => {
            return user.age > 25
        })

        res.render('index', {
            title: 'Home',
            username: 'John Doe',
            users: users,
        })
    },
}