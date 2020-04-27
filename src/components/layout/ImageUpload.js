import React, { Component } from "react";
import firebase from "firebase";
import { connect } from "react-redux";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   files: null,
      option: "",
    };

    this.handleRadioButton = this.handleRadioButton.bind(this);
  }

  handleChange = (files) => {
    this.setState({
      files: files,
    });
    console.log(this.state);
  };
  handleSave = () => {
    let bucketName = "images";
    let file = this.state.files[0];
    let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
      let downloadURL = uploadTask.snapshot.downloadURL;
    });
  };
  handleRadioButton = (e) => {
    console.log(this.option);
    this.setState({
      files: e.target.value,
    });
  };
  showImage = () => {
    let storageRef = firebase.storage().ref();
    let spaceRef = storageRef.child("images/" + this.state.files[0].name);
    storageRef
      .child("images/" + this.state.files[0].name)
      .getDownloadURL()
      .then((url) => {
        console.log(url);
        document.getElementById("new-img").src = url;
      });
  };

  render() {
    return (
      <div className="container">
        <form action="#">
          <p>
            <label>
              <input
                id="option"
                className="with-gap"
                name="option"
                type="radio"
                checked={this.state.option === "red"}
                onChange={this.handleRadioButton}
              />
              <span>Red</span>
            </label>
          </p>
          <p>
            <label>
              <input
                id="option"
                className="with-gap"
                name="option"
                type="radio"
                checked={this.state.option === "yello"}
                onChange={this.handleRadioButton}
              />
              <span>Yellow</span>
            </label>
          </p>
          <p>
            <label>
              <input
                id="option"
                className="with-gap"
                name="option"
                type="radio"
                checked={this.state.option === "green"}
                onChange={this.handleRadioButton}
              />
              <span>Green</span>
            </label>
          </p>
          <p>
            <label>
              <input
                id="option"
                className="with-gap"
                name="option"
                type="radio"
                checked={this.state.option === "brown"}
                onChange={this.handleRadioButton}
              />
              <span>Brown</span>
            </label>
          </p>
        </form>

        <input
          type="file"
          onChange={(e) => {
            this.handleChange(e.target.files);
          }}
        />
        <button onClick={this.handleSave}>Upload</button>
        <button onClick={this.showImage}>Show image</button>
        <img id="new-img" />
      </div>
    );
  }
}

export default ImageUpload;
