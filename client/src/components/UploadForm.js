import React, {Component} from "react"
import InputGroup from "./reusable/InputGroup"
import TextAreaGroup from "./reusable/TextArea"

class UploadForm extends Component {
    state = {
        sendTo : "",
        from  : "",
        mesage : "",
        files : "",
        fromError : null,
        sendToError : null,
        fileError : null
    }

    render() {
        return (
        <div class="uploadForm">
             <input
                  type="file"
                  multiple={true}
                  id={"input-file"}
                  className="input-file"
                  onChange={this.onChangeFile}
                />
                <i className="fa fa-upload" aria-hidden="true" />
                {this.state.files.length == 0 && (
                  <span className="man_form_top_file_upload">
                    Upload Files Here
                  </span>
                )}
        
            <div class="main_form">
                <InputGroup
                    placeholder="Send To"
                    name="sendTo"
                    value={this.state.sendTo}
                    onChange={this.onChange}
                    label="Receiver's Email"
                    error={this.state.sendToError}
                    />
                <InputGroup
                    placeholder="From"
                    name="from"
                    value={this.state.from}
                    onChange={this.onChange}
                    label="Sender's Email"
                    error={this.state.fromError}
                />
                <TextAreaGroup
                placeholder="What's your message?"
                name="message"
                value={this.state.message}
                onChange={this.onChange}
                info="Message"
                />
                <button type="button" class=" send_button btn btn-primary btn-lg btn-block"> Send Files</button>
            </div>
        </div>
        )
    }
}

export default UploadForm