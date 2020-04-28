(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./frontend/components/files/books/top_charts.jsx":
/*!********************************************************!*\
  !*** ./frontend/components/files/books/top_charts.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ui_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/sidebar */ "./frontend/components/ui/sidebar.jsx");
/* harmony import */ var _actions_book_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/book_actions */ "./frontend/actions/book_actions.js");
/* harmony import */ var _books_index_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./books_index_item */ "./frontend/components/files/books/books_index_item.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var TopCharts = /*#__PURE__*/function (_React$Component) {
  _inherits(TopCharts, _React$Component);

  function TopCharts(props) {
    var _this;

    _classCallCheck(this, TopCharts);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TopCharts).call(this, props));
    _this.state = {
      loading: !!_this.props.books
    };
    return _this;
  }

  _createClass(TopCharts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.fetchBooks().then(function () {
        return _this2.setState({
          loading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var items;

      if (!this.state.loading) {
        var top_books = this.props.books.filter(function (book) {
          return book.average_rating > 3;
        });
        items = top_books.sort(function (a, b) {
          return b.average_rating - a.average_rating;
        }).map(function (book, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: book.id,
            className: "top-book-li"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_books_index_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
            book: book,
            rank: i + 1,
            description: true
          }));
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-component-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        showSidebar: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-component"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-section1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Top Charts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "The most popular books and audiobooks that are topping bestseller lists and generating buzz from critics."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-section2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
        className: "top-charts-list"
      }, items))));
    }
  }]);

  return TopCharts;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    books: Object.values(state.entities.books)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchBooks: function fetchBooks() {
      return dispatch(Object(_actions_book_actions__WEBPACK_IMPORTED_MODULE_3__["fetchBooks"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(TopCharts));

/***/ })

}]);
//# sourceMappingURL=5.bundle.js.map