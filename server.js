const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express()
const convert = require('xml-js')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/api/getXml', (req, res) => 
{
console.log(req.body);
var text = convert.json2xml(req.body, {compact: true, spaces: 4});
console.log('rtesss', text);

res.setHeader('Content-Type', 'application/json');

return res.send({data: text});
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))