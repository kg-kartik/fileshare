import React, {Component} from "react"
import InputGroup from "./reusable/InputGroup"
import TextAreaGroup from "./reusable/TextArea"

class UploadForm extends Component {
    state = {
        form : {
            sendTo : "",
            from  : "",
            message : "",
        },
        files : "",
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
     
    render() {
        return (
        <div class="uploadForm">
          <form className="landing_form" onSubmit={this.onSubmit}> 
            <div className="input_file_div">
              <label htmlFor={"input-file"}></label>
             <input
                  type="file"
                  multiple={true}
                  id={"input-file"}
                  className="input-file"
                  onChange={this.onChangeFile}
                />
                <i className="fa fa-upload" aria-hidden="true" /> <br></br>
                {this.state.files.length === 0 && (
                  <span className="upload_files_here">
                    Upload Files Here
                  </span>
                )}
            </div>
            <div class="main_form">
                <InputGroup
                    placeholder="Send To"
                    name="sendTo"
                    type="email"
                    value={this.state.sendTo}
                    onChange={this.onChange}
                    label="Receiver's Email"
                    error={this.state.sendToError}
                    />
                <InputGroup
                    placeholder="From"
                    name="from"
                    type="email"
                    value={this.state.from}
                    onChange={this.onChange}
                    label="Sender's Email"
                    error={this.state.fromError}
                />
                <TextAreaGroup
                    placeholder="Type your message"
                    name="message"
                    value={this.state.message}
                    onChange={this.onChange}
                    info="Message"
                />
                <button type="submit" class=" send_button btn btn-primary btn-lg btn-block"> Send Files</button>
            </div>
            </form>   
        </div>
        )
    }
}

export default UploadForm