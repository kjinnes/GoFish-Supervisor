/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/reports",{

/***/ "./components/reports/TableFromJSON.js":
/*!*********************************************!*\
  !*** ./components/reports/TableFromJSON.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_pantero_Code_Codeworks_GoFish_GoFish_Supervisor_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/pantero/Code/Codeworks/GoFish/GoFish-Supervisor/components/reports/TableFromJSON.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar TableFromJSON = function TableFromJSON(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      tableReady = _useState[0],\n      setTableReady = _useState[1];\n\n  var data = props.data;\n  var title = props.title;\n  var header;\n  var rows;\n  var table;\n  console.log('data', data); // remove id and any other unnecessary columns\n\n  if (data.length) {\n    data = data.map(function (_ref) {\n      var id = _ref.id,\n          group_id = _ref.group_id,\n          location = _ref.location,\n          what_ever = _ref.what_ever,\n          rest = (0,_home_pantero_Code_Codeworks_GoFish_GoFish_Supervisor_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, [\"id\", \"group_id\", \"location\", \"what_ever\"]);\n\n      return rest;\n    });\n    header = Object.keys(data[0]).map(function (col, idx) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n        children: col\n      }, idx, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 53\n      }, _this);\n    });\n    console.log('header', header);\n    rows = data.map(function (row) {\n      return Object.values(row).map(function (cell) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n          children: cell\n        }, row.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 63\n        }, _this);\n      });\n    });\n    table = rows.map(function (row, idx) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        children: row\n      }, idx + 1, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 36\n      }, _this);\n    });\n  }\n\n  return header ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      className: \"data-table-title\",\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n      className: \"data-table\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n          children: header\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this), table]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TableFromJSON, \"dIC35Oe2L6uARf2q5cC4yJRwgto=\");\n\n_c = TableFromJSON;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableFromJSON);\n\nvar _c;\n\n$RefreshReg$(_c, \"TableFromJSON\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXBvcnRzL1RhYmxlRnJvbUpTT04uanM/ZjIwZiJdLCJuYW1lcyI6WyJUYWJsZUZyb21KU09OIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInRhYmxlUmVhZHkiLCJzZXRUYWJsZVJlYWR5IiwiZGF0YSIsInRpdGxlIiwiaGVhZGVyIiwicm93cyIsInRhYmxlIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1hcCIsImlkIiwiZ3JvdXBfaWQiLCJsb2NhdGlvbiIsIndoYXRfZXZlciIsInJlc3QiLCJPYmplY3QiLCJrZXlzIiwiY29sIiwiaWR4Iiwicm93IiwidmFsdWVzIiwiY2VsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNLQywrQ0FBUSxDQUFDLElBQUQsQ0FEYjtBQUFBLE1BQ3hCQyxVQUR3QjtBQUFBLE1BQ1pDLGFBRFk7O0FBQUEsTUFFekJDLElBRnlCLEdBRWhCSixLQUZnQixDQUV6QkksSUFGeUI7QUFBQSxNQUd2QkMsS0FIdUIsR0FHYkwsS0FIYSxDQUd2QkssS0FIdUI7QUFJL0IsTUFBSUMsTUFBSjtBQUNBLE1BQUlDLElBQUo7QUFDQSxNQUFJQyxLQUFKO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JOLElBQXBCLEVBUCtCLENBUS9COztBQUNBLE1BQUlBLElBQUksQ0FBQ08sTUFBVCxFQUFpQjtBQUNmUCxRQUFJLEdBQUdBLElBQUksQ0FBQ1EsR0FBTCxDQUFTO0FBQUEsVUFDZEMsRUFEYyxRQUNkQSxFQURjO0FBQUEsVUFDVkMsUUFEVSxRQUNWQSxRQURVO0FBQUEsVUFDQUMsUUFEQSxRQUNBQSxRQURBO0FBQUEsVUFDVUMsU0FEVixRQUNVQSxTQURWO0FBQUEsVUFDd0JDLElBRHhCOztBQUFBLGFBRVZBLElBRlU7QUFBQSxLQUFULENBQVA7QUFJQVgsVUFBTSxHQUFHWSxNQUFNLENBQUNDLElBQVAsQ0FBWWYsSUFBSSxDQUFDLENBQUQsQ0FBaEIsRUFBcUJRLEdBQXJCLENBQXlCLFVBQUNRLEdBQUQsRUFBTUMsR0FBTjtBQUFBLDBCQUFjO0FBQUEsa0JBQWVEO0FBQWYsU0FBU0MsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWQ7QUFBQSxLQUF6QixDQUFUO0FBQ0FaLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JKLE1BQXRCO0FBQ0FDLFFBQUksR0FBR0gsSUFBSSxDQUFDUSxHQUFMLENBQVMsVUFBQ1UsR0FBRDtBQUFBLGFBQVNKLE1BQU0sQ0FBQ0ssTUFBUCxDQUFjRCxHQUFkLEVBQW1CVixHQUFuQixDQUF1QixVQUFDWSxJQUFEO0FBQUEsNEJBQVU7QUFBQSxvQkFBa0JBO0FBQWxCLFdBQVNGLEdBQUcsQ0FBQ1QsRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFWO0FBQUEsT0FBdkIsQ0FBVDtBQUFBLEtBQVQsQ0FBUDtBQUNBTCxTQUFLLEdBQUdELElBQUksQ0FBQ0ssR0FBTCxDQUFTLFVBQUNVLEdBQUQsRUFBTUQsR0FBTjtBQUFBLDBCQUFjO0FBQUEsa0JBQW1CQztBQUFuQixTQUFTRCxHQUFHLEdBQUcsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWQ7QUFBQSxLQUFULENBQVI7QUFDRDs7QUFFRCxTQUFPZixNQUFNLGdCQUNYO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsa0JBQWQ7QUFBQSxnQkFBa0NEO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQU8sZUFBUyxFQUFDLFlBQWpCO0FBQUEsNkJBQ0U7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFR0UsS0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFcsZ0JBV1g7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVhGO0FBYUQsQ0FqQ0Q7O0dBQU1ULGE7O0tBQUFBLGE7QUFtQ04sK0RBQWVBLGFBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlcG9ydHMvVGFibGVGcm9tSlNPTi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVGFibGVGcm9tSlNPTiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbdGFibGVSZWFkeSwgc2V0VGFibGVSZWFkeV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgbGV0IHsgZGF0YSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgdGl0bGUgfSA9IHByb3BzO1xuICBsZXQgaGVhZGVyO1xuICBsZXQgcm93cztcbiAgbGV0IHRhYmxlO1xuICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpO1xuICAvLyByZW1vdmUgaWQgYW5kIGFueSBvdGhlciB1bm5lY2Vzc2FyeSBjb2x1bW5zXG4gIGlmIChkYXRhLmxlbmd0aCkge1xuICAgIGRhdGEgPSBkYXRhLm1hcCgoe1xuICAgICAgaWQsIGdyb3VwX2lkLCBsb2NhdGlvbiwgd2hhdF9ldmVyLCAuLi5yZXN0XG4gICAgfSkgPT4gcmVzdCk7XG5cbiAgICBoZWFkZXIgPSBPYmplY3Qua2V5cyhkYXRhWzBdKS5tYXAoKGNvbCwgaWR4KSA9PiA8dGgga2V5PXtpZHh9Pntjb2x9PC90aD4pO1xuICAgIGNvbnNvbGUubG9nKCdoZWFkZXInLCBoZWFkZXIpO1xuICAgIHJvd3MgPSBkYXRhLm1hcCgocm93KSA9PiBPYmplY3QudmFsdWVzKHJvdykubWFwKChjZWxsKSA9PiA8dGQga2V5PXtyb3cuaWR9PntjZWxsfTwvdGQ+KSk7XG4gICAgdGFibGUgPSByb3dzLm1hcCgocm93LCBpZHgpID0+IDx0ciBrZXk9e2lkeCArIDF9Pntyb3d9PC90cj4pO1xuICB9XG5cbiAgcmV0dXJuIGhlYWRlciA/IChcbiAgICA8ZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImRhdGEtdGFibGUtdGl0bGVcIj57dGl0bGV9PC9oMT5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJkYXRhLXRhYmxlXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+e2hlYWRlcn08L3RyPlxuICAgICAgICAgIHt0YWJsZX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICkgOiAoXG4gICAgPGRpdiAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVGcm9tSlNPTjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/reports/TableFromJSON.js\n");

/***/ })

});