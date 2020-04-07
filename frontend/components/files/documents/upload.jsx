import React from "react";
import { connect } from "react-redux";
import SideBar from "../../ui/sidebar";
import { createDocument } from "../../../actions/document_actions";
import { Route, Redirect, withRouter } from "react-router-dom";

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      // format: "pdf",
      thumbnail_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Document_icon_%28the_Noun_Project_27904%29.svg/768px-Document_icon_%28the_Noun_Project_27904%29.svg.png",
      file: undefined,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    // Must use FormData when uploading file
    const formData = new FormData();
    formData.append('document[title]', this.state.title)
    formData.append('document[user_id]', this.props.user_id);
    formData.append('document[file]', this.state.file);
    formData.append('document[description]', this.state.description);

    // Redirect to documents page on success
    this.props
      .processForm(formData)
      .then(() => this.props.history.push("/documents"));
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ file: file, thumbnail_url: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <div className="upload-form-component">
        <SideBar showSidebar={true} />
        <div className="upload-form-div">
          <div className="page-header">
            <h1>Upload</h1>
          </div>
          <div className="upload-form-container">
            <div className="thumbnail-container">
              <img src={this.state.thumbnail_url} />
            </div>
            <form className="upload-form" onSubmit={this.handleSubmit}>
              <div className="input-container">
                <div className="label-contain">
                  <label>Title</label>
                  <span className="req">(Required)</span>
                </div>

                <input
                  id="title-input"
                  type="text"
                  value={this.state.title}
                  onChange={this.update("title")}
                  className="upload-input"
                  autoComplete="off"
                />
              </div>
              <div className="input-container">
                <div className="label-contain">
                  <label>Description</label>
                  <span className="req">(Required)</span>
                </div>

                <textarea
                  id="description-input"
                  value={this.state.description}
                  onChange={this.update("description")}
                  className="upload-input"
                />
              </div>
              <div className="input-container">
                <label>File</label>
                <input
                  type="file"
                  id="file"
                  onChange={this.handleFile}
                />
              </div>
              <button className="submit-btn" type="submit">
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ session }) => ({
  user_id: session.id,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (document) => dispatch(createDocument(document)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UploadForm)
);
