const express = require('express');
const router = express.Router();

    AppRouter = (app) =>  {
        
        const uploads = app.get('upload');
        router.post('/api/uploads',uploads.single('files'),(req,res,next) => {
            console.log('File uploaded',req.file);
        })
    }



module.exports = AppRouter