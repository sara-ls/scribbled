import React from "react";
import DocumentsIndexItem from "./documents_index_item";
import { createDocument } from "../../actions/document_actions";
import { connect } from "react-redux";
import SideBar from '../ui/sidebar'

class DocumentIndex extends React.Component {
  render() {
    // let items = this.props.documents.map(document => {
    //   if (document) {
    //     return <DocumentsIndexItem document={document} key={document.id} />;
    //   } else {
    //     return null;
    //   }
    // });

    return (
      <div className="documents-container">
        <SideBar showSidebar={true} />
        <div className="documents-inner-container">
          <h1>Documents</h1>
          {/* {items} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    documents: state.entities.documents
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DocumentIndex);
