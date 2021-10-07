/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \***********************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Fascinate&family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Nova+Flat);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  padding: 0;\n  margin: 0;\n}\n\n::-webkit-scrollbar {\n  width: 0.6rem;\n}\n\n::-webkit-scrollbar-track {\n  background-color: #2b2b2b;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #8f5d00;\n  border-radius: 0.4rem;\n  border: 0.2rem solid #2b2b2b;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: #f59f00;\n}\n\nhtml {\n  font-size: 18px;\n}\n\nbody {\n  font-family: \"Inria Sans\", sans-serif;\n  background-color: #2b2b2b;\n  color: #f59f00;\n}\n\nh1 {\n  font-family: \"Nova Flat\", cursive;\n  text-transform: uppercase;\n  font-size: 3rem;\n  letter-spacing: 0.2em;\n}\n\nul {\n  list-style-type: none;\n}\n\nbutton,\nli,\ninput {\n  padding: 0.6em 0.8em;\n}\n\ninput:not([type=submit]) {\n  background-color: rgba(0, 0, 0, 0.4);\n  border-radius: 0.4em;\n  border: none;\n  font-size: 1rem;\n  color: #f59f00;\n  -webkit-transition: background-color 120ms ease-out;\n  transition: background-color 120ms ease-out;\n}\ninput:not([type=submit])::-webkit-input-placeholder {\n  color: rgba(245, 159, 0, 0.6);\n}\ninput:not([type=submit])::-moz-placeholder {\n  color: rgba(245, 159, 0, 0.6);\n}\ninput:not([type=submit]):-ms-input-placeholder {\n  color: rgba(245, 159, 0, 0.6);\n}\ninput:not([type=submit])::-ms-input-placeholder {\n  color: rgba(245, 159, 0, 0.6);\n}\ninput:not([type=submit])::placeholder {\n  color: rgba(245, 159, 0, 0.6);\n}\ninput:not([type=submit]):focus {\n  outline: none;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n[dir=\"ltr\"] button,[dir=\"ltr\"] \ninput[type=submit]{\n  padding-right: 1em;\n}\n\n[dir=\"rtl\"] button,[dir=\"rtl\"] \ninput[type=submit]{\n  padding-left: 1em;\n}\n\nbutton,\ninput[type=submit] {\n  font-weight: bold;\n  border: none;\n  font-size: 0.8rem;\n  border-radius: 0.4em;\n  padding-top: 0.4em;\n  padding-bottom: 0.4em;\n  background-color: #353535;\n  color: #f59f00;\n  cursor: pointer;\n  -webkit-transition-duration: 120ms;\n          transition-duration: 120ms;\n  -webkit-transition-property: background-color, -webkit-transform;\n  transition-property: background-color, -webkit-transform;\n  transition-property: background-color, transform;\n  transition-property: background-color, transform, -webkit-transform;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);\n}\nbutton:hover,\ninput[type=submit]:hover {\n  color: white;\n  -webkit-transform: translateY(-2px);\n          transform: translateY(-2px);\n}\nbutton:active,\ninput[type=submit]:active {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\nbutton:disabled,\ninput[type=submit]:disabled {\n  border: 2px solid #a0a0a0;\n}\nbutton.focus-visible,\ninput[type=submit].focus-visible {\n  outline: 2px solid #f59f00;\n}\nbutton:focus-visible,\ninput[type=submit]:focus-visible {\n  outline: 2px solid #f59f00;\n}\n\nheader {\n  padding: 2rem;\n  background-color: rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);\n  margin-bottom: 2rem;\n}\n\nmain {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 auto;\n  width: -webkit-fit-content;\n  width: fit-content;\n  width: -moz-fit-content;\n  border-radius: 1.4rem;\n  -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  background-color: #3f3f3f;\n}\nmain .header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  grid-gap: 1rem;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\nmain .header h2 {\n  font-family: \"Fascinate\", cursive;\n}\nmain section {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\nmain section.leaderboard {\n  padding-left: 4rem;\n  padding-right: 4rem;\n  padding-right: 6rem;\n  height: 50vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\nmain #scoreboard {\n  border-radius: 0.4rem;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\n  overflow: auto;\n  background-color: #303030;\n  height: 100%;\n}\nmain #scoreboard li.score-card:nth-child(odd) {\n  background-color: #2b2b2b;\n}\nmain #scoreboard li.score-card:nth-child(even) {\n  background-color: #303030;\n}\nmain #scoreboard li.score-card .details {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0;\n  position: relative;\n}\nmain #scoreboard li.score-card .progress {\n  background-color: #f59f00;\n  height: 0.4rem;\n  width: 0%;\n  border-radius: 0.2rem;\n  -webkit-transition: all 800ms;\n  transition: all 800ms;\n  margin-top: 0.2rem;\n  margin-bottom: 0.2rem;\n}\nmain #scoreboard li.score-card .progress.active {\n  background: crimson;\n}\nmain section.add-score {\n  background: linear-gradient(45deg, #ff642c, #922be7);\n  padding-left: 4rem;\n  padding-right: 4rem;\n}\nmain section.add-score form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  grid-gap: 1rem;\n  gap: 1rem;\n}\nmain section.add-score form input[type=submit] {\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  margin-left: auto;\n  padding: 0.8em 1.4em;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;;;EAGE,UAAA;EACA,SAAA;AAEF;;AASA;EACE,aAAA;AANF;;AASA;EACE,yBAPO;AACT;;AASA;EACE,yBAAA;EACA,qBAAA;EACA,4BAAA;EACA,+BAAA;UAAA,uBAAA;AANF;;AASA;EACE,yBAtBO;AAgBT;;AASA;EACE,eAAA;AANF;;AASA;EACE,qCAAA;EACA,yBA3BO;EA4BP,cAhCO;AA0BT;;AASA;EACE,iCAAA;EACA,yBAAA;EACA,eAAA;EACA,qBAAA;AANF;;AASA;EACE,qBAAA;AANF;;AASA;;;EAGE,oBAAA;AANF;;AASA;EACE,oCAAA;EACA,oBAAA;EACA,YAAA;EACA,eAAA;EACA,cAzDO;EA0DP,mDAAA;EAAA,2CAAA;AANF;AAQE;EACE,6BAAA;AANJ;AAKE;EACE,6BAAA;AANJ;AAKE;EACE,6BAAA;AANJ;AAKE;EACE,6BAAA;AANJ;AAKE;EACE,6BAAA;AANJ;AASE;EACE,aAAA;EACA,oCAAA;AAPJ;;AAWA;;EAOE;AAFF;;AALA;;EAOE;AAFF;;AALA;;EAEE,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,oBAAA;EACA,kBAAA;EAAA,qBAAA;EAEA,yBAAA;EACA,cA/EO;EAiFP,eAAA;EACA,kCAAA;UAAA,0BAAA;EACA,gEAAA;EAAA,wDAAA;EAAA,gDAAA;EAAA,mEAAA;EACA,0KACE;UADF,kKACE;AAVJ;AAgBE;;EACE,YAAA;EACA,mCAAA;UAAA,2BAAA;AAbJ;AAgBE;;EACE,gCAAA;UAAA,wBAAA;AAbJ;AAgBE;;EACE,yBAAA;AAbJ;AAgBE;;EACE,0BAAA;AAbJ;AAYE;;EACE,0BAAA;AAbJ;;AAiBA;EACE,aAAA;EACA,oCAAA;EACA,gDAAA;UAAA,wCAAA;EACA,mBAAA;AAdF;;AAiBA;EACE,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,cAAA;EACA,0BAAA;EAAA,kBAAA;EACA,uBAAA;EACA,qBAAA;EACA,4GACE;UADF,oGACE;EAGF,gBAAA;EACA,yBAAA;AAjBF;AAmBE;EACE,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,cAAA;EAAA,SAAA;EACA,mBAAA;AAjBJ;AAmBI;EACE,iCAAA;AAjBN;AAqBE;EACE,iBAAA;EAAA,oBAAA;AAnBJ;AAsBE;EACE,kBAAA;EAAA,mBAAA;EACA,mBAAA;EACA,YAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;AApBJ;AAuBE;EACE,qBAAA;EACA,gDAAA;UAAA,wCAAA;EACA,cAAA;EACA,yBAAA;EACA,YAAA;AArBJ;AAwBM;EACE,yBAAA;AAtBR;AAyBM;EACE,yBAAA;AAvBR;AA0BM;EACE,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,8BAAA;EACA,UAAA;EACA,kBAAA;AAxBR;AA2BM;EAGE,yBAjLC;EAkLD,cAHI;EAIJ,SAAA;EACA,qBAAA;EACA,6BAAA;EAAA,qBAAA;EACA,kBAAA;EAAA,qBAAA;AA3BR;AA6BQ;EACE,mBAAA;AA3BV;AAiCE;EACE,oDAAA;EACA,kBAAA;EAAA,mBAAA;AA/BJ;AAiCI;EACE,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,cAAA;EAAA,SAAA;AA/BN;AAiCM;EACE,0BAAA;EAAA,uBAAA;EAAA,kBAAA;EACA,iBAAA;EACA,oBAAA;AA/BR","sourcesContent":["*,\r\n*::after,\r\n*::before {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Fascinate&family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Nova+Flat');\r\n\r\n$orange: rgb(245, 159, 0);\r\n$black: #000;\r\n$white: #fff;\r\n$light-purple: #452b70;\r\n$bg-clr: #2b2b2b;\r\n\r\n::-webkit-scrollbar {\r\n  width: 0.6rem;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background-color: $bg-clr;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background-color: darken($orange, 20%);\r\n  border-radius: 0.4rem;\r\n  border: 0.2rem solid $bg-clr;\r\n  box-sizing: content-box;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background-color: $orange;\r\n}\r\n\r\nhtml {\r\n  font-size: 18px;\r\n}\r\n\r\nbody {\r\n  font-family: 'Inria Sans', sans-serif;\r\n  background-color: $bg-clr;\r\n  color: $orange;\r\n}\r\n\r\nh1 {\r\n  font-family: 'Nova Flat', cursive;\r\n  text-transform: uppercase;\r\n  font-size: 3rem;\r\n  letter-spacing: 0.2em;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\nbutton,\r\nli,\r\ninput {\r\n  padding: 0.6em 0.8em;\r\n}\r\n\r\ninput:not([type=submit]) {\r\n  background-color: rgba($black, 0.4);\r\n  border-radius: 0.4em;\r\n  border: none;\r\n  font-size: 1rem;\r\n  color: $orange;\r\n  transition: background-color 120ms ease-out;\r\n\r\n  &::placeholder {\r\n    color: rgba($orange, 0.6);\r\n  }\r\n\r\n  &:focus {\r\n    outline: none;\r\n    background-color: rgba($black, 0.6);\r\n  }\r\n}\r\n\r\nbutton,\r\ninput[type=submit] {\r\n  font-weight: bold;\r\n  border: none;\r\n  font-size: 0.8rem;\r\n  border-radius: 0.4em;\r\n  padding-block: 0.4em;\r\n  padding-inline-end: 1em;\r\n  background-color: rgb(53, 53, 53);\r\n  color: $orange;\r\n  // box-shadow: 0 1px 1px 1px rgba($black, 0.3);\r\n  cursor: pointer;\r\n  transition-duration: 120ms;\r\n  transition-property: background-color, transform;\r\n  box-shadow:\r\n    0 1px 1px rgba($black, 0.1),\r\n    0 2px 2px rgba($black, 0.1),\r\n    0 4px 4px rgba($black, 0.1),\r\n    0 8px 8px rgba($black, 0.1),\r\n    0 16px 16px rgba($black, 0.1);\r\n\r\n  &:hover {\r\n    color: white;\r\n    transform: translateY(-2px);\r\n  }\r\n\r\n  &:active {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  &:disabled {\r\n    border: 2px solid rgb(160, 160, 160);\r\n  }\r\n\r\n  &:focus-visible {\r\n    outline: 2px solid $orange;\r\n  }\r\n}\r\n\r\nheader {\r\n  padding: 2rem;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);\r\n  margin-bottom: 2rem;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  margin: 0 auto;\r\n  width: fit-content;\r\n  width: -moz-fit-content;\r\n  border-radius: 1.4rem;\r\n  box-shadow:\r\n    0 2px 2px rgba(0, 0, 0, 0.2),\r\n    0 4px 4px rgba(0, 0, 0, 0.1),\r\n    0 8px 8px rgba(0, 0, 0, 0.1);\r\n  overflow: hidden;\r\n  background-color: rgb(63, 63, 63);\r\n\r\n  .header {\r\n    display: flex;\r\n    gap: 1rem;\r\n    margin-bottom: 1rem;\r\n\r\n    h2 {\r\n      font-family: 'Fascinate', cursive;\r\n    }\r\n  }\r\n\r\n  section {\r\n    padding-block: 2rem;\r\n  }\r\n\r\n  section.leaderboard {\r\n    padding-inline: 4rem;\r\n    padding-right: 6rem;\r\n    height: 50vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  #scoreboard {\r\n    border-radius: 0.4rem;\r\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\r\n    overflow: auto;\r\n    background-color: rgb(48, 48, 48);\r\n    height: 100%;\r\n\r\n    li.score-card {\r\n      &:nth-child(odd) {\r\n        background-color: rgb(43, 43, 43);\r\n      }\r\n\r\n      &:nth-child(even) {\r\n        background-color: rgb(48, 48, 48);\r\n      }\r\n\r\n      .details {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        padding: 0;\r\n        position: relative;\r\n      }\r\n\r\n      .progress {\r\n        $h: 0.4rem;\r\n\r\n        background-color: $orange;\r\n        height: $h;\r\n        width: 0%;\r\n        border-radius: $h / 2;\r\n        transition: all 800ms;\r\n        margin-block: 0.2rem;\r\n\r\n        &.active {\r\n          background: crimson;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  section.add-score {\r\n    background: linear-gradient(45deg, rgb(255, 100, 44), rgb(146, 43, 231));\r\n    padding-inline: 4rem;\r\n\r\n    form {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 1rem;\r\n\r\n      input[type=submit] {\r\n        width: min-content;\r\n        margin-left: auto;\r\n        padding: 0.8em 1.4em;\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URL": function() { return /* binding */ BASE_URL; },
/* harmony export */   "GAME_ID": function() { return /* binding */ GAME_ID; },
/* harmony export */   "getScores": function() { return /* binding */ getScores; },
/* harmony export */   "addScore": function() { return /* binding */ addScore; }
/* harmony export */ });
const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

