const fileModel = require("./models/file");
const path = require('path');
class AppRouter {

    constructor(app) {
        this.app = app;
        this.setupRouters();
    }

    setupRouters() {
        const app = this.app;
        const uploads = app.get('upload');
        app.post('/api/uploads',uploads.array('files'),(req,res,next) => {
            console.log('Files uploaded',req.files);
            const file = req.files;
            res.json({
                file : file
            })
        
            for(let i = 0;i< req.files.length;i++)
            {
                var newFiles = new fileModel({
                    name : req.files[i].filename,
                    originalName : req.files[i].originalname,
                    mimeType : req.files[i].mimetype,
                    size : req.files[i].size,
                    created : Date.now()
                })

                newFiles.save((err,file) => {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        console.log("saved",file);
                    }
                })
            }
        })

        //Downloading Routing
        const uploadDir = app.get('storageDir');

        app.get('/api/download/:name', (req,res) => {
            var name = req.params.name;

            fileModel.findOne({name}, (err,file) => {
                if(err) {
                    res.status(404).json({
                        "error" : "Could not find the file"
                    })
                }
                else {
                    const filePath = path.join(uploadDir,name);
                    return res.download(filePath,name, (err) => {
                        if(err) {
                            return res.status(404).json({
                                "error" : "File not found"
                            })
                        }
                        else {
                            console.log("File is downloading",file);
                            res.status(200).json({
                                "success" : "File downloaded"
                            })
                        }
                    })
                }
            })
        })
    }
}

module.exports = AppRouter;