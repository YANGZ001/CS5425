"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SubPage = /*#__PURE__*/function (_React$Component) {
  _inherits(SubPage, _React$Component);

  var _super = _createSuper(SubPage);

  function SubPage() {
    _classCallCheck(this, SubPage);

    return _super.apply(this, arguments);
  }

  _createClass(SubPage, [{
    key: "render",
    value: function render() {
      var file = this.props.file;
      return /*#__PURE__*/React.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/React.createElement("img", {
        src: file,
        class: "img-fluid mx-auto rounded d-block",
        alt: "Responsive image"
      }));
    }
  }]);

  return SubPage;
}(React.Component);

var WelcomePage = /*#__PURE__*/function (_React$Component2) {
  _inherits(WelcomePage, _React$Component2);

  var _super2 = _createSuper(WelcomePage);

  function WelcomePage() {
    _classCallCheck(this, WelcomePage);

    return _super2.apply(this, arguments);
  }

  _createClass(WelcomePage, [{
    key: "render",
    value: function render() {
      var file1 = "./resource/CS5425.png";
      var file2 = "./resource/problem-motivation.png";
      return /*#__PURE__*/React.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/React.createElement("h2", {
        style: {
          "text-align": "center"
        }
      }, "Hi there, this is the website for CS5425 project"), /*#__PURE__*/React.createElement("img", {
        src: file1,
        class: "img-fluid mx-auto rounded d-block",
        alt: "Responsive image"
      }), /*#__PURE__*/React.createElement("img", {
        src: file2,
        class: "img-fluid mx-auto rounded d-block",
        alt: "Responsive image"
      }));
    }
  }]);

  return WelcomePage;
}(React.Component);

var NewPage = /*#__PURE__*/function (_React$Component3) {
  _inherits(NewPage, _React$Component3);

  var _super3 = _createSuper(NewPage);

  function NewPage() {
    _classCallCheck(this, NewPage);

    return _super3.apply(this, arguments);
  }

  _createClass(NewPage, [{
    key: "render",
    value: function render() {
      var file = "./resource/CS5425.jpg";
      return /*#__PURE__*/React.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/React.createElement("h2", {
        style: {
          "text-align": "center"
        }
      }, "We will continue adding more analysis results..."), /*#__PURE__*/React.createElement("img", {
        src: file,
        class: "img-fluid mx-auto rounded d-block",
        alt: "Responsive image"
      }));
    }
  }]);

  return NewPage;
}(React.Component);

var Home = /*#__PURE__*/function (_React$Component4) {
  _inherits(Home, _React$Component4);

  var _super4 = _createSuper(Home);

  function Home() {
    var _this;

    _classCallCheck(this, Home);

    _this = _super4.call(this);
    _this.state = {
      display: -1
    };
    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "setDisplay",
    value: function setDisplay(x) {
      this.setState({
        display: x
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
        style: {
          "text-align": "center"
        }
      }, "Ukraine Russia War Twitter Sentiment Analysis "), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
        class: "container-fluid row"
      }, /*#__PURE__*/React.createElement("div", {
        class: "col btn-group btn-group-lg mr-2",
        role: "group",
        "aria-label": "Basic example"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        class: "btn btn-primary btn-lg",
        onClick: function onClick() {
          _this2.setDisplay(-1);
        }
      }, "Home")), /*#__PURE__*/React.createElement("div", {
        class: "col btn-group btn-group-lg mr-2",
        role: "group",
        "aria-label": "Basic example"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        class: "btn btn-primary btn-lg",
        onClick: function onClick() {
          _this2.setDisplay(0);
        }
      }, "Overview")), /*#__PURE__*/React.createElement("div", {
        class: "col btn-group btn-group-lg mr-2",
        role: "group",
        "aria-label": "Basic example"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        class: "btn btn-primary btn-lg",
        onClick: function onClick() {
          _this2.setDisplay(1);
        }
      }, "02/21 to 02/27")), /*#__PURE__*/React.createElement("div", {
        class: "col btn-group btn-group-lg mr-2",
        role: "group",
        "aria-label": "Basic example"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        class: "btn btn-primary btn-lg",
        onClick: function onClick() {
          _this2.setDisplay(2);
        }
      }, "02/28 to 03/06")), /*#__PURE__*/React.createElement("div", {
        class: "col btn-group btn-group-lg mr-2",
        role: "group",
        "aria-label": "Basic example"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        class: "btn btn-primary btn-lg",
        onClick: function onClick() {
          _this2.setDisplay(3);
        }
      }, "03/07 to 03/13")), /*#__PURE__*/React.createElement("div", {
        class: "col btn-group btn-group-lg mr-2",
        role: "group",
        "aria-label": "Basic example"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        class: "btn btn-primary btn-lg",
        onClick: function onClick() {
          _this2.setDisplay(4);
        }
      }, "03/14 to 03/20")), /*#__PURE__*/React.createElement("div", {
        class: "col btn-group btn-group-lg mr-2",
        role: "group",
        "aria-label": "Basic example"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        class: "btn btn-primary btn-lg",
        onClick: function onClick() {
          _this2.setDisplay(5);
        }
      }, "continuing..."))), /*#__PURE__*/React.createElement("hr", null), this.state.display == -1 && /*#__PURE__*/React.createElement(WelcomePage, null), this.state.display == 0 && /*#__PURE__*/React.createElement(SubPage, {
        file: "/resource/overview.jpg"
      }), this.state.display == 1 && /*#__PURE__*/React.createElement(SubPage, {
        file: "/resource/feb21_feb27.png"
      }), this.state.display == 2 && /*#__PURE__*/React.createElement(SubPage, {
        file: "/resource/feb28_mar06.png"
      }), this.state.display == 3 && /*#__PURE__*/React.createElement(SubPage, {
        file: "/resource/mar07_mar13.png"
      }), this.state.display == 4 && /*#__PURE__*/React.createElement(SubPage, {
        file: "/resource/mar14_mar20.png"
      }), this.state.display == 5 && /*#__PURE__*/React.createElement(NewPage, null));
    }
  }]);

  return Home;
}(React.Component);

var element = /*#__PURE__*/React.createElement(Home, null);
ReactDOM.render(element, document.getElementById('contents'));