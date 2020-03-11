import React from "react";
import { connect } from "react-redux";
import SideBar from "../../ui/sidebar";
import Featured from "../../shared/featured";
import { fetchBooks } from "../../../actions/book_actions";
import BookIndexItem from "./books_index_item";

class BookIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    let items = this.props.books.map(book => {
      if (book) {
        return <BookIndexItem book={book} key={book.id} />;
      } else {
        return null;
      }
    });

    return (
      <div className="main-component-container">
        <SideBar showSidebar={true} />
        <div className="main-component">
          <div className="main-section1">
            <div className="page-header">
              <h1>Books</h1>
              <span>Find your next favorite book</span>
            </div>
            <div className="books-index-container">
              <ul>{items}</ul>
            </div>
          </div>
          <Featured />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    books: Object.values(state.entities.books)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBooks: () => dispatch(fetchBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(BookIndex);
