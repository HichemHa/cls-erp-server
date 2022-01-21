const express = require("express");

const app = express();
app.use(express.json());

const connectDB = require("./config/connectDB");
const api =  require('./routes/api')
const user = require('./routes/user')
const company = require('./routes/company')
const category = require('./routes/category')
const product = require('./routes/product')
const client = require('./routes/client')
const devis = require('./routes/devis')
var cors = require('cors')

connectDB();

const apiurl = '/api/v1';

app.use(cors())

app.use('/',api);
app.use(`${apiurl}/user`,user);
app.use(`${apiurl}/company`,company);
app.use(`${apiurl}/category`,category);
app.use(`${apiurl}/product`,product);
app.use(`${apiurl}/client`,client);
app.use(`${apiurl}/devis`,devis);

const PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
  err
    ? console.log("error connexion server", err)
    : console.log(`server is running on port ${PORT}`);
});
