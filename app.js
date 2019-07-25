const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hey, I\'m a Node.js app!');
    res.end();
})

app.listen(3000, () => {
    console.log('Server is up on 3000')
})
