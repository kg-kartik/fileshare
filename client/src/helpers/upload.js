import axios from "axios"
var apiUrl = require("../config");

export const upload = (form, callback = () => {}) => {
    const url = `${apiUrl}/uploads`;

    let data = new FormData();
    let files = form.files;
    files.forEach((file) => {
        data.append("files",file);
    })
    //appends new key/pair and values to the instance of FormData
    // Object.keys(form).forEach((key) => data.append(key,form.key));
    data.append('sendTo',form.sendTo);
    data.append('from',form.from);
    data.append('mesage',form.mesage);

    const config= {
        onUploadProgress : (event) => {
            console.log("Upload event",event);
            return callback({
                type : 'onUploadProgress',
                payload : 'event'
            })
        }
    }

    axios.post(url,data,config,{headers:{"Content-Type" : "application/json"}}).then((response) => {

        //upload successfull
        return callback({
            type : 'success',
            payload : response.data
        })
    }).catch((err) => {

        return callback({
            type : 'error',
            payload : err
        })
    })
}

