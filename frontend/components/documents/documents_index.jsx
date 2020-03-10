import React from "react";
import DocumentIndexItem from "./documents_index_item";
import { fetchDocuments } from "../../actions/document_actions";
import { connect } from "react-redux";
import SideBar from "../ui/sidebar";

class DocumentIndex extends React.Component {
  componentDidMount() {
    this.props.fetchDocuments();
  }

  render() {
    let items = this.props.documents.map(document => {
      if (document) {
        return <DocumentIndexItem document={document} key={document.id} />;
      } else {
        return null;
      }
    });

    return (
      <div className="main-component-container">
        <SideBar showSidebar={true} />
        <div className="main-component">
          <section className="main-section1">
            <div className="page-header">
              <h1>Documents</h1>
              <span>Get started with the community’s uploads</span>
            </div>
            <div className="documents-items-container">{items}</div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    documents: Object.values(state.entities.documents)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchDocuments: () => dispatch(fetchDocuments())
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentIndex);
