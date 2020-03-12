import React from "react"
import Rating from "react-rating";

class ResetRating extends React.Component {
  constructor(props) {
    super(props);
    let initialVal;
    if (this.props.value !== undefined) {
      initialVal = value;   
    } else {
      initialVal = undefined;
    }
    this.state = { value: initialVal };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ value: undefined });
  }

  render() {
    let resetBtn = null;
    if (this.props.readOnly === false) {
      resetBtn = (
        <button className="rating-reset-button" onClick={this.handleClick}>
          Reset
        </button>
      );
    }
    return (
      <div className="star-rating-contiainer">
        <Rating
          {...this.props}
          initialRating={this.state.value}
          emptySymbol={<img src={window.starEmptyURL} className="icon" />}
          fullSymbol={<img src={window.starFullURL} className="icon" />}
        />
        {resetBtn}
      </div>
    );
  }
}

export default ResetRating;