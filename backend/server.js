const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const AppRouter = require('./routes');
const db = require('./config/keys').MongoURI;

//File Storage Config 
const storageDir = path.join(__dirname,'backend','..','storage');
console.log(storageDir);

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, storageDir)
    },
    filename: (req, file, cb)  => {
      cb(null, Date.now() + path.extname(file.originalname))
    }
  })

  const upload = multer({ storage: storageConfig });


mongoose.connect(db, {useNewUrlParser : true,
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

// app.use(cors,({
//     exposedHeaders : '*'
// }))

app.use(morgan('dev'));

// Maximum request body size
app.use(bodyParser.json({
    limit : '50mb'
}))

//Setting variables to be used in other files
app.set('storageDir',storageDir);
app.set('upload',upload);

//Initiliazing rOUTER
new AppRouter(app);
  
app.listen(PORT, console.log(`Server started on ${PORT}`));