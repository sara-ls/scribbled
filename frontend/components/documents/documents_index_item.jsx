import React from "react";

class DocumentIndexItem extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Title: {this.props.document.title}</li>
        </ul>
      </div>
    );
  }
}

export default DocumentIndexItem;
