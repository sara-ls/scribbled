import React from "react";
import { connect } from "react-redux";
import SideBar from "../ui/sidebar";
import { createDocument } from "../../actions/document_actions";
import { Route, Redirect, withRouter } from "react-router-dom";
// import FileUploader from "../file_uploader";

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      user_id: this.props.user_id,
      format: "pdf",
      thumbnail_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Document_icon_%28the_Noun_Project_27904%29.svg/768px-Document_icon_%28the_Noun_Project_27904%29.svg.png",
      file: undefined
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {
    let thumbnailSrc =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Document_icon_%28the_Noun_Project_27904%29.svg/768px-Document_icon_%28the_Noun_Project_27904%29.svg.png";
    return (
      <div className="upload-form-component">
        <SideBar showSidebar={true} />
        <div className="upload-form-div">
          {/* <div className="page-header">
            <h1>Upload</h1>
          </div> */}
          {/* <FileUploader
            file={this.state.file}
          /> */}
          <div className="upload-form-container">
            <div className="thumbnail-container">
              <img src={thumbnailSrc} />
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
                  value={this.state.file}
                  onChange={this.update("file")}
                />
              </div>
              {/* <div className="input-container">
                <label>Format</label>
                <span className="req">(Required)</span>
                <input
                  id="format-input"
                  type="text"
                  value={this.state.format}
                  onChange={this.update("format")}
                  className="upload-input"
                  autoComplete="off"
                />
              </div> */}
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
  user_id: session.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: document => dispatch(createDocument(document))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UploadForm)
);
