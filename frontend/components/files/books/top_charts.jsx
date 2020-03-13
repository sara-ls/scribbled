import React from "react";
import { connect } from "react-redux";
import SideBar from "../../ui/sidebar";
import Featured from "../../shared/featured";
import { fetchBooks } from "../../../actions/book_actions";
import BookIndexItem from "./books_index_item";
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

class TopCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: !!this.props.books
    };
  }
  componentDidMount() {
    this.props
      .fetchBooks()
      .then(() => setTimeout(() => this.setState({ loading: false }), 1300));
  }

  render() {
    const override = css`
      display: block;
      margin: 10px auto;
      border-color: white;
    `;
    let items;
    if (this.state.loading) {
      return (
        <div className="main-component-container">
          <SideBar showSidebar={true} />
          <div className="loading">
            <BounceLoader
              css={override}
              size={50}
              color={"#1a7d88"}
              loading={this.state.loading}
            />
          </div>
        </div>
      );
    } else {
      let top_books = this.props.books.filter((book) => book.average_rating > 3)

      items = top_books.sort((a,b) => a.average_rating - b.average_rating).map((book, i) => {
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
          </div>{" "}
          <div className="main-section2">
            <ol className="top-charts-list">
              
                {items}
              
            </ol>
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

export default connect(mapStateToProps, mapDispatchToProps)(TopCharts);