const GAME_ID = 'sa7iLyWCcC3Ao7tJMfAb';

const getScores = async () => {
  const resp = await fetch(`${BASE_URL}/games/${GAME_ID}/scores`);
  return resp.json();
};

const addScore = async (username, score) => {
  const resp = await fetch(`${BASE_URL}/games/${GAME_ID}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: username,
      score,
    }),
  });
  return resp.json();
};

/***/ }),

/***/ "./src/dom-functions.js":
/*!******************************!*\
  !*** ./src/dom-functions.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializePageHTML": function() { return /* binding */ initializePageHTML; },
/* harmony export */   "createScoreCardElement": function() { return /* binding */ createScoreCardElement; },
/* harmony export */   "initializeScoreboard": function() { return /* binding */ initializeScoreboard; },
/* harmony export */   "addToScoreBoard": function() { return /* binding */ addToScoreBoard; },
/* harmony export */   "setDisabledState": function() { return /* binding */ setDisabledState; },
/* harmony export */   "clearInput": function() { return /* binding */ clearInput; }
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/api.js");


const initializePageHTML = () => {
  const initialHTML = `
  <header>
    <h1>Leaderboard</h1>
  </header>
  <main>
    <section class="leaderboard">
      <div class="header">
        <h2>Recent scores</h2>
        <button id="refresh-btn" type="button">Refresh</button>
      </div>
      <ul id="scoreboard">
      </ul>
    </section>
    <section class="add-score">
      <div class="header">
        <h2>Add your score</h2>
      </div>
      <form action="#">
        <input type="text" name="name" id="name" placeholder="Your name" required autocomplete="off">
        <input type="number" name="score" id="score" placeholder="Your score" required autocomplete="off">
        <input type="submit" value="Submit">
      </form>
    </section>
  </main>
  `;
  document.body.innerHTML = initialHTML;
};

const createScoreCardElement = (user, score) => {
  const scoreLi = document.createElement('li');

  const innerHTML = `
    <div>
      <div class="details">
        <span class="name">${user}</span>
        <span class="name">${score}</span>
      </div>
      <div class="progress"></div>
    </div>
  `;

  scoreLi.classList.add('score-card');
  // scoreLi.classList.add('active');
  scoreLi.innerHTML = innerHTML;
  return scoreLi;
};

const initializeScoreboard = async () => {
  const scoreboard = document.getElementById('scoreboard');
  const scores = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getScores)();
  scores.result.sort((a, b) => b.score - a.score);

  const maxScore = scores.result[0].score;

  scoreboard.innerHTML = '';
  scores.result.forEach(({ user, score }) => {
    const scoreCard = createScoreCardElement(user, score);
    scoreboard.appendChild(scoreCard);
    scoreboard.getBoundingClientRect(); // NOTE: neccessary for transition to work

    scoreCard.querySelector('.progress').style.width = `${(score / maxScore) * 100}%`;
    scoreCard.querySelector('.progress').classList.add('active');
  });
};

const addToScoreBoard = async (usernameValue, scoreValue) => {
  const username = usernameValue.trim();
  const score = parseInt(scoreValue.trim(), 10);
  if (!username || !score) return false;
  const response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.addScore)(username, score);
  if (response.message) return false;
  return true;
};

const setDisabledState = (element, state) => {
  element.disabled = !!state;
};

const clearInput = (...inputs) => inputs.forEach((input) => { input.value = ''; });

/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-functions.js */ "./src/dom-functions.js");


/* harmony default export */ __webpack_exports__["default"] = (() => {
  const refreshBtn = document.getElementById('refresh-btn');
  refreshBtn.addEventListener('click', _dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.initializeScoreboard);
  refreshBtn.click();

  const formElem = document.querySelector('form');
  const userInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  formElem.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitInput = formElem.querySelector('input[type=submit]');
    (0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.setDisabledState)(submitInput, true);
    const success = await (0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.addToScoreBoard)(userInput.value, scoreInput.value);
    if (success) (0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.initializeScoreboard)();
    (0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.clearInput)(userInput, scoreInput);
    (0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.setDisabledState)(submitInput, false);
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _dom_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-functions.js */ "./src/dom-functions.js");
/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners.js */ "./src/listeners.js");




(0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_1__.initializePageHTML)();
(0,_listeners_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssT0FBTyxVQUFVLFdBQVcsV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLEtBQUssT0FBTyxXQUFXLEtBQUssT0FBTyxXQUFXLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsd0RB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ZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOc0I7QUFDa0M7QUFDTjs7QUFFbEQscUVBQWtCO0FBQ2xCLHlEQUFvQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9zdHlsZS5zY3NzPzQwZjciLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvZG9tLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZhc2NpbmF0ZSZmYW1pbHk9SW5yaWErU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw3MDAmZmFtaWx5PU5vdmErRmxhdCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDAuNnJlbTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZjVkMDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjMmIyYjJiO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OWYwMDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnJpYSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XFxuICBjb2xvcjogI2Y1OWYwMDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3ZhIEZsYXRcXFwiLCBjdXJzaXZlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5idXR0b24sXFxubGksXFxuaW5wdXQge1xcbiAgcGFkZGluZzogMC42ZW0gMC44ZW07XFxufVxcblxcbmlucHV0Om5vdChbdHlwZT1zdWJtaXRdKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjRlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjZjU5ZjAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEyMG1zIGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMjBtcyBlYXNlLW91dDtcXG59XFxuaW5wdXQ6bm90KFt0eXBlPXN1Ym1pdF0pOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2JhKDI0NSwgMTU5LCAwLCAwLjYpO1xcbn1cXG5pbnB1dDpub3QoW3R5cGU9c3VibWl0XSk6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoMjQ1LCAxNTksIDAsIDAuNik7XFxufVxcbmlucHV0Om5vdChbdHlwZT1zdWJtaXRdKTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoMjQ1LCAxNTksIDAsIDAuNik7XFxufVxcbmlucHV0Om5vdChbdHlwZT1zdWJtaXRdKTo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2JhKDI0NSwgMTU5LCAwLCAwLjYpO1xcbn1cXG5pbnB1dDpub3QoW3R5cGU9c3VibWl0XSk6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2JhKDI0NSwgMTU5LCAwLCAwLjYpO1xcbn1cXG5pbnB1dDpub3QoW3R5cGU9c3VibWl0XSk6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuW2Rpcj1cXFwibHRyXFxcIl0gYnV0dG9uLFtkaXI9XFxcImx0clxcXCJdIFxcbmlucHV0W3R5cGU9c3VibWl0XXtcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG59XFxuXFxuW2Rpcj1cXFwicnRsXFxcIl0gYnV0dG9uLFtkaXI9XFxcInJ0bFxcXCJdIFxcbmlucHV0W3R5cGU9c3VibWl0XXtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjRlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjRlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjRlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XFxuICBjb2xvcjogI2Y1OWYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMTIwbXM7XFxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEyMG1zO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCAtd2Via2l0LXRyYW5zZm9ybTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIC13ZWJraXQtdHJhbnNmb3JtO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgdHJhbnNmb3JtO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgdHJhbnNmb3JtLCAtd2Via2l0LXRyYW5zZm9ybTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA4cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxNnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDhweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDE2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbmJ1dHRvbjpob3ZlcixcXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG59XFxuYnV0dG9uOmFjdGl2ZSxcXG5pbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcbmJ1dHRvbjpkaXNhYmxlZCxcXG5pbnB1dFt0eXBlPXN1Ym1pdF06ZGlzYWJsZWQge1xcbiAgYm9yZGVyOiAycHggc29saWQgI2EwYTBhMDtcXG59XFxuYnV0dG9uLmZvY3VzLXZpc2libGUsXFxuaW5wdXRbdHlwZT1zdWJtaXRdLmZvY3VzLXZpc2libGUge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICNmNTlmMDA7XFxufVxcbmJ1dHRvbjpmb2N1cy12aXNpYmxlLFxcbmlucHV0W3R5cGU9c3VibWl0XTpmb2N1cy12aXNpYmxlIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjZjU5ZjAwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxLjRyZW07XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmM2YzZjtcXG59XFxubWFpbiAuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1nYXA6IDFyZW07XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5tYWluIC5oZWFkZXIgaDIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGYXNjaW5hdGVcXFwiLCBjdXJzaXZlO1xcbn1cXG5tYWluIHNlY3Rpb24ge1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG59XFxubWFpbiBzZWN0aW9uLmxlYWRlcmJvYXJkIHtcXG4gIHBhZGRpbmctbGVmdDogNHJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDRyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiA2cmVtO1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbm1haW4gI3Njb3JlYm9hcmQge1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5tYWluICNzY29yZWJvYXJkIGxpLnNjb3JlLWNhcmQ6bnRoLWNoaWxkKG9kZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcXG59XFxubWFpbiAjc2NvcmVib2FyZCBsaS5zY29yZS1jYXJkOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcbn1cXG5tYWluICNzY29yZWJvYXJkIGxpLnNjb3JlLWNhcmQgLmRldGFpbHMge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbm1haW4gI3Njb3JlYm9hcmQgbGkuc2NvcmUtY2FyZCAucHJvZ3Jlc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OWYwMDtcXG4gIGhlaWdodDogMC40cmVtO1xcbiAgd2lkdGg6IDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgODAwbXM7XFxuICB0cmFuc2l0aW9uOiBhbGwgODAwbXM7XFxuICBtYXJnaW4tdG9wOiAwLjJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxufVxcbm1haW4gI3Njb3JlYm9hcmQgbGkuc2NvcmUtY2FyZCAucHJvZ3Jlc3MuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IGNyaW1zb247XFxufVxcbm1haW4gc2VjdGlvbi5hZGQtc2NvcmUge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmY2NDJjLCAjOTIyYmU3KTtcXG4gIHBhZGRpbmctbGVmdDogNHJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDRyZW07XFxufVxcbm1haW4gc2VjdGlvbi5hZGQtc2NvcmUgZm9ybSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5tYWluIHNlY3Rpb24uYWRkLXNjb3JlIGZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdIHtcXG4gIHdpZHRoOiAtd2Via2l0LW1pbi1jb250ZW50O1xcbiAgd2lkdGg6IC1tb3otbWluLWNvbnRlbnQ7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHBhZGRpbmc6IDAuOGVtIDEuNGVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0UsVUFBQTtFQUNBLFNBQUE7QUFFRjs7QUFTQTtFQUNFLGFBQUE7QUFORjs7QUFTQTtFQUNFLHlCQVBPO0FBQ1Q7O0FBU0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FBTkY7O0FBU0E7RUFDRSx5QkF0Qk87QUFnQlQ7O0FBU0E7RUFDRSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxxQ0FBQTtFQUNBLHlCQTNCTztFQTRCUCxjQWhDTztBQTBCVDs7QUFTQTtFQUNFLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFORjs7QUFTQTtFQUNFLHFCQUFBO0FBTkY7O0FBU0E7OztFQUdFLG9CQUFBO0FBTkY7O0FBU0E7RUFDRSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQXpETztFQTBEUCxtREFBQTtFQUFBLDJDQUFBO0FBTkY7QUFRRTtFQUNFLDZCQUFBO0FBTko7QUFLRTtFQUNFLDZCQUFBO0FBTko7QUFLRTtFQUNFLDZCQUFBO0FBTko7QUFLRTtFQUNFLDZCQUFBO0FBTko7QUFLRTtFQUNFLDZCQUFBO0FBTko7QUFTRTtFQUNFLGFBQUE7RUFDQSxvQ0FBQTtBQVBKOztBQVdBOztFQU9FO0FBRkY7O0FBTEE7O0VBT0U7QUFGRjs7QUFMQTs7RUFFRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFBQSxxQkFBQTtFQUVBLHlCQUFBO0VBQ0EsY0EvRU87RUFpRlAsZUFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxnRUFBQTtFQUFBLHdEQUFBO0VBQUEsZ0RBQUE7RUFBQSxtRUFBQTtFQUNBLDBLQUNFO1VBREYsa0tBQ0U7QUFWSjtBQWdCRTs7RUFDRSxZQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQWJKO0FBZ0JFOztFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFiSjtBQWdCRTs7RUFDRSx5QkFBQTtBQWJKO0FBZ0JFOztFQUNFLDBCQUFBO0FBYko7QUFZRTs7RUFDRSwwQkFBQTtBQWJKOztBQWlCQTtFQUNFLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGdEQUFBO1VBQUEsd0NBQUE7RUFDQSxtQkFBQTtBQWRGOztBQWlCQTtFQUNFLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQUEsa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEdBQ0U7VUFERixvR0FDRTtFQUdGLGdCQUFBO0VBQ0EseUJBQUE7QUFqQkY7QUFtQkU7RUFDRSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsbUJBQUE7QUFqQko7QUFtQkk7RUFDRSxpQ0FBQTtBQWpCTjtBQXFCRTtFQUNFLGlCQUFBO0VBQUEsb0JBQUE7QUFuQko7QUFzQkU7RUFDRSxrQkFBQTtFQUFBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO01BQUEsMEJBQUE7VUFBQSxzQkFBQTtBQXBCSjtBQXVCRTtFQUNFLHFCQUFBO0VBQ0EsZ0RBQUE7VUFBQSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFyQko7QUF3Qk07RUFDRSx5QkFBQTtBQXRCUjtBQXlCTTtFQUNFLHlCQUFBO0FBdkJSO0FBMEJNO0VBQ0Usb0JBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtNQUFBLHNCQUFBO1VBQUEsOEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUF4QlI7QUEyQk07RUFHRSx5QkFqTEM7RUFrTEQsY0FISTtFQUlKLFNBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7RUFDQSxrQkFBQTtFQUFBLHFCQUFBO0FBM0JSO0FBNkJRO0VBQ0UsbUJBQUE7QUEzQlY7QUFpQ0U7RUFDRSxvREFBQTtFQUNBLGtCQUFBO0VBQUEsbUJBQUE7QUEvQko7QUFpQ0k7RUFDRSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7TUFBQSwwQkFBQTtVQUFBLHNCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUEvQk47QUFpQ007RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBL0JSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxyXFxuKjo6YWZ0ZXIsXFxyXFxuKjo6YmVmb3JlIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZhc2NpbmF0ZSZmYW1pbHk9SW5yaWErU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw3MDAmZmFtaWx5PU5vdmErRmxhdCcpO1xcclxcblxcclxcbiRvcmFuZ2U6IHJnYigyNDUsIDE1OSwgMCk7XFxyXFxuJGJsYWNrOiAjMDAwO1xcclxcbiR3aGl0ZTogI2ZmZjtcXHJcXG4kbGlnaHQtcHVycGxlOiAjNDUyYjcwO1xcclxcbiRiZy1jbHI6ICMyYjJiMmI7XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMC42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jbHI7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRvcmFuZ2UsIDIwJSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxyXFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAkYmctY2xyO1xcclxcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdJbnJpYSBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jbHI7XFxyXFxuICBjb2xvcjogJG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1mYW1pbHk6ICdOb3ZhIEZsYXQnLCBjdXJzaXZlO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxubGksXFxyXFxuaW5wdXQge1xcclxcbiAgcGFkZGluZzogMC42ZW0gMC44ZW07XFxyXFxufVxcclxcblxcclxcbmlucHV0Om5vdChbdHlwZT1zdWJtaXRdKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRibGFjaywgMC40KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNGVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY29sb3I6ICRvcmFuZ2U7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEyMG1zIGVhc2Utb3V0O1xcclxcblxcclxcbiAgJjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBjb2xvcjogcmdiYSgkb3JhbmdlLCAwLjYpO1xcclxcbiAgfVxcclxcblxcclxcbiAgJjpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGJsYWNrLCAwLjYpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjRlbTtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IDAuNGVtO1xcclxcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAxZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTMsIDUzLCA1Myk7XFxyXFxuICBjb2xvcjogJG9yYW5nZTtcXHJcXG4gIC8vIGJveC1zaGFkb3c6IDAgMXB4IDFweCAxcHggcmdiYSgkYmxhY2ssIDAuMyk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMjBtcztcXHJcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIHRyYW5zZm9ybTtcXHJcXG4gIGJveC1zaGFkb3c6XFxyXFxuICAgIDAgMXB4IDFweCByZ2JhKCRibGFjaywgMC4xKSxcXHJcXG4gICAgMCAycHggMnB4IHJnYmEoJGJsYWNrLCAwLjEpLFxcclxcbiAgICAwIDRweCA0cHggcmdiYSgkYmxhY2ssIDAuMSksXFxyXFxuICAgIDAgOHB4IDhweCByZ2JhKCRibGFjaywgMC4xKSxcXHJcXG4gICAgMCAxNnB4IDE2cHggcmdiYSgkYmxhY2ssIDAuMSk7XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6ZGlzYWJsZWQge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTYwLCAxNjAsIDE2MCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmOmZvY3VzLXZpc2libGUge1xcclxcbiAgICBvdXRsaW5lOiAycHggc29saWQgJG9yYW5nZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEuNHJlbTtcXHJcXG4gIGJveC1zaGFkb3c6XFxyXFxuICAgIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMiksXFxyXFxuICAgIDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSksXFxyXFxuICAgIDAgOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCA2MywgNjMpO1xcclxcblxcclxcbiAgLmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG5cXHJcXG4gICAgaDIge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnRmFzY2luYXRlJywgY3Vyc2l2ZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgc2VjdGlvbiB7XFxyXFxuICAgIHBhZGRpbmctYmxvY2s6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uLmxlYWRlcmJvYXJkIHtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDRyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDZyZW07XFxyXFxuICAgIGhlaWdodDogNTB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNzY29yZWJvYXJkIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCA0OCwgNDgpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICAgIGxpLnNjb3JlLWNhcmQge1xcclxcbiAgICAgICY6bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MywgNDMpO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAmOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDQ4LCA0OCk7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5kZXRhaWxzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAucHJvZ3Jlc3Mge1xcclxcbiAgICAgICAgJGg6IDAuNHJlbTtcXHJcXG5cXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XFxyXFxuICAgICAgICBoZWlnaHQ6ICRoO1xcclxcbiAgICAgICAgd2lkdGg6IDAlO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGggLyAyO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDgwMG1zO1xcclxcbiAgICAgICAgbWFyZ2luLWJsb2NrOiAwLjJyZW07XFxyXFxuXFxyXFxuICAgICAgICAmLmFjdGl2ZSB7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQ6IGNyaW1zb247XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uLmFkZC1zY29yZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDI1NSwgMTAwLCA0NCksIHJnYigxNDYsIDQzLCAyMzEpKTtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDRyZW07XFxyXFxuXFxyXFxuICAgIGZvcm0ge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBnYXA6IDFyZW07XFxyXFxuXFxyXFxuICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcXHJcXG4gICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgcGFkZGluZzogMC44ZW0gMS40ZW07XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGknO1xuXG5leHBvcnQgY29uc3QgR0FNRV9JRCA9ICdzYTdpTHlXQ2NDM0FvN3RKTWZBYic7XG5cbmV4cG9ydCBjb25zdCBnZXRTY29yZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0vZ2FtZXMvJHtHQU1FX0lEfS9zY29yZXNgKTtcbiAgcmV0dXJuIHJlc3AuanNvbigpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFNjb3JlID0gYXN5bmMgKHVzZXJuYW1lLCBzY29yZSkgPT4ge1xuICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L2dhbWVzLyR7R0FNRV9JRH0vc2NvcmVzL2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdXNlcjogdXNlcm5hbWUsXG4gICAgICBzY29yZSxcbiAgICB9KSxcbiAgfSk7XG4gIHJldHVybiByZXNwLmpzb24oKTtcbn07IiwiaW1wb3J0IHsgZ2V0U2NvcmVzLCBhZGRTY29yZSB9IGZyb20gJy4vYXBpLmpzJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVQYWdlSFRNTCA9ICgpID0+IHtcbiAgY29uc3QgaW5pdGlhbEhUTUwgPSBgXG4gIDxoZWFkZXI+XG4gICAgPGgxPkxlYWRlcmJvYXJkPC9oMT5cbiAgPC9oZWFkZXI+XG4gIDxtYWluPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwibGVhZGVyYm9hcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgPGgyPlJlY2VudCBzY29yZXM8L2gyPlxuICAgICAgICA8YnV0dG9uIGlkPVwicmVmcmVzaC1idG5cIiB0eXBlPVwiYnV0dG9uXCI+UmVmcmVzaDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgaWQ9XCJzY29yZWJvYXJkXCI+XG4gICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImFkZC1zY29yZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICA8aDI+QWRkIHlvdXIgc2NvcmU8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiByZXF1aXJlZCBhdXRvY29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwic2NvcmVcIiBpZD1cInNjb3JlXCIgcGxhY2Vob2xkZXI9XCJZb3VyIHNjb3JlXCIgcmVxdWlyZWQgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L3NlY3Rpb24+XG4gIDwvbWFpbj5cbiAgYDtcbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBpbml0aWFsSFRNTDtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTY29yZUNhcmRFbGVtZW50ID0gKHVzZXIsIHNjb3JlKSA9PiB7XG4gIGNvbnN0IHNjb3JlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGNvbnN0IGlubmVySFRNTCA9IGBcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+JHt1c2VyfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+JHtzY29yZX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiPjwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIHNjb3JlTGkuY2xhc3NMaXN0LmFkZCgnc2NvcmUtY2FyZCcpO1xuICAvLyBzY29yZUxpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBzY29yZUxpLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgcmV0dXJuIHNjb3JlTGk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVNjb3JlYm9hcmQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHNjb3JlYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmVib2FyZCcpO1xuICBjb25zdCBzY29yZXMgPSBhd2FpdCBnZXRTY29yZXMoKTtcbiAgc2NvcmVzLnJlc3VsdC5zb3J0KChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZSk7XG5cbiAgY29uc3QgbWF4U2NvcmUgPSBzY29yZXMucmVzdWx0WzBdLnNjb3JlO1xuXG4gIHNjb3JlYm9hcmQuaW5uZXJIVE1MID0gJyc7XG4gIHNjb3Jlcy5yZXN1bHQuZm9yRWFjaCgoeyB1c2VyLCBzY29yZSB9KSA9PiB7XG4gICAgY29uc3Qgc2NvcmVDYXJkID0gY3JlYXRlU2NvcmVDYXJkRWxlbWVudCh1c2VyLCBzY29yZSk7XG4gICAgc2NvcmVib2FyZC5hcHBlbmRDaGlsZChzY29yZUNhcmQpO1xuICAgIHNjb3JlYm9hcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IC8vIE5PVEU6IG5lY2Nlc3NhcnkgZm9yIHRyYW5zaXRpb24gdG8gd29ya1xuXG4gICAgc2NvcmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcycpLnN0eWxlLndpZHRoID0gYCR7KHNjb3JlIC8gbWF4U2NvcmUpICogMTAwfSVgO1xuICAgIHNjb3JlQ2FyZC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkVG9TY29yZUJvYXJkID0gYXN5bmMgKHVzZXJuYW1lVmFsdWUsIHNjb3JlVmFsdWUpID0+IHtcbiAgY29uc3QgdXNlcm5hbWUgPSB1c2VybmFtZVZhbHVlLnRyaW0oKTtcbiAgY29uc3Qgc2NvcmUgPSBwYXJzZUludChzY29yZVZhbHVlLnRyaW0oKSwgMTApO1xuICBpZiAoIXVzZXJuYW1lIHx8ICFzY29yZSkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFkZFNjb3JlKHVzZXJuYW1lLCBzY29yZSk7XG4gIGlmIChyZXNwb25zZS5tZXNzYWdlKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldERpc2FibGVkU3RhdGUgPSAoZWxlbWVudCwgc3RhdGUpID0+IHtcbiAgZWxlbWVudC5kaXNhYmxlZCA9ICEhc3RhdGU7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJJbnB1dCA9ICguLi5pbnB1dHMpID0+IGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4geyBpbnB1dC52YWx1ZSA9ICcnOyB9KTsiLCJpbXBvcnQge1xuICBpbml0aWFsaXplU2NvcmVib2FyZCwgYWRkVG9TY29yZUJvYXJkLCBzZXREaXNhYmxlZFN0YXRlLCBjbGVhcklucHV0LFxufSBmcm9tICcuL2RvbS1mdW5jdGlvbnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJlZnJlc2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVmcmVzaC1idG4nKTtcbiAgcmVmcmVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRpYWxpemVTY29yZWJvYXJkKTtcbiAgcmVmcmVzaEJ0bi5jbGljaygpO1xuXG4gIGNvbnN0IGZvcm1FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpO1xuICBjb25zdCBzY29yZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XG4gIGZvcm1FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHN1Ym1pdElucHV0ID0gZm9ybUVsZW0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1zdWJtaXRdJyk7XG4gICAgc2V0RGlzYWJsZWRTdGF0ZShzdWJtaXRJbnB1dCwgdHJ1ZSk7XG4gICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IGFkZFRvU2NvcmVCb2FyZCh1c2VySW5wdXQudmFsdWUsIHNjb3JlSW5wdXQudmFsdWUpO1xuICAgIGlmIChzdWNjZXNzKSBpbml0aWFsaXplU2NvcmVib2FyZCgpO1xuICAgIGNsZWFySW5wdXQodXNlcklucHV0LCBzY29yZUlucHV0KTtcbiAgICBzZXREaXNhYmxlZFN0YXRlKHN1Ym1pdElucHV0LCBmYWxzZSk7XG4gIH0pO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVBhZ2VIVE1MIH0gZnJvbSAnLi9kb20tZnVuY3Rpb25zLmpzJztcbmltcG9ydCBjcmVhdGVFdmVudExpc3RlbmVycyBmcm9tICcuL2xpc3RlbmVycy5qcyc7XG5cbmluaXRpYWxpemVQYWdlSFRNTCgpO1xuY3JlYXRlRXZlbnRMaXN0ZW5lcnMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=