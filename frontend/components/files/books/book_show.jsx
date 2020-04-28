import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SideBar from "../../ui/sidebar";
import { fetchBook } from "../../../actions/book_actions";
import { createSave, fetchSavesForUser } from "../../../actions/save_actions";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Rating from "react-rating";
import Reviews from "./reviews";

class BookShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: this.props.userSaves.some(
        (save) => save.item_id === this.props.id
      ),
    };
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    this.props.fetchBook(this.props.id);
    this.props.fetchSavesForUser();
  }

  handleSave() {
    this.props
      .createSave({
        item_id: this.props.id,
        item_type: "Book",
      })
      .then(this.setState({ saved: true }));
  }

  render() {
    console.log(this.props.userSaves);
    let book_show = null;

    let bookButton;

    if (this.props.userSaves.some(save => save.item_id === this.props.id)) {
      bookButton = (
        <button className="save-btn submit-btn" disabled>
          Saved
        </button>
      );
    } else {
      bookButton = (
        <button className="save-btn submit-btn" onClick={this.handleSave}>
          Save For Later
        </button>
      );
    }

    if (this.props.book) {
      book_show = (
        <div className="book-show-container">
          <nav>
            <ol className="sub-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li id="carat">></li>
              <li>
                <Link to="/books">Books</Link>
              </li>
            </ol>
          </nav>
          <div className="book-show-details">
            <div className="left-col">
              <img src={this.props.book.cover_url} width="220" />
              <div className="book-show-btns-container">{bookButton}</div>
            </div>
            <div className="right-col">
              <div className="book-title">{this.props.book.title}</div>
              <div className="author">
                By <span className="author-name">{this.props.book.author}</span>
              </div>
              <div className="pages-rating-container">
                <div className="small-rating rating-wrapper">
                  {this.props.book.average_rating ? (
                    <Rating
                      readonly
                      initialRating={this.props.book.average_rating}
                      emptySymbol={
                        <img
                          src={window.starEmptyURL}
                          opacity="0.4"
                          className="icon"
                          id="empty-star"
                        />
                      }
                      fullSymbol={
                        <img
                          src={window.redStarFullURL}
                          height="21px"
                          padding-right="0px"
                          className="icon"
                          id="color-star"
                        />
                      }
                    />
                  ) : (
                    <span>No Reviews</span>
                  )}
                </div>
                <div className="pages">
                  <FontAwesomeIcon icon={faCopy} width="25px" id="pages-icon" />
                  <span>{this.props.book.pages} Pages</span>
                </div>
              </div>
              <div className="book-show-divider"></div>
              <div className="description">{this.props.book.description}</div>
              <div className="book-data-table">
                <div>PUBLISHER: </div>
                <div>{this.props.book.publisher}</div>
                <div>RELEASED: </div>
                <div>{this.props.book.release_date}</div>
                <div>ISBN: </div>
                <div>{this.props.book.isbn}</div>
                <div>FORMAT: </div>
                <div>Book</div>
              </div>
            </div>
          </div>
          <Reviews />
        </div>
      );
    }

    return (
      <div className="main-component-container">
        <SideBar showSidebar={true} />
        <div className="main-component">{book_show}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => {
  const id = parseInt(match.params.id);
  return {
    id: id,
    book: state.entities.books[id],
    user_id: state.session.id,
    userSaves: Object.values(state.entities.saves),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchBook: (id) => dispatch(fetchBook(id)),
  fetchSavesForUser: () => dispatch(fetchSavesForUser()),
  createSave: (save) => dispatch(createSave(save)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookShow);
