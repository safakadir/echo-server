const express = require('express')
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const provideResponse = (req) => {
    return {
        method: req.method,
        headers: req.headers,
        body: req.body,
        path: req.path,
        queryParams: req.queryParams
    }
}

app.get('/', (req, res) => {
    res.send("Hello from the echo server!");
})

app.get('/get', (req, res) => {
    res.json(provideResponse(req));
});
app.post('/post', (req, res) => {
    res.json(provideResponse(req));
});
app.put('/put', (req, res) => {
    res.json(provideResponse(req));
});
app.patch('/patch', (req, res) => {
    res.json(provideResponse(req));
});
app.delete('/delete', (req, res) => {
    res.json(provideResponse(req));
});

app.listen(port, () => console.log(`Echo server listening on port ${port}!`));
