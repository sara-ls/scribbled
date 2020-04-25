![Scribbled Logo](./app/assets/images/scribbled-logo.png)

*An online books and documents library inspired by Scribd, built with Ruby on Rails*

**[LIVE SITE](https://scribbled-scribd.herokuapp.com/#/)**

![Books Index Page](./lib/assets/books_page.png)

![Book Show page](./lib/assets/book_page.png)

## Technologies

* Ruby on Rails
* BCrypt
* React.js
* Redux.js
* PostgreSQL
* AJAX
* Heroku
* AWS S3
* HTML
* SCSS

## Features

### Splash page with modal that toggles between a login and signup form

![User Auth GIF](https://media.giphy.com/media/PgjMpg08IIrpRjT7mK/giphy.gif)

### Book Reviews

![Book review GIF](https://media.giphy.com/media/WryTJPQO0clmVty06f/giphy.gif)

* Logged in users can rate books by selecting a certain number of stars

* A processing animation is shows when reviews are submitted, and then the new review appears at the top of the list

``` jsx
// Book reviews component - called when "Post Review" clicked
handleSubmit(e) {
  e.preventDefault();
  let { loading, ...review } = this.state;
  review.rating = parseInt(review.rating);

  // Show loading animations
  this.setState({
    loading: true
  });
  
  // AJAX POST request
  this.props.submitReview(review).then(
    () => {
      // Refetch book reviews after new review added
      this.props.fetchBook(this.props.bookId).then(
        () => {
          // Reset component state
          this.setState({
            review_text: "",
            rating: undefined,
            book_id: this.props.book.id,
            user_id: this.props.user_id,
            loading: false // Remove loading animation
          });
       });
    },
    err => {
      this.setState({
        loading: false
      });
    }
  );
}
```


