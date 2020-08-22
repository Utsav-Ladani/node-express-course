const express = require('express');
const bodyParser = reqiure('body-parser');
const app = express();

app.use(bodyParser.json())

const mockUserData = [
    {name: 'Utsav'},
    {name: 'Ladani'}
]

const username = 'Utsav';
const password = 'Utsav';

app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: 'successfully done!',
        users: mockUserData
    })
})

app.get('/users-:id', (req, res) => {
    res.json({
        success: true,
        message: 'Dynamic GET route',
        user: req.params.id
    })
})

app.post('/login', (req, res) => {
    if (req.body.username == username && req.body.password == password) {
        res.json({
            success: true,
            message: 'login successfuly'
        })
    }
    else {
        res.json({
            success: false,
            message: 'login failed'
        })
    }
})

app.listen(8000, function () {
    console.log("server is running")
})