(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./frontend/components/files/documents/documents_index.jsx":
/*!*****************************************************************!*\
  !*** ./frontend/components/files/documents/documents_index.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _documents_index_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documents_index_item */ "./frontend/components/files/documents/documents_index_item.jsx");
/* harmony import */ var _actions_document_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/document_actions */ "./frontend/actions/document_actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ui_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/sidebar */ "./frontend/components/ui/sidebar.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var DocumentIndex = /*#__PURE__*/function (_React$Component) {
  _inherits(DocumentIndex, _React$Component);

  function DocumentIndex() {
    _classCallCheck(this, DocumentIndex);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentIndex).apply(this, arguments));
  }

  _createClass(DocumentIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchDocuments();
    }
  }, {
    key: "render",
    value: function render() {
      var items = this.props.documents.map(function (document) {
        if (document) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_documents_index_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
            document: document,
            key: document.id
          });
        } else {
          return null;
        }
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-component-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        showSidebar: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-component"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-section1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Documents"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Get started with the community\u2019s uploads")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "documents-items-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, items)))));
    }
  }]);

  return DocumentIndex;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    documents: Object.values(state.entities.documents)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchDocuments: function fetchDocuments() {
      return dispatch(Object(_actions_document_actions__WEBPACK_IMPORTED_MODULE_2__["fetchDocuments"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(DocumentIndex));

/***/ }),

/***/ "./frontend/components/files/documents/documents_index_item.jsx":
/*!**********************************************************************!*\
  !*** ./frontend/components/files/documents/documents_index_item.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var DocumentIndexItem = /*#__PURE__*/function (_React$Component) {
  _inherits(DocumentIndexItem, _React$Component);

  function DocumentIndexItem() {
    _classCallCheck(this, DocumentIndexItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentIndexItem).apply(this, arguments));
  }

  _createClass(DocumentIndexItem, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "document-index-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Title: ", this.props.document.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Description: ", this.props.document.description));
    }
  }]);

  return DocumentIndexItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DocumentIndexItem);

/***/ })

}]);
//# sourceMappingURL=3.bundle.js.map