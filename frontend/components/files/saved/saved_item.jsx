import React from "react";
import { connect } from "react-redux";
import { deleteSave } from "../../../actions/save_actions";
import { fetchBook } from "../../../actions/book_actions";

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
        <li className="saved-list-item" key={save.id}>
          <div>{this.props.book.title}</div>
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
