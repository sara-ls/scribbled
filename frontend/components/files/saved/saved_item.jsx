import React from "react";
import { connect } from "react-redux";
import { deleteSave } from "../../../actions/save_actions";
import { fetchBook } from "../../../actions/book_actions";
import { Link } from "react-router-dom";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SavedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: this.props.book,
    };
    this.handleRemoveSave = this.handleRemoveSave.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchBook(this.props.save.item_id)
      .then(() => this.setState({ book: this.props.book }));
  }

  handleRemoveSave() {
    this.props
      .deleteSave(this.props.save.id)
      .then(() => this.setState({ book: null }));
  }

  render() {
    if (this.state.book) {
      return (
        <li className="saved-list-item">
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
              <div className="index-author">{this.props.book.author}</div>
            </div>
            <div className="pages">
              <span>{this.props.book.pages} Pages</span>
            </div>
          </div>
          <div className="right-saved">
            <FontAwesomeIcon
              icon={faTrashAlt}
              onClick={this.handleRemoveSave}
            />
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
