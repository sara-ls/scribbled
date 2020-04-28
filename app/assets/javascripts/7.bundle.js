(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./frontend/components/user_session/account.jsx":
/*!******************************************************!*\
  !*** ./frontend/components/user_session/account.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_session_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/session_user_actions */ "./frontend/actions/session_user_actions.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ui_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/sidebar */ "./frontend/components/ui/sidebar.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Account = /*#__PURE__*/function (_React$Component) {
  _inherits(Account, _React$Component);

  function Account(props) {
    _classCallCheck(this, Account);

    return _possibleConstructorReturn(this, _getPrototypeOf(Account).call(this, props));
  }

  _createClass(Account, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchCurrentUser();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-component-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        showSidebar: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-component"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "account-banner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "banner-icon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        id: "user-icon",
        className: "user-icon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUserCircle"]
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "banner-name"
      }, this.props.user.full_name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-section1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Your Account")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "account-info-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, this.props.user.full_name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, this.props.user.email))))));
    }
  }]);

  return Account;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var entities = _ref.entities,
      session = _ref.session;
  return {
    user: entities.users[session.id]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchCurrentUser: function fetchCurrentUser() {
      dispatch(Object(_actions_session_user_actions__WEBPACK_IMPORTED_MODULE_1__["fetchCurrentUser"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Account));

/***/ })

}]);
//# sourceMappingURL=7.bundle.js.map