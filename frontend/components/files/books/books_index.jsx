import React from "react";
import { connect } from "react-redux";
import SideBar from "../../ui/sidebar";
import Featured from "../../shared/featured";
import { fetchBooks } from "../../../actions/book_actions";
import BookIndexItem from "./books_index_item";

class BookIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.fetchBooks().then((res) => {
      this.setState({ loading: false });
    });
  }

  render() {
    let items;
    if (!this.state.loading) {
      items = this.props.books.map((book) => {
        if (book) {
          return <BookIndexItem book={book} key={book.id} />;
        } else {
          return null;
        }
      });
    }

    return (
      <div className="main-component-container">
        <SideBar showSidebar={true} />
        <div className="main-component">
          <Featured />
          <div className="main-section1">
            <div className="page-header">
              <h1>Books</h1>
              <span>Find your next favorite book</span>
            </div>
            <div className="books-index-container">
              <ul className="books-index-list">{items}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    books: Object.values(state.entities.books),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBooks: () => dispatch(fetchBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookIndex);
