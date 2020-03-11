const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser : true,
    useUnifiedTopology: true})
.then(() => console.log('Database connected'))
.catch((err) => {
    console.log(err);
})
const PORT = process.env.PORT || 5000;

//for url encoding
app.use(express.urlencoded({
    extended : false
}));

app.use(cors,({
    exposedHeaders : '*'
}))

app.use(morgan('dev'));

//Maximum request body size
app.use(bodyParser.json({
    limit : '50mb'
}))


app.listen(PORT, console.log(`Server started on ${PORT}`));