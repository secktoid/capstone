import React, { Component } from "react";
import ImageUpload from "../layout/ImageUpload";
import App from "../../App";
import axios from "axios";

class Uploader extends Component {
  state = {
    selectedFile: null,
  };
  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  fileUploadHandler = () => {
    axios.post(
      "https://us-central1-marioplan-lr.cloudfunctions.net/uploadFile"
    );
  };

  render() {
    return (
      <div>
        <input type="file" onChange={this.fileSelectedHandler} />
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}
export default Uploader;
