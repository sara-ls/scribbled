import React from "react";
import { connect } from "react-redux";
import SideBar from "../../ui/sidebar";
import { fetchBooks } from "../../../actions/book_actions";
import BookIndexItem from "./books_index_item";

class TopCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: !!this.props.books,
    };
  }
  componentDidMount() {
    this.props.fetchBooks().then(() => this.setState({ loading: false }));
  }

  render() {
    let items;
    if (!this.state.loading) {
      let top_books = this.props.books.filter(
        (book) => book.average_rating > 3
      );

      items = top_books
        .sort((a, b) => b.average_rating - a.average_rating)
        .map((book, i) => {
          return (
            <li key={book.id} className="top-book-li">
              <BookIndexItem book={book} rank={i + 1} description={true} />
            </li>
          );
        });
    }

    return (
      <div className="main-component-container">
        <SideBar showSidebar={true} />
        <div className="main-component">
          <div className="main-section1">
            <div className="page-header">
              <h1>Top Charts</h1>
              <span>
                The most popular books and audiobooks that are topping
                bestseller lists and generating buzz from critics.
              </span>
            </div>
          </div>
          <div className="main-section2">
            <ol className="top-charts-list">{items}</ol>
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

export default connect(mapStateToProps, mapDispatchToProps)(TopCharts);
