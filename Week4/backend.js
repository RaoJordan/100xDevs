const express = require('express');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.get('/sum', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;

    let ans = parseInt(a) + parseInt(b);
    res.send(ans.toString());
})

app.get('/interest', (req, res) => {
    const p = parseFloat(req.query.p);
    const r = parseFloat(req.query.r);
    const t = parseFloat(req.query.t);
    
    const ans = (p*r*t)/100
    const amount = ans + p

    res.json({
        Amount : amount,
        Interest : ans
    })
})


app.listen(5000);