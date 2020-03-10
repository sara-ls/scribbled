import React from "react";
import { connect } from "react-redux";
import SideBar from "../ui/sidebar";
import { createDocument } from "../../actions/document_actions";

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
      document_url: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(Object.assign({}, this.state));
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {
    return (
      <div className="upload-form-component">
        <SideBar showSidebar={true} />
        <div className="upload-form-div">
          {/* <div className="documents-header">
            <h1>Upload</h1>
          </div> */}
          <div className="upload-form-container">
            <div className="thumbnail-container">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Document_icon_%28the_Noun_Project_27904%29.svg/768px-Document_icon_%28the_Noun_Project_27904%29.svg.png" />
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
                <input type="file" id="file" />
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

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
