(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./frontend/components/ui/modal.jsx":
/*!******************************************!*\
  !*** ./frontend/components/ui/modal.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var _user_session_login_form_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user_session/login_form_container */ "./frontend/components/user_session/login_form_container.jsx");
/* harmony import */ var _user_session_signup_form_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user_session/signup_form_container */ "./frontend/components/user_session/signup_form_container.jsx");






var Modal = function Modal(_ref) {
  var modal = _ref.modal,
      closeModal = _ref.closeModal;

  if (!modal) {
    return null;
  }

  var component = null;

  switch (modal) {
    case "login":
      component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_session_login_form_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "form"
      });
      break;

    case "signup":
      component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_session_signup_form_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: "form"
      });
      break;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-background",
    onClick: closeModal
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-child",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, component));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    modal: state.ui.modal
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    closeModal: function closeModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["closeModal"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Modal));

/***/ }),

/***/ "./frontend/components/user_session/login_form_container.jsx":
/*!*******************************************************************!*\
  !*** ./frontend/components/user_session/login_form_container.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_session_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/session_user_actions */ "./frontend/actions/session_user_actions.js");
/* harmony import */ var _session_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session_form */ "./frontend/components/user_session/session_form.jsx");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");






var mapStateToProps = function mapStateToProps(_ref) {
  var session = _ref.session,
      users = _ref.entities.users,
      errors = _ref.errors;
  return {
    currentUser: users[session.id],
    formType: "login",
    errors: errors.session
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    processForm: function processForm(user) {
      return dispatch(Object(_actions_session_user_actions__WEBPACK_IMPORTED_MODULE_2__["login"])(user));
    },
    demoLogin: function demoLogin() {
      return dispatch(Object(_actions_session_user_actions__WEBPACK_IMPORTED_MODULE_2__["login"])({
        email: "demo@demo.demo",
        password: "demopassword"
      })).then(function () {
        setTimeout(function () {
          alert("Your demo user session has expired. Please log in again.");
          dispatch(Object(_actions_session_user_actions__WEBPACK_IMPORTED_MODULE_2__["logout"])());
        }, 600000);
      });
    },
    closeModal: function closeModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__["closeModal"])());
    },
    otherForm: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "other-form",
      onClick: function onClick() {
        return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__["openModal"])("signup"));
      }
    }, "Sign Up"),
    clearErrors: function clearErrors() {
      return dispatch(Object(_actions_session_user_actions__WEBPACK_IMPORTED_MODULE_2__["clearSessionErrors"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_session_form__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./frontend/components/user_session/session_form.jsx":
/*!***********************************************************!*\
  !*** ./frontend/components/user_session/session_form.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
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





var SessionForm = /*#__PURE__*/function (_React$Component) {
  _inherits(SessionForm, _React$Component);

  function SessionForm(props) {
    var _this;

    _classCallCheck(this, SessionForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SessionForm).call(this, props));
    _this.state = {
      email: "",
      password: "",
      full_name: ""
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SessionForm, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearErrors();
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
    key: "handleSubmit",
    value: function handleSubmit(clicked) {
      var _this3 = this;

      return function (e) {
        if (e.which === 13 || clicked) {
          e.preventDefault();

          _this3.props.processForm(Object.assign({}, _this3.state));
        }
      };
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
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faExclamationCircle"],
          id: "error-icon"
        }), error);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var rightFooter;
      var nameInput = null;
      var updatesCheckbox = null;

      if (this.props.formType === "login") {
        rightFooter = "New to Scribbled?";
      } else {
        rightFooter = "Already have an account?";
        nameInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "input-container"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          value: this.state.full_name,
          onChange: this.update("full_name"),
          className: "login-input",
          autoComplete: "off",
          onKeyPress: this.handleSubmit(false)
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-container",
        id: "modal"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "overlay"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login-form-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login-form-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "left-col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "Scribbled",
        className: "logo-img",
        src: window.logoURL
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "welcome"
      }, this.props.formType === "login" ? "Welcome back!" : "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "right-col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-top"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-top-btns"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "back-btn-container"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "close-btn",
        onClick: this.props.closeModal
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        id: "modal-icon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTimes"],
        color: "grey"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-title"
      }, this.props.formType === "login" ? "Sign In" : "Sign Up", " with Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "errors-container"
      }, this.renderErrors()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit(true),
        className: "login-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login-form"
      }, nameInput, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "email-input",
        type: "text",
        value: this.state.email,
        onChange: this.update("email"),
        className: "login-input",
        autoComplete: "off",
        onKeyPress: this.handleSubmit(false)
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Password", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "password-length"
      }, this.props.formType === "signup" ? "(at least 6 characters)" : null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        value: this.state.password,
        onChange: this.update("password"),
        className: "login-input",
        autoComplete: "off",
        onKeyPress: this.handleSubmit(false)
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "session-submit submit-btn",
        type: "submit"
      }, this.props.formType === "login" ? "Sign In" : "Sign Up"), this.props.formType === "login" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "demo-signin-btn",
        onClick: this.props.demoLogin
      }, "Demo User Login") : null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "right-footer-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "footer-text"
      }, rightFooter), this.props.otherForm)))));
    }
  }]);

  return SessionForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SessionForm);

/***/ }),

/***/ "./frontend/components/user_session/signup_form_container.jsx":
/*!********************************************************************!*\
  !*** ./frontend/components/user_session/signup_form_container.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_session_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/session_user_actions */ "./frontend/actions/session_user_actions.js");
/* harmony import */ var _session_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session_form */ "./frontend/components/user_session/session_form.jsx");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");






var mapStateToProps = function mapStateToProps(_ref) {
  var errors = _ref.errors;
  return {
    errors: errors.session,
    formType: "signup"
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    processForm: function processForm(user) {
      return dispatch(Object(_actions_session_user_actions__WEBPACK_IMPORTED_MODULE_2__["signup"])(user));
    },
    closeModal: function closeModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__["closeModal"])());
    },
    otherForm: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "other-form",
      onClick: function onClick() {
        return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__["openModal"])("login"));
      }
    }, "Log In"),
    clearErrors: function clearErrors() {
      return dispatch(Object(_actions_session_user_actions__WEBPACK_IMPORTED_MODULE_2__["clearSessionErrors"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_session_form__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ })

}]);
//# sourceMappingURL=2.bundle.js.map