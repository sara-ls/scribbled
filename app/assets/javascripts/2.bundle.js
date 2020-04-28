(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./frontend/components/files/books/book_show.jsx":
/*!*******************************************************!*\
  !*** ./frontend/components/files/books/book_show.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _ui_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/sidebar */ "./frontend/components/ui/sidebar.jsx");
/* harmony import */ var _actions_book_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/book_actions */ "./frontend/actions/book_actions.js");
/* harmony import */ var _actions_save_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/save_actions */ "./frontend/actions/save_actions.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-rating */ "./node_modules/react-rating/lib/react-rating.esm.js");
/* harmony import */ var _reviews__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reviews */ "./frontend/components/files/books/reviews.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var BookShow = /*#__PURE__*/function (_React$Component) {
  _inherits(BookShow, _React$Component);

  function BookShow(props) {
    var _this;

    _classCallCheck(this, BookShow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BookShow).call(this, props));
    _this.state = {
      saved: _this.props.userSaves.some(function (save) {
        return save.item_id === _this.props.id;
      })
    };
    _this.handleSave = _this.handleSave.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BookShow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchBook(this.props.id);
      this.props.fetchSavesForUser();
    }
  }, {
    key: "handleSave",
    value: function handleSave() {
      this.props.createSave({
        item_id: this.props.id,
        item_type: "Book"
      }).then(this.setState({
        saved: true
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var book_show = null;
      var bookButton;

      if (this.props.userSaves.some(function (save) {
        return save.item_id === _this2.props.id;
      })) {
        bookButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "save-btn submit-btn",
          disabled: true,
          style: {
            borderColor: "transparent",
            backgroundColor: "transparent",
            color: "#1e7b85",
            cursor: "default"
          }
        }, "Saved");
      } else {
        bookButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "save-btn submit-btn",
          onClick: this.handleSave
        }, "Save For Later");
      }

      if (this.props.book) {
        book_show = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "book-show-container"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
          className: "sub-nav"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "/"
        }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          id: "carat"
        }, ">"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "/books"
        }, "Books")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "book-show-details"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "left-col"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: this.props.book.cover_url,
          width: "220"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "book-show-btns-container"
        }, bookButton)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "right-col"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "book-title"
        }, this.props.book.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "author"
        }, "By ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "author-name"
        }, this.props.book.author)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "pages-rating-container"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "small-rating rating-wrapper"
        }, this.props.book.average_rating ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_rating__WEBPACK_IMPORTED_MODULE_8__["default"], {
          readonly: true,
          initialRating: this.props.book.average_rating,
          emptySymbol: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: window.starEmptyURL,
            opacity: "0.4",
            className: "icon",
            id: "empty-star"
          }),
          fullSymbol: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: window.redStarFullURL,
            height: "21px",
            "padding-right": "0px",
            className: "icon",
            id: "color-star"
          })
        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "No Reviews")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "pages"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
          icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCopy"],
          width: "25px",
          id: "pages-icon"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, this.props.book.pages, " Pages"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "book-show-divider"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "description"
        }, this.props.book.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "book-data-table"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "PUBLISHER: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.book.publisher), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "RELEASED: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.book.release_date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "ISBN: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.book.isbn), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "FORMAT: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Book")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reviews__WEBPACK_IMPORTED_MODULE_9__["default"], null));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-component-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        showSidebar: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-component"
      }, book_show));
    }
  }]);

  return BookShow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state, _ref) {
  var match = _ref.match;
  var id = parseInt(match.params.id);
  return {
    id: id,
    book: state.entities.books[id],
    user_id: state.session.id,
    userSaves: Object.values(state.entities.saves)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchBook: function fetchBook(id) {
      return dispatch(Object(_actions_book_actions__WEBPACK_IMPORTED_MODULE_4__["fetchBook"])(id));
    },
    fetchSavesForUser: function fetchSavesForUser() {
      return dispatch(Object(_actions_save_actions__WEBPACK_IMPORTED_MODULE_5__["fetchSavesForUser"])());
    },
    createSave: function createSave(save) {
      return dispatch(Object(_actions_save_actions__WEBPACK_IMPORTED_MODULE_5__["createSave"])(save));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(BookShow));

/***/ }),

/***/ "./frontend/components/files/books/reviews.jsx":
/*!*****************************************************!*\
  !*** ./frontend/components/files/books/reviews.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-rating */ "./node_modules/react-rating/lib/react-rating.esm.js");
/* harmony import */ var _actions_book_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/book_actions */ "./frontend/actions/book_actions.js");
/* harmony import */ var _reviews_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reviews_list */ "./frontend/components/files/books/reviews_list.jsx");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }













var _ref =  false ? undefined : {
  name: "u1vufm-Reviews",
  styles: "display:block;margin:auto;border-color:white;;label:Reviews;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJhL0xvY2FsIEZpbGVzL1NjcmliYmxlZC9zY3JpYmJsZWQvZnJvbnRlbmQvY29tcG9uZW50cy9maWxlcy9ib29rcy9yZXZpZXdzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRzBCIiwiZmlsZSI6Ii9Vc2Vycy9zYXJhL0xvY2FsIEZpbGVzL1NjcmliYmxlZC9zY3JpYmJsZWQvZnJvbnRlbmQvY29tcG9uZW50cy9maWxlcy9ib29rcy9yZXZpZXdzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IExpbmssIHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFJhdGluZyBmcm9tIFwicmVhY3QtcmF0aW5nXCI7XG5pbXBvcnQgeyBmZXRjaEJvb2ssIGNyZWF0ZVJldmlldyB9IGZyb20gXCIuLi8uLi8uLi9hY3Rpb25zL2Jvb2tfYWN0aW9uc1wiO1xuaW1wb3J0IFJldmlld3NMaXN0IGZyb20gXCIuL3Jldmlld3NfbGlzdFwiO1xuaW1wb3J0IFJvdGF0ZUxvYWRlciBmcm9tIFwicmVhY3Qtc3Bpbm5lcnMvUHVsc2VMb2FkZXJcIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgeyBmYUV4Y2xhbWF0aW9uQ2lyY2xlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgY2xlYXJSZXZpZXdzRXJyb3JzIH0gZnJvbSBcIi4uLy4uLy4uL2FjdGlvbnMvYm9va19hY3Rpb25zXCI7XG5cbmNsYXNzIFJldmlld3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZXZpZXdfdGV4dDogXCJcIixcbiAgICAgIHJhdGluZzogdW5kZWZpbmVkLFxuICAgICAgYm9va19pZDogdGhpcy5wcm9wcy5ib29rLmlkLFxuICAgICAgdXNlcl9pZDogdGhpcy5wcm9wcy51c2VyX2lkLFxuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzZXRSYXRpbmcgPSB0aGlzLnJlc2V0UmF0aW5nLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmZldGNoQm9vayh0aGlzLnByb3BzLmJvb2tJZCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmNsZWFyRXJyb3JzKCk7XG4gIH1cblxuICByZXNldFJhdGluZygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJhdGluZzogdW5kZWZpbmVkXG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGUoZmllbGQpIHtcbiAgICByZXR1cm4gZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgW2ZpZWxkXTogZS5jdXJyZW50VGFyZ2V0LnZhbHVlXG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHsgbG9hZGluZywgLi4ucmV2aWV3IH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldmlldy5yYXRpbmcgPSBwYXJzZUludChyZXZpZXcucmF0aW5nKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9hZGluZzogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdGhpcy5wcm9wcy5zdWJtaXRSZXZpZXcocmV2aWV3KS50aGVuKFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoQm9vayh0aGlzLnByb3BzLmJvb2tJZCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmV2aWV3X3RleHQ6IFwiXCIsXG4gICAgICAgICAgICByYXRpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGJvb2tfaWQ6IHRoaXMucHJvcHMuYm9vay5pZCxcbiAgICAgICAgICAgIHVzZXJfaWQ6IHRoaXMucHJvcHMudXNlcl9pZCxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSxcbiAgICAgIGVyciA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICByZW5kZXJFcnJvcnMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJlcnJvcnMtbGlzdFwiPlxuICAgICAgICB7dGhpcy5wcm9wcy5lcnJvcnMuc2xpY2UoMCwgMykubWFwKChlcnJvciwgaSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2BlcnJvci0ke2l9YH0gY2xhc3NOYW1lPVwiZXJyXCI+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRXhjbGFtYXRpb25DaXJjbGV9IGlkPVwiZXJyb3ItaWNvblwiIC8+XG4gICAgICAgICAgICB7ZXJyb3J9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHJlc2V0QnRuID0gbnVsbDtcblxuICAgIGlmICh0aGlzLnN0YXRlLmxvYWRpbmcpIHtcbiAgICAgIGNvbnN0IG92ZXJyaWRlID0gY3NzYFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgYDtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb21wb25lbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nIHN1Ym1pdC1sb2FkaW5nXCI+XG4gICAgICAgICAgICA8Um90YXRlTG9hZGVyXG4gICAgICAgICAgICAgIGNzcz17b3ZlcnJpZGV9XG4gICAgICAgICAgICAgIHNpemU9ezIwfVxuICAgICAgICAgICAgICBjb2xvcj17XCIjMWE3ZDg4XCJ9XG4gICAgICAgICAgICAgIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5yYXRpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzZXRCdG4gPSAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmF0aW5nLXJlc2V0LWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMucmVzZXRSYXRpbmd9PlxuICAgICAgICAgIENsZWFyIFJhdGluZ1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGV0IGFsbFJldmlld3MgPSBudWxsO1xuICAgIGxldCByZXZpZXdGb3JtID0gbnVsbDtcblxuICAgIGlmICh0aGlzLnByb3BzLmJvb2sucmV2aWV3cykge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmJvb2sucmV2aWV3QXV0aG9ySWRzLmluY2x1ZGVzKHRoaXMucHJvcHMudXNlcl9pZCkpIHtcbiAgICAgICAgcmV2aWV3Rm9ybSA9IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1mb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvcnMtY29udGFpbmVyXCI+e3RoaXMucmVuZGVyRXJyb3JzKCl9PC9kaXY+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJyZXZpZXctZm9ybVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctbGFiZWxcIj5XaGF0IGRpZCB5b3UgdGhpbms/PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8UmF0aW5nXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxSYXRpbmc9e3RoaXMuc3RhdGUucmF0aW5nfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yYXRpbmd9XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5U3ltYm9sPXtcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3dpbmRvdy5zdGFyRW1wdHlVUkx9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZvcm0tcmF0aW5nLXN0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmdWxsU3ltYm9sPXtcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3dpbmRvdy5zdGFyRnVsbFVSTH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZm9ybS1yYXRpbmctc3RhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JhdGUgPT4gdGhpcy5zZXRTdGF0ZSh7IHJhdGluZzogW3JhdGVdIH0pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHtyZXNldEJ0bn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWxhYmVsIHJldmlldy1sYWJlbFwiPldyaXRlIGEgUmV2aWV3PzwvZGl2PlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICBpZD1cInJldmlldy1pbnB1dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZWxsIHVzIHdoYXQgeW91IGxpa2VkIGFib3V0IHRoZSBib29rIVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmV2aWV3X3RleHR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlKFwicmV2aWV3X3RleHRcIil9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXBsb2FkLWlucHV0XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0LXJldmlldy1idG4gc3VibWl0LWJ0blwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUG9zdCBSZXZpZXdcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3cy1jb250YWluXCI+XG4gICAgICAgIHtyZXZpZXdGb3JtfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJyZXZpZXdzLWhlYWRlclwiPlJlYWRlciBSZXZpZXdzPC9oMj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmV2ZWl3cy1saXN0XCI+XG4gICAgICAgICAgICA8UmV2aWV3c0xpc3QgdXNlcl9pZD17dGhpcy5wcm9wcy51c2VyX2lkfSBib29rPXt0aGlzLnByb3BzLmJvb2t9IC8+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgeyBtYXRjaCB9KSA9PiB7XG4gIGNvbnN0IGJvb2tJZCA9IHBhcnNlSW50KG1hdGNoLnBhcmFtcy5pZCk7XG4gIHJldHVybiB7XG4gICAgYm9va0lkLFxuICAgIGJvb2s6IHN0YXRlLmVudGl0aWVzLmJvb2tzW2Jvb2tJZF0sXG4gICAgdXNlcl9pZDogc3RhdGUuc2Vzc2lvbi5pZCxcbiAgICBlcnJvcnM6IHN0YXRlLmVycm9ycy5yZXZpZXdzXG4gICAgLy8gLFxuICAgIC8vIHJldmlld3M6IE9iamVjdC52YWx1ZXMoc3RhdGUuZW50aXRpZXMuYm9va3NbYm9va0lkXS5yZXZpZXdzKVxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgZmV0Y2hCb29rOiBib29rSWQgPT4gZGlzcGF0Y2goZmV0Y2hCb29rKGJvb2tJZCkpLFxuICBzdWJtaXRSZXZpZXc6IHJldmlldyA9PiBkaXNwYXRjaChjcmVhdGVSZXZpZXcocmV2aWV3KSksXG4gIGNsZWFyRXJyb3JzOiAoKSA9PiBkaXNwYXRjaChjbGVhclJldmlld3NFcnJvcnMoKSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFxuICBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShSZXZpZXdzKVxuKTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Reviews = /*#__PURE__*/function (_React$Component) {
  _inherits(Reviews, _React$Component);

  function Reviews(props) {
    var _this;

    _classCallCheck(this, Reviews);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Reviews).call(this, props));
    _this.state = {
      review_text: "",
      rating: undefined,
      book_id: _this.props.book.id,
      user_id: _this.props.user_id,
      loading: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.resetRating = _this.resetRating.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Reviews, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchBook(this.props.bookId);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearErrors();
    }
  }, {
    key: "resetRating",
    value: function resetRating() {
      this.setState({
        rating: undefined
      });
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this2 = this;

      return function (e) {
        _this2.setState(_defineProperty({}, field, e.currentTarget.value));
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this3 = this;

      e.preventDefault();

      var _this$state = this.state,
          loading = _this$state.loading,
          review = _objectWithoutProperties(_this$state, ["loading"]);

      review.rating = parseInt(review.rating);
      this.setState({
        loading: true
      });
      this.props.submitReview(review).then(function () {
        _this3.props.fetchBook(_this3.props.bookId);

        setTimeout(function () {
          _this3.setState({
            review_text: "",
            rating: undefined,
            book_id: _this3.props.book.id,
            user_id: _this3.props.user_id,
            loading: false
          });
        }, 1000);
      }, function (err) {
        _this3.setState({
          loading: false
        });
      });
    }
  }, {
    key: "renderErrors",
    value: function renderErrors() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "errors-list"
      }, this.props.errors.slice(0, 3).map(function (error, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: "error-".concat(i),
          className: "err"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faExclamationCircle"],
          id: "error-icon"
        }), error);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var resetBtn = null;

      if (this.state.loading) {
        var override = _ref;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "main-component-container"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "loading submit-loading"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_6___default.a, {
          css: override,
          size: 20,
          color: "#1a7d88",
          loading: this.state.loading
        })));
      }

      if (this.state.rating !== undefined) {
        resetBtn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "rating-reset-button",
          onClick: this.resetRating
        }, "Clear Rating");
      }

      var allReviews = null;
      var reviewForm = null;

      if (this.props.book.reviews) {
        if (!this.props.book.reviewAuthorIds.includes(this.props.user_id)) {
          reviewForm = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "review-form-container"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "errors-container"
          }, this.renderErrors()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
            className: "review-form"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "form-row"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "rating-label"
          }, "What did you think?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "rating-container"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_rating__WEBPACK_IMPORTED_MODULE_3__["default"], {
            initialRating: this.state.rating,
            value: this.state.rating,
            emptySymbol: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              src: window.starEmptyURL,
              id: "form-rating-star",
              className: "icon"
            }),
            fullSymbol: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              src: window.starFullURL,
              id: "form-rating-star",
              className: "icon"
            }),
            onClick: function onClick(rate) {
              return _this4.setState({
                rating: [rate]
              });
            }
          }), resetBtn)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "rating-label review-label"
          }, "Write a Review?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
            id: "review-input",
            placeholder: "Tell us what you liked about the book!",
            value: this.state.review_text,
            onChange: this.update("review_text"),
            className: "upload-input"
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "review-btn-container"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: this.handleSubmit,
            type: "submit",
            className: "post-review-btn submit-btn"
          }, "Post Review"))));
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "reviews-contain"
      }, reviewForm, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "reviews-header"
      }, "Reader Reviews"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "reveiws-list"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reviews_list__WEBPACK_IMPORTED_MODULE_5__["default"], {
        user_id: this.props.user_id,
        book: this.props.book
      }))));
    }
  }]);

  return Reviews;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state, _ref2) {
  var match = _ref2.match;
  var bookId = parseInt(match.params.id);
  return {
    bookId: bookId,
    book: state.entities.books[bookId],
    user_id: state.session.id,
    errors: state.errors.reviews // ,
    // reviews: Object.values(state.entities.books[bookId].reviews)

  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchBook: function fetchBook(bookId) {
      return dispatch(Object(_actions_book_actions__WEBPACK_IMPORTED_MODULE_4__["fetchBook"])(bookId));
    },
    submitReview: function submitReview(review) {
      return dispatch(Object(_actions_book_actions__WEBPACK_IMPORTED_MODULE_4__["createReview"])(review));
    },
    clearErrors: function clearErrors() {
      return dispatch(Object(_actions_book_actions__WEBPACK_IMPORTED_MODULE_4__["clearReviewsErrors"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Reviews)));

/***/ }),

/***/ "./frontend/components/files/books/reviews_list.jsx":
/*!**********************************************************!*\
  !*** ./frontend/components/files/books/reviews_list.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-rating */ "./node_modules/react-rating/lib/react-rating.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ReviewsList = /*#__PURE__*/function (_React$Component) {
  _inherits(ReviewsList, _React$Component);

  function ReviewsList(props) {
    _classCallCheck(this, ReviewsList);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReviewsList).call(this, props));
  }

  _createClass(ReviewsList, [{
    key: "render",
    value: function render() {
      var _this = this;

      var allReviews = null;

      if (this.props.book.reviews) {
        if (this.props.book.reviews.length === 0) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "No reviews yet");
        }

        var rev = this.props.book.reviews.sort(function (a, b) {
          return b.id - a.id;
        });
        allReviews = rev.map(function (review) {
          if (review) {
            var userClass = _this.props.user_id === review.user_id ? "users-review" : "";
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
              key: review.id,
              className: "review-item ".concat(userClass)
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "review-left"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "review-text"
            }, review.review_text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "review-right"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "small-rating"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_rating__WEBPACK_IMPORTED_MODULE_2__["default"], {
              initialRating: review.rating,
              readonly: true,
              placeholderRating: review.rating,
              emptySymbol: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                src: window.starEmptyURL,
                opacity: "0.4",
                className: "icon",
                id: "empty-star"
              }),
              fullSymbol: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                src: window.redStarFullURL,
                height: "21px",
                "padding-right": "0px",
                className: "icon",
                id: "color-star"
              })
            }))));
          } else {
            return null;
          }
        });
      }

      return allReviews;
    }
  }]);

  return ReviewsList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ReviewsList);

/***/ })

}]);
//# sourceMappingURL=2.bundle.js.map