const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.set('view engine', 'ejs');
const dburi = "mongodb+srv://n96uman:newman%401996@cluster0.fu2mrru.mongodb.net/?appName=Cluster0";
mongoose.connect(dburi);

app.listen(3000);

app.get('/', (req, res) => {
    console.log('request made');
    res.sendFile('./view/index.html', {root: __dirname});
});

app.get('/home', (req, res) => {
    console.log('request made');
    res.sendFile('/index.html', {root: __dirname});
}
