import React from "react";

class DocumentIndexItem extends React.Component {
  render() {
    return (
      <li className="document-index-item">
          <div>Title: {this.props.document.title}</div>
          <div>Description: {this.props.document.description}</div>
      </li>
    );
  }
}

export default DocumentIndexItem;
