System.register(["esri/layers/FeatureLayer","jimu-arcgis","jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__) {
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__, __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, __WEBPACK_EXTERNAL_MODULE_jimu_core__;
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__ = module;
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = module;
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__ = module;
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./your-extensions/widgets/add-layers/src/runtime/widget.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./your-extensions/widgets/add-layers/src/runtime/widget.tsx":
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/add-layers/src/runtime/widget.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jimu_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ \"jimu-arcgis\");\n/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri/layers/FeatureLayer */ \"esri/layers/FeatureLayer\");\n/* harmony import */ var esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_2__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n/** @jsx jsx */\r\n\r\n\r\n\r\nvar Widget = /** @class */ (function (_super) {\r\n    __extends(Widget, _super);\r\n    function Widget() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.state = {\r\n            jimuMapView: null\r\n        };\r\n        _this.activeViewChangeHandler = function (jmv) {\r\n            if (jmv) {\r\n                _this.setState({\r\n                    jimuMapView: jmv\r\n                });\r\n            }\r\n        };\r\n        _this.formSubmit = function (evt) {\r\n            evt.preventDefault();\r\n            // create a new FeatureLayer\r\n            var layer = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_2__({\r\n                url: \"https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0\"\r\n            });\r\n            // Add the layer to the map (accessed through the Experience Builder JimuMapView data source)\r\n            _this.state.jimuMapView.view.map.add(layer);\r\n        };\r\n        return _this;\r\n    }\r\n    Widget.prototype.render = function () {\r\n        var _a;\r\n        return Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", { className: \"widget-starter jimu-widget\" },\r\n            this.props.hasOwnProperty(\"useMapWidgetIds\") &&\r\n                this.props.useMapWidgetIds &&\r\n                this.props.useMapWidgetIds[0] && (Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__[\"JimuMapViewComponent\"], { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: this.activeViewChangeHandler })),\r\n            Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"form\", { onSubmit: this.formSubmit },\r\n                Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", null,\r\n                    Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"button\", null, \"Add Layer\"))));\r\n    };\r\n    return Widget;\r\n}(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"React\"].PureComponent));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Widget);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hZGQtbGF5ZXJzL3NyYy9ydW50aW1lL3dpZGdldC50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hZGQtbGF5ZXJzL3NyYy9ydW50aW1lL3dpZGdldC50c3g/ZmQwZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsgUmVhY3QsIEFsbFdpZGdldFByb3BzLCBqc3ggfSBmcm9tIFwiamltdS1jb3JlXCI7XHJcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCBKaW11TWFwVmlldyB9IGZyb20gXCJqaW11LWFyY2dpc1wiO1xyXG5pbXBvcnQgKiBhcyBGZWF0dXJlTGF5ZXIgZnJvbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRQcm9wczxhbnk+LCBhbnk+IHtcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBqaW11TWFwVmlldzogbnVsbFxyXG4gIH07XHJcblxyXG4gIGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcclxuICAgIGlmIChqbXYpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgamltdU1hcFZpZXc6IGptdlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBmb3JtU3VibWl0ID0gKGV2dCkgPT4ge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gY3JlYXRlIGEgbmV3IEZlYXR1cmVMYXllclxyXG4gICAgY29uc3QgbGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgICAgdXJsOiBcImh0dHBzOi8vc2VydmljZXMzLmFyY2dpcy5jb20vR1ZnYkpicW04aFhBU1ZZaS9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9UcmFpbGhlYWRzX1N0eWxlZC9GZWF0dXJlU2VydmVyLzBcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQWRkIHRoZSBsYXllciB0byB0aGUgbWFwIChhY2Nlc3NlZCB0aHJvdWdoIHRoZSBFeHBlcmllbmNlIEJ1aWxkZXIgSmltdU1hcFZpZXcgZGF0YSBzb3VyY2UpXHJcbiAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChsYXllcik7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXN0YXJ0ZXIgamltdS13aWRnZXRcIj5cclxuICAgICAge3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoXCJ1c2VNYXBXaWRnZXRJZHNcIikgJiZcclxuICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdICYmIChcclxuICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cclxuICAgICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXt0aGlzLmFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmZvcm1TdWJtaXR9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uPkFkZCBMYXllcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj47XHJcbiAgfVxyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFxQkE7QUFuQkE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/add-layers/src/runtime/widget.tsx\n");

/***/ }),

/***/ "esri/layers/FeatureLayer":
/*!*******************************************!*\
  !*** external "esri/layers/FeatureLayer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCI/YTI0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfRmVhdHVyZUxheWVyX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///esri/layers/FeatureLayer\n");

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1hcmNnaXMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqaW11LWFyY2dpc1wiPzlmMWMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-arcgis\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1jb3JlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiamltdS1jb3JlXCI/YzY5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-core\n");

/***/ })

/******/ })
			);
		}
	};
});