require('./server/index.js');
app.get('/', (req, res) => {
    res.sendStatus(200)
})