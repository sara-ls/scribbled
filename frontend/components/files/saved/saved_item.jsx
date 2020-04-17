import React from "react";
import { connect } from "react-redux";
import { deleteSave } from "../../../actions/save_actions";
import { fetchBook } from "../../../actions/book_actions";
import { Link } from "react-router-dom";
class SavedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBook(this.props.save.item_id);
  }

  render() {
    let save = this.props.save;

    if (this.props.book) {
      return (
        <li className="saved-list-item" >
          <div className="book-index-img-container">
            <Link to={`/books/${this.props.book.id}`}>
              <img src={this.props.book.cover_url} height="205" />
            </Link>
          </div>
          <div className="top-div">
            <div className="index-title">
              <Link to={`/books/${this.props.book.id}`}>
                <div>{this.props.book.title}</div>
              </Link>
            </div>
            <div className="index-author">{this.props.book.author}</div>
            <div className="pages">
              <span>{this.props.book.pages} Pages</span>
            </div>
          </div>
        </li>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.session.id,
    save: ownProps.save,
    book: state.entities.books[ownProps.save.item_id],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteSave: (saveId) => dispatch(deleteSave(saveId)),
    fetchBook: (bookId) => dispatch(fetchBook(bookId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedItem);
