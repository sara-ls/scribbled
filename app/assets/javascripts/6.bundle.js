(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./frontend/components/files/documents/upload.jsx":
/*!********************************************************!*\
  !*** ./frontend/components/files/documents/upload.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ui_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/sidebar */ "./frontend/components/ui/sidebar.jsx");
/* harmony import */ var _actions_document_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/document_actions */ "./frontend/actions/document_actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var UploadForm = /*#__PURE__*/function (_React$Component) {
  _inherits(UploadForm, _React$Component);

  function UploadForm(props) {
    var _this;

    _classCallCheck(this, UploadForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UploadForm).call(this, props)); // this.props.history.push("/upload");

    _this.state = {
      title: "",
      description: "",
      // format: "pdf",
      thumbnail_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Document_icon_%28the_Noun_Project_27904%29.svg/768px-Document_icon_%28the_Noun_Project_27904%29.svg.png",
      file: undefined
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleFile = _this.handleFile.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UploadForm, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault(); // Must use FormData when uploading file

      var formData = new FormData();
      formData.append("document[title]", this.state.title);
      formData.append("document[user_id]", this.props.user_id);
      formData.append("document[file]", this.state.file);
      formData.append("document[description]", this.state.description); // Redirect to documents page on success

      this.props.processForm(formData); // .then(() => this.props.history.push("/documents"));
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this2 = this;

      return function (e) {
        return _this2.setState(_defineProperty({}, field, e.currentTarget.value));
      };
    }
  }, {
    key: "handleFile",
    value: function handleFile(e) {
      var _this3 = this;

      var file = e.currentTarget.files[0];
      var fileReader = new FileReader();

      fileReader.onloadend = function () {
        _this3.setState({
          file: file,
          thumbnail_url: fileReader.result
        });
      };

      if (file) {
        fileReader.readAsDataURL(file);
      } else {
        this.setState({
          thumbnail_url: "",
          file: null
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "upload-form-component"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        showSidebar: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "upload-form-div"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Publish to the world")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "upload-page-subheader"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Presentations, research papers, legal documents, and more")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "upload-form-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "thumbnail-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.thumbnail_url
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "upload-form",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "label-contain"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "req"
      }, "(Required)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "title-input",
        type: "text",
        value: this.state.title,
        onChange: this.update("title"),
        className: "upload-input",
        autoComplete: "off"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "label-contain"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "req"
      }, "(Required)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        id: "description-input",
        value: this.state.description,
        onChange: this.update("description"),
        className: "upload-input"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-container",
        id: "file-contain"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "File"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "file",
        id: "file",
        onChange: this.handleFile
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "file-btn"
      }, this.state.file ? "".concat(this.state.file.name, " \u2713") : "Select a file to upload")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "submit-btn",
        type: "submit"
      }, "Upload")))));
    }
  }]);

  return UploadForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var session = _ref.session;
  return {
    user_id: session.id
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    processForm: function processForm(document) {
      return dispatch(Object(_actions_document_actions__WEBPACK_IMPORTED_MODULE_3__["createDocument"])(document));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(UploadForm)));

/***/ })

}]);
//# sourceMappingURL=6.bundle.js.map