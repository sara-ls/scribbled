(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./frontend/components/files/saved/saved.jsx":
/*!***************************************************!*\
  !*** ./frontend/components/files/saved/saved.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_save_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/save_actions */ "./frontend/actions/save_actions.js");
/* harmony import */ var _ui_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/sidebar */ "./frontend/components/ui/sidebar.jsx");
/* harmony import */ var _saved_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saved_item */ "./frontend/components/files/saved/saved_item.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Saved = /*#__PURE__*/function (_React$Component) {
  _inherits(Saved, _React$Component);

  function Saved(props) {
    _classCallCheck(this, Saved);

    return _possibleConstructorReturn(this, _getPrototypeOf(Saved).call(this, props));
  }

  _createClass(Saved, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchSavesForUser();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var saves = this.props.saves.filter(function (save) {
        return save.user_id === _this.props.userId;
      });
      var savedItems = saves.map(function (save) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_saved_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
          save: save,
          key: save.id
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-component-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        showSidebar: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-component"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-section1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Saved"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Titles you've saved.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "saved-items-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "saved-items-list"
      }, savedItems)))));
    }
  }]);

  return Saved;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    userId: state.session.id,
    saves: Object.values(state.entities.saves)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchSavesForUser: function fetchSavesForUser() {
      return dispatch(Object(_actions_save_actions__WEBPACK_IMPORTED_MODULE_2__["fetchSavesForUser"])());
    },
    deleteSave: function deleteSave(saveId) {
      return dispatch(Object(_actions_save_actions__WEBPACK_IMPORTED_MODULE_2__["deleteSave"])(saveId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Saved));

/***/ }),

/***/ "./frontend/components/files/saved/saved_item.jsx":
/*!********************************************************!*\
  !*** ./frontend/components/files/saved/saved_item.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_save_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/save_actions */ "./frontend/actions/save_actions.js");
/* harmony import */ var _actions_book_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/book_actions */ "./frontend/actions/book_actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var SavedItem = /*#__PURE__*/function (_React$Component) {
  _inherits(SavedItem, _React$Component);

  function SavedItem(props) {
    var _this;

    _classCallCheck(this, SavedItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SavedItem).call(this, props));
    _this.state = {
      book: _this.props.book
    };
    _this.handleRemoveSave = _this.handleRemoveSave.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SavedItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.fetchBook(this.props.save.item_id).then(function () {
        return _this2.setState({
          book: _this2.props.book
        });
      });
    }
  }, {
    key: "handleRemoveSave",
    value: function handleRemoveSave() {
      var _this3 = this;

      this.props.deleteSave(this.props.save.id).then(function () {
        return _this3.setState({
          book: null
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.book) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "saved-list-item"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "book-index-img-container"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
          to: "/books/".concat(this.props.book.id)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: this.props.book.cover_url,
          height: "205"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "top-div"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "index-title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
          to: "/books/".concat(this.props.book.id)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.book.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "index-author"
        }, this.props.book.author)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "pages"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, this.props.book.pages, " Pages"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "right-saved"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
          id: "trash-icon",
          icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrashAlt"],
          onClick: this.handleRemoveSave
        })));
      } else {
        return null;
      }
    }
  }]);

  return SavedItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    userId: state.session.id,
    save: ownProps.save,
    book: state.entities.books[ownProps.save.item_id]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteSave: function deleteSave(saveId) {
      return dispatch(Object(_actions_save_actions__WEBPACK_IMPORTED_MODULE_2__["deleteSave"])(saveId));
    },
    fetchBook: function fetchBook(bookId) {
      return dispatch(Object(_actions_book_actions__WEBPACK_IMPORTED_MODULE_3__["fetchBook"])(bookId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(SavedItem));

/***/ })

}]);
//# sourceMappingURL=4.bundle.js.map