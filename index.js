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

const reqHandler = (req, res) => {
    const responseBody = provideResponse(req);
    console.log(`\nNew Request: ${new Date()}\n${JSON.stringify(responseBody, null, 3)}`);
    res.json(responseBody);
};

app.get('/', (req, res) => {
    res.send("Hello from the echo server!");
})

app.get('/get', reqHandler);
app.post('/post', reqHandler);
app.put('/put', reqHandler);
app.patch('/patch', reqHandler);
app.delete('/delete', reqHandler);

app.listen(port, () => console.log(`Echo server listening on port ${port}!`));
