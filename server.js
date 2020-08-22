const express = require('express');
const app = express();

const mockUserData = [
    {name: 'Utsav'},
    {name: 'Ladani'}
]

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

app.listen(8000, function () {
    console.log("server is running")
})