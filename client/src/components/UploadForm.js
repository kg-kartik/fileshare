import React, {Component} from "react"
import InputGroup from "./reusable/InputGroup"
import TextAreaGroup from "./reusable/TextArea"

class UploadForm extends Component {
    state = {
        form : {
            sendTo : "",
            from  : "",
            message : "",
            files : []
        },
        errors : {
        }
    }
    
    onChange = (e) => {
        const {form} = this.state;
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        
        form[fieldName] = fieldValue; //Array Destructuring
        this.setState({
            form : form
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.form);
    }

    onChangeFile = (e) => {
        const file = this.state.form.files;
        const files = e.target.files;

        Object.keys(files).forEach(key => {
            file.push(files[key]);
        })
        
        this.setState({
            form : {
                ...this.state.form,
                files : file
            }
        })
        console.log(this.state)
    } 
     
    onDeleteItem = (key) => {
        const files = this.state.form.files;
        files.splice(key,1);
        this.setState({
            ...this.state,
            files
        })
    }
    render() {
        const items = Object.keys(this.state.form.files).map((key, index) => (
          <div className="file_content" key={key}>
            <div className="file_name">
              {this.state.form.files[key].name}
            </div>
            <button
                className="delete_button"
                onClick={() => this.onDeleteItem(key)}
              > X
            </button>
            </div>
        ));

        return (
        <div className="uploadForm container">
          <form className="landing_form" onSubmit={this.onSubmit}>
            <div class="main_form_top">
                <div className="selected_files">{items}</div>
                
                <div className="input_file_div">
                    <label htmlFor={"input-file"}>
                    <input
                        type="file"
                        multiple={true}
                        id="input-file"
                        className="input-file"
                        onChange={this.onChangeFile}
                    />
                    <i className="fa fa-upload text-center" aria-hidden="true"> <br></br>
                    {this.state.form.files.length === 0 && (
                        <span className="upload_files_here text-center">
                        Upload Files Here
                        </span>
                    )}
                    {this.state.form.files.length > 0 && (
                    <span className="add_files">
                        Add More Files
                    </span>
                )}
                    </i>
                    </label>
                </div>
                </div>
                <div className="main_form">
                <InputGroup
                    placeholder="Send To"
                    name="sendTo"
                    type="email"
                    value={this.state.form.sendTo}
                    onChange={this.onChange}
                    label="Receiver's Email"
                    error={this.state.sendToError}
                    />
                <InputGroup
                    placeholder="From"
                    name="from"
                    type="email"
                    value={this.state.form.from}
                    onChange={this.onChange}
                    label="Sender's Email"
                    error={this.state.fromError}
                />
                <TextAreaGroup
                    placeholder="Type your message"
                    name="message"
                    value={this.state.form.message}
                    onChange={this.onChange}
                    info="Message"
                />
                <button type="submit" className=" send_button btn btn-primary btn-lg btn-block"> Send Files</button>
            </div>
            </form>   
        </div>
        )
    }
}

export default UploadForm