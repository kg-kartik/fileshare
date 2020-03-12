const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const AppRouter = require('./routes');

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


mongoose.connect('mongodb://127.0.0.1:27017/fileshare', {useNewUrlParser : true,
    useUnifiedTopology: true})
.then(() => console.log('Database connected'))
.catch((err) => {
    console.log(err);
})
const PORT = process.env.PORT || 3000;

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

//Routes
// app.use('/',AppRouter);

    //Uploading Routing
    const uploads = app.get('upload');
    app.post('/api/uploads',uploads.single('files'),(req,res,next) => {
            console.log('Files uploaded',req.file);
            const file = req.file;
            res.json({
                file : file
            })
    })

    //Downloading Routing
    const uploadDir = app.get('storageDir');

    app.get('/api/download/:name', (req,res) => {
        const fileName  = req.params.name;
        const filePath = path.join(uploadDir,fileName);

        return res.download(filePath,fileName, (err) => {
            if(err) {
                return res.status(404).json({
                    "error" : "File not found"
                })
            }
            else {
                console.log("File is downloading");
                res.status(200).json({
                    "success" : "File downloaded"
                })
            }
        })

    })
app.listen(PORT, console.log(`Server started on ${PORT}`));

