/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Animation.ts":
/*!*****************************!*\
  !*** ./src/js/Animation.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.animation = void 0;\nexports.animation = {\n  init: function init(canvas, snowflak) {\n    this.snowflake = snowflak;\n    this.canvas = canvas;\n    this.animate();\n    return this;\n  },\n  animate: function animate() {\n    var _this = this;\n\n    this.canvas.draw();\n    this.snowflake.forEach(function (snowflak) {\n      snowflak.update();\n    });\n    requestAnimationFrame(function () {\n      _this.animate();\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvQW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFLYUEsaUJBQUFBLEdBQVk7QUFFckJDLE1BQUksZ0JBQUNDLE1BQUQsRUFBU0MsUUFBVCxFQUFpQjtBQUVqQixTQUFLQyxTQUFMLEdBQWlCRCxRQUFqQjtBQUNBLFNBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtHLE9BQUw7QUFDQSxXQUFPLElBQVA7QUFDSCxHQVJvQjtBQVNyQkEsU0FBTyxFQUFQO0FBQUE7O0FBR0ksU0FBS0gsTUFBTCxDQUFZSSxJQUFaO0FBQ0EsU0FBS0YsU0FBTCxDQUFlRyxPQUFmLENBQXVCLFVBQUNKLFFBQUQsRUFBb0I7QUFDdkNBLGNBQVEsQ0FBQ0ssTUFBVDtBQUNILEtBRkQ7QUFHQUMseUJBQXFCLENBQUM7QUFDbEJDLFdBQUksQ0FBQ0wsT0FBTDtBQUNILEtBRm9CLENBQXJCO0FBR0g7QUFuQm9CLENBQVoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXQtaXQtc25vdy8uL3NyYy9qcy9BbmltYXRpb24udHM/N2NlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Nub3dmbGFrZX0gZnJvbSBcIi4vU25vd2ZsYWtlXCI7XHJcbmltcG9ydCAge2FwcH0gZnJvbSBcIi4vTWFpblwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYW5pbWF0aW9uID0ge1xyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBpbml0KGNhbnZhcywgc25vd2ZsYWspIHtcclxuXHJcbiAgICAgICAgdGhpcy5zbm93Zmxha2UgPSBzbm93ZmxhaztcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBhbmltYXRlKCkge1xyXG4gICAgICAgIC8vZmFpcmUgLi4uXHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXcoKTtcclxuICAgICAgICB0aGlzLnNub3dmbGFrZS5mb3JFYWNoKChzbm93ZmxhazogU25vd2ZsYWtlKSA9PiB7XHJcbiAgICAgICAgICAgIHNub3dmbGFrLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG59Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJpbml0IiwiY2FudmFzIiwic25vd2ZsYWsiLCJzbm93Zmxha2UiLCJhbmltYXRlIiwiZHJhdyIsImZvckVhY2giLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfdGhpcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Animation.ts\n");

/***/ }),

/***/ "./src/js/Main.ts":
/*!************************!*\
  !*** ./src/js/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.app = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Sky_1 = __webpack_require__(/*! ./Sky */ \"./src/js/Sky.ts\");\n\nvar Animation_1 = __webpack_require__(/*! ./Animation */ \"./src/js/Animation.ts\");\n\nvar Snowflake_1 = __webpack_require__(/*! ./Snowflake */ \"./src/js/Snowflake.ts\");\n\nexports.app = {\n  init: function init() {\n    this.snowflake = [];\n    this.canvasElement = document.getElementById('my-canvas');\n    this.mouse = {\n      x: 0,\n      y: 0\n    };\n    this.ctx = this.canvasElement.getContext('2d');\n    this.canvas = Sky_1.canvas.init();\n    this.loadSnow();\n    this.animation = Animation_1.animation.init(this.canvas, this.bubbles);\n  },\n  loadSnow: function loadSnow() {\n    for (var i = 0; i < settings_1.settings.snowflake.maxCount; i++) {\n      this.snowflake.push(new Snowflake_1.Snowflake(this.ctx, this.canvasElement));\n    }\n  }\n};\nexports.app.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUdhQSxXQUFBQSxHQUFNO0FBQ2ZDLE1BQUksRUFBSjtBQUNJLFNBQUtDLFNBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBckI7QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFBQ0MsT0FBQyxFQUFDLENBQUg7QUFBS0MsT0FBQyxFQUFDO0FBQVAsS0FBYjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLTixhQUFMLENBQW1CTyxVQUFuQixDQUE4QixJQUE5QixDQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQyxhQUFPWCxJQUFQLEVBQWQ7QUFDQSxTQUFLWSxRQUFMO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkMsc0JBQVVkLElBQVYsQ0FBZSxLQUFLVSxNQUFwQixFQUE0QixLQUFLSyxPQUFqQyxDQUFqQjtBQUNILEdBVGM7QUFVZkgsVUFBUTtBQUNKLFNBQUssSUFBSUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0Msb0JBQVNoQixTQUFULENBQW1CaUIsUUFBdkMsRUFBaURGLENBQUMsRUFBbEQsRUFBc0Q7QUFDbEQsV0FBS2YsU0FBTCxDQUFla0IsSUFBZixDQUFvQixJQUFJQyxxQkFBSixDQUFjLEtBQUtaLEdBQW5CLEVBQXdCLEtBQUtOLGFBQTdCLENBQXBCO0FBQ0g7QUFFSjtBQWZjLENBQU47QUFrQmJILFlBQUlDLElBQUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXQtaXQtc25vdy8uL3NyYy9qcy9NYWluLnRzPzAxMjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyYW5kb20sIHNldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgIHtjYW52YXN9IGZyb20gXCIuL1NreVwiO1xyXG5pbXBvcnQge2FuaW1hdGlvbn0gZnJvbSBcIi4vQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7U25vd2ZsYWtlfSBmcm9tIFwiLi9Tbm93Zmxha2VcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYXBwID0ge1xyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHRoaXMuc25vd2ZsYWtlID1bXTtcclxuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5tb3VzZSA9IHt4OjAseTowfTtcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzLmluaXQoKTtcclxuICAgICAgICB0aGlzLmxvYWRTbm93KCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb24uaW5pdCh0aGlzLmNhbnZhcywgdGhpcy5idWJibGVzKTtcclxuICAgIH0sXHJcbiAgICBsb2FkU25vdygpe1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0dGluZ3Muc25vd2ZsYWtlLm1heENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zbm93Zmxha2UucHVzaChuZXcgU25vd2ZsYWtlKHRoaXMuY3R4LCB0aGlzLmNhbnZhc0VsZW1lbnQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuYXBwLmluaXQoKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJpbml0Iiwic25vd2ZsYWtlIiwiY2FudmFzRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb3VzZSIsIngiLCJ5IiwiY3R4IiwiZ2V0Q29udGV4dCIsImNhbnZhcyIsIlNreV8xIiwibG9hZFNub3ciLCJhbmltYXRpb24iLCJBbmltYXRpb25fMSIsImJ1YmJsZXMiLCJpIiwic2V0dGluZ3NfMSIsIm1heENvdW50IiwicHVzaCIsIlNub3dmbGFrZV8xIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Main.ts\n");

/***/ }),

/***/ "./src/js/Sky.ts":
/*!***********************!*\
  !*** ./src/js/Sky.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.canvas = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nexports.canvas = {\n  init: function init() {\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.snowflake = [];\n    this.resizeCanvas();\n    this.addEventListeners();\n    this.draw();\n    this.snow();\n    this.loadSnow();\n    return this;\n  },\n  resizeCanvas: function resizeCanvas() {\n    this.canvas.width = window.innerWidth;\n    this.canvas.height = window.innerHeight;\n    this.draw();\n  },\n  draw: function draw() {\n    this.ctx.fillStyle = settings_1.settings.sky.gradient;\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    this.ctx.fill;\n    return this;\n  },\n  snow: function snow() {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = 'white';\n    this.ctx.arc(50, 50, 50, 0, 2 * Math.PI);\n    this.ctx.fill();\n  },\n  addEventListeners: function addEventListeners() {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.resizeCanvas();\n    });\n  }\n};\nexports.canvas.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvU2t5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBR2FBLGNBQUFBLEdBQVM7QUFDbEJDLE1BQUksRUFBSjtBQUNJLFNBQUtDLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS0gsTUFBTCxDQUFZSSxVQUFaLENBQXVCLElBQXZCLENBQVg7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS0MsWUFBTDtBQUNBLFNBQUtDLGlCQUFMO0FBRUEsU0FBS0MsSUFBTDtBQUNBLFNBQUtDLElBQUw7QUFDQSxTQUFLQyxRQUFMO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0FaaUI7QUF5QmxCSixjQUFZO0FBQ1IsU0FBS04sTUFBTCxDQUFZVyxLQUFaLEdBQW9CQyxNQUFNLENBQUNDLFVBQTNCO0FBQ0EsU0FBS2IsTUFBTCxDQUFZYyxNQUFaLEdBQXFCRixNQUFNLENBQUNHLFdBQTVCO0FBQ0EsU0FBS1AsSUFBTDtBQUNILEdBN0JpQjtBQThCbEJBLE1BQUk7QUFDQSxTQUFLTCxHQUFMLENBQVNhLFNBQVQsR0FBcUJDLG9CQUFTQyxHQUFULENBQWFDLFFBQWxDO0FBQ0EsU0FBS2hCLEdBQUwsQ0FBU2lCLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBb0IsQ0FBcEIsRUFBc0IsS0FBS3BCLE1BQUwsQ0FBWVcsS0FBbEMsRUFBeUMsS0FBS1gsTUFBTCxDQUFZYyxNQUFyRDtBQUNBLFNBQUtYLEdBQUwsQ0FBU2tCLElBQVQ7QUFDQSxXQUFPLElBQVA7QUFDSCxHQW5DaUI7QUFvQ2xCWixNQUFJO0FBQ0EsU0FBS04sR0FBTCxDQUFTbUIsU0FBVDtBQUNBLFNBQUtuQixHQUFMLENBQVNhLFNBQVQsR0FBcUIsT0FBckI7QUFDQSxTQUFLYixHQUFMLENBQVNvQixHQUFULENBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QixDQUF6QixFQUE0QixJQUFJQyxJQUFJLENBQUNDLEVBQXJDO0FBQ0EsU0FBS3RCLEdBQUwsQ0FBU2tCLElBQVQ7QUFDSCxHQXpDaUI7QUEwQ2xCZCxtQkFBaUI7QUFBakI7O0FBQ0lLLFVBQU0sQ0FBQ2MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBaUM7QUFDN0JDLFdBQUksQ0FBQ3JCLFlBQUw7QUFDSCxLQUZEO0FBR0g7QUE5Q2lCLENBQVQ7QUFtRGJSLGVBQU9DLElBQVAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXQtaXQtc25vdy8uL3NyYy9qcy9Ta3kudHM/ZGUyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5pbXBvcnQge1Nub3dmbGFrZX0gZnJvbSBcIi4vU25vd2ZsYWtlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY2FudmFzID0ge1xyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLnNub3dmbGFrZSA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVzaXplQ2FudmFzKClcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAvLyB0aGlzLmdlbmVyYXRlR3JhZGllbnQoKTtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICB0aGlzLnNub3coKTtcclxuICAgICAgICB0aGlzLmxvYWRTbm93KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgLypcclxuXHJcbiAgIGxvYWRTbm93KCkge1xyXG4gICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXR0aW5ncy5zbm93Zmxha2UubWF4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgIHRoaXMuc25vd2ZsYWtlLnB1c2gobmV3IFNub3dmbGFrZSh0aGlzLmN0eCwgdGhpcy5jYW52YXMpKTtcclxuICAgICAgIH1cclxuICAgfSxcclxuICAgZ2VuZXJhdGVHcmFkaWVudCgpe1xyXG4gICAgICAgdGhpcy5ncmFkaWVudCA9IHRoaXMuY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICB0aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBzZXR0aW5ncy5za3kuZ3JhZGllbnRbMF0pO1xyXG4gICAgICAgdGhpcy5ncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgc2V0dGluZ3Muc2t5LmdyYWRpZW50WzFdKTtcclxuICAgfSwqL1xyXG4gICAgcmVzaXplQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfSxcclxuICAgIGRyYXcoKXtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBzZXR0aW5ncy5za3kuZ3JhZGllbnQ7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwwLHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgc25vdygpe1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKDUwLCA1MCwgNTAsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9LFxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKXtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKT0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG59O1xyXG5cclxuXHJcbmNhbnZhcy5pbml0KCk7Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJpbml0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJzbm93Zmxha2UiLCJyZXNpemVDYW52YXMiLCJhZGRFdmVudExpc3RlbmVycyIsImRyYXciLCJzbm93IiwibG9hZFNub3ciLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImZpbGxTdHlsZSIsInNldHRpbmdzXzEiLCJza3kiLCJncmFkaWVudCIsImZpbGxSZWN0IiwiZmlsbCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdGhpcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Sky.ts\n");

/***/ }),

/***/ "./src/js/Snowflake.ts":
/*!*****************************!*\
  !*** ./src/js/Snowflake.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Snowflake = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar settings_2 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Snowflake = function () {\n  function Snowflake(ctx, canvas) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.generate();\n  }\n\n  Snowflake.prototype.generate = function () {\n    this.opacity = Math.random();\n    this.speed = {\n      x: (0, settings_2.random)(settings_1.settings.snowflake.speed.x.min, settings_1.settings.snowflake.speed.x.max),\n      y: (0, settings_2.random)(settings_1.settings.snowflake.speed.y.min, settings_1.settings.snowflake.speed.y.max)\n    };\n    this.radius = (0, settings_2.random)(settings_1.settings.snowflake.radius.min, settings_1.settings.snowflake.radius.max);\n    this.position = {\n      x: (0, settings_2.random)(this.radius, window.innerWidth - this.radius),\n      y: (0, settings_2.random)(window.innerHeight * 1.5, window.innerHeight + this.radius * 2)\n    };\n    this.color = settings_1.settings.snowflake.colors;\n  };\n\n  Snowflake.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.globalAlpha = this.opacity;\n    this.ctx.fillStyle = this.color;\n    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);\n    this.ctx.fill();\n    this.ctx.globalAlpha = 1;\n  };\n\n  Snowflake.prototype.update = function () {\n    if (this.position.y <= -this.radius) {\n      this.generate();\n    }\n\n    this.position.y -= this.speed.y;\n    this.position.x += this.speed.x;\n    this.draw();\n  };\n\n  return Snowflake;\n}();\n\nexports.Snowflake = Snowflake;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvU25vd2ZsYWtlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBR0E7QUFVSSxxQkFBWUEsR0FBWixFQUEyQ0MsTUFBM0MsRUFBb0U7QUFDaEUsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0QsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0UsUUFBTDtBQUNIOztBQUVEQztBQUNJLFNBQUtDLE9BQUwsR0FBZUMsSUFBSSxDQUFDQyxNQUFMLEVBQWY7QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFBQ0MsT0FBQyxFQUFDLHVCQUFPQyxvQkFBU0MsU0FBVCxDQUFtQkgsS0FBbkIsQ0FBeUJDLENBQXpCLENBQTJCRyxHQUFsQyxFQUFzQ0Ysb0JBQVNDLFNBQVQsQ0FBbUJILEtBQW5CLENBQXlCQyxDQUF6QixDQUEyQkksR0FBakUsQ0FBSDtBQUF5RUMsT0FBQyxFQUFDLHVCQUFPSixvQkFBU0MsU0FBVCxDQUFtQkgsS0FBbkIsQ0FBeUJNLENBQXpCLENBQTJCRixHQUFsQyxFQUFzQ0Ysb0JBQVNDLFNBQVQsQ0FBbUJILEtBQW5CLENBQXlCTSxDQUF6QixDQUEyQkQsR0FBakU7QUFBM0UsS0FBYjtBQUNBLFNBQUtFLE1BQUwsR0FBYyx1QkFBT0wsb0JBQVNDLFNBQVQsQ0FBbUJJLE1BQW5CLENBQTBCSCxHQUFqQyxFQUFzQ0Ysb0JBQVNDLFNBQVQsQ0FBbUJJLE1BQW5CLENBQTBCRixHQUFoRSxDQUFkO0FBQ0EsU0FBS0csUUFBTCxHQUFnQjtBQUNaUCxPQUFDLEVBQUUsdUJBQU8sS0FBS00sTUFBWixFQUFvQkUsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLEtBQUtILE1BQTdDLENBRFM7QUFFWkQsT0FBQyxFQUFFLHVCQUFPRyxNQUFNLENBQUNFLFdBQVAsR0FBcUIsR0FBNUIsRUFBaUNGLE1BQU0sQ0FBQ0UsV0FBUCxHQUFxQixLQUFLSixNQUFMLEdBQWMsQ0FBcEU7QUFGUyxLQUFoQjtBQUlBLFNBQUtLLEtBQUwsR0FBYVYsb0JBQVNDLFNBQVQsQ0FBbUJVLE1BQWhDO0FBQ0gsR0FURDs7QUFXQWpCO0FBQ0ksU0FBS0gsR0FBTCxDQUFTcUIsU0FBVDtBQUNBLFNBQUtyQixHQUFMLENBQVNzQixXQUFULEdBQXVCLEtBQUtsQixPQUE1QjtBQUNBLFNBQUtKLEdBQUwsQ0FBU3VCLFNBQVQsR0FBcUIsS0FBS0osS0FBMUI7QUFDQSxTQUFLbkIsR0FBTCxDQUFTd0IsR0FBVCxDQUFhLEtBQUtULFFBQUwsQ0FBY1AsQ0FBM0IsRUFBOEIsS0FBS08sUUFBTCxDQUFjRixDQUE1QyxFQUErQyxLQUFLQyxNQUFwRCxFQUE0RCxDQUE1RCxFQUErRCxJQUFJVCxJQUFJLENBQUNvQixFQUF4RTtBQUNBLFNBQUt6QixHQUFMLENBQVMwQixJQUFUO0FBQ0EsU0FBSzFCLEdBQUwsQ0FBU3NCLFdBQVQsR0FBdUIsQ0FBdkI7QUFDSCxHQVBEOztBQVFBbkI7QUFDSSxRQUFJLEtBQUtZLFFBQUwsQ0FBY0YsQ0FBZCxJQUFtQixDQUFDLEtBQUtDLE1BQTdCLEVBQXFDO0FBQ2pDLFdBQUtaLFFBQUw7QUFDSDs7QUFDRCxTQUFLYSxRQUFMLENBQWNGLENBQWQsSUFBbUIsS0FBS04sS0FBTCxDQUFXTSxDQUE5QjtBQUNBLFNBQUtFLFFBQUwsQ0FBY1AsQ0FBZCxJQUFtQixLQUFLRCxLQUFMLENBQVdDLENBQTlCO0FBQ0EsU0FBS21CLElBQUw7QUFDSCxHQVBEOztBQVFKO0FBQUMsQ0EzQ0Q7O0FBQWFDLGlCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xldC1pdC1zbm93Ly4vc3JjL2pzL1Nub3dmbGFrZS50cz9mNTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7cmFuZG9tfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5pbXBvcnQge2FwcH0gZnJvbSBcIi4vTWFpblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNub3dmbGFrZSB7XHJcbiAgICBwcml2YXRlIHJhZGl1czogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBjb2xvcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwb3NpdGlvbjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xyXG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHByaXZhdGUgb3BhY2l0eTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzcGVlZDoge3g6bnVtYmVyLCB5Om51bWJlcn07XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlKCkge1xyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHt4OnJhbmRvbShzZXR0aW5ncy5zbm93Zmxha2Uuc3BlZWQueC5taW4sc2V0dGluZ3Muc25vd2ZsYWtlLnNwZWVkLngubWF4KSx5OnJhbmRvbShzZXR0aW5ncy5zbm93Zmxha2Uuc3BlZWQueS5taW4sc2V0dGluZ3Muc25vd2ZsYWtlLnNwZWVkLnkubWF4KX07XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYW5kb20oc2V0dGluZ3Muc25vd2ZsYWtlLnJhZGl1cy5taW4sIHNldHRpbmdzLnNub3dmbGFrZS5yYWRpdXMubWF4KTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICB4OiByYW5kb20odGhpcy5yYWRpdXMsIHdpbmRvdy5pbm5lcldpZHRoIC0gdGhpcy5yYWRpdXMpLFxyXG4gICAgICAgICAgICB5OiByYW5kb20od2luZG93LmlubmVySGVpZ2h0ICogMS41LCB3aW5kb3cuaW5uZXJIZWlnaHQgKyB0aGlzLnJhZGl1cyAqIDIpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gc2V0dGluZ3Muc25vd2ZsYWtlLmNvbG9ycztcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gdGhpcy5vcGFjaXR5O1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDE7Ly9vcGFjaXTDqVxyXG4gICAgfVxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPD0gLXRoaXMucmFkaXVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMuc3BlZWQueTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZC54O1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjdHgiLCJjYW52YXMiLCJnZW5lcmF0ZSIsIlNub3dmbGFrZSIsIm9wYWNpdHkiLCJNYXRoIiwicmFuZG9tIiwic3BlZWQiLCJ4Iiwic2V0dGluZ3NfMSIsInNub3dmbGFrZSIsIm1pbiIsIm1heCIsInkiLCJyYWRpdXMiLCJwb3NpdGlvbiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImNvbG9yIiwiY29sb3JzIiwiYmVnaW5QYXRoIiwiZ2xvYmFsQWxwaGEiLCJmaWxsU3R5bGUiLCJhcmMiLCJQSSIsImZpbGwiLCJkcmF3IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Snowflake.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.random = exports.settings = void 0;\nexports.settings = {\n  sky: {\n    gradient: [\"hsl(219,93%,11%)\", \"hsl(219,100%,19%)\"]\n  },\n  snowflake: {\n    radius: {\n      min: 2,\n      max: 12\n    },\n    opacity: {\n      min: 0.5,\n      max: 0.9\n    },\n    speed: {\n      x: {\n        min: 1,\n        max: 4\n      },\n      y: {\n        min: 1,\n        max: 6\n      }\n    },\n    colors: 'white',\n    maxCount: 1\n  }\n};\n\nfunction random(min, max, ceil) {\n  if (ceil === void 0) {\n    ceil = true;\n  }\n\n  if (ceil) {\n    return Math.ceil(min + Math.random() * (max - min));\n  }\n\n  return Math.floor(min + Math.random() * (max - min));\n}\n\nexports.random = random;\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNhQSxnQkFBQUEsR0FBVztBQUNwQkMsS0FBRyxFQUFFO0FBQ0RDLFlBQVEsRUFBRSxDQUFDLGtCQUFELEVBQXFCLG1CQUFyQjtBQURULEdBRGU7QUFJcEJDLFdBQVMsRUFBRTtBQUNQQyxVQUFNLEVBQUU7QUFBQ0MsU0FBRyxFQUFFLENBQU47QUFBU0MsU0FBRyxFQUFFO0FBQWQsS0FERDtBQUVQQyxXQUFPLEVBQUU7QUFBQ0YsU0FBRyxFQUFFLEdBQU47QUFBV0MsU0FBRyxFQUFFO0FBQWhCLEtBRkY7QUFHUEUsU0FBSyxFQUFFO0FBQUNDLE9BQUMsRUFBQztBQUFDSixXQUFHLEVBQUUsQ0FBTjtBQUFTQyxXQUFHLEVBQUU7QUFBZCxPQUFIO0FBQXFCSSxPQUFDLEVBQUM7QUFBQ0wsV0FBRyxFQUFFLENBQU47QUFBU0MsV0FBRyxFQUFFO0FBQWQ7QUFBdkIsS0FIQTtBQUlQSyxVQUFNLEVBQUUsT0FKRDtBQUtQQyxZQUFRLEVBQUU7QUFMSDtBQUpTLENBQVg7O0FBYWIsU0FBZ0JDLE1BQWhCLENBQXVCUixHQUF2QixFQUFtQ0MsR0FBbkMsRUFBK0NRLElBQS9DLEVBQWtFO0FBQW5CO0FBQUFBO0FBQW1COztBQUM5RCxNQUFHQSxJQUFILEVBQVE7QUFDSixXQUFPQyxJQUFJLENBQUNELElBQUwsQ0FBVVQsR0FBRyxHQUFHVSxJQUFJLENBQUNGLE1BQUwsTUFBaUJQLEdBQUcsR0FBQ0QsR0FBckIsQ0FBaEIsQ0FBUDtBQUNIOztBQUNELFNBQU9VLElBQUksQ0FBQ0MsS0FBTCxDQUFXWCxHQUFHLEdBQUdVLElBQUksQ0FBQ0YsTUFBTCxNQUFpQlAsR0FBRyxHQUFDRCxHQUFyQixDQUFqQixDQUFQO0FBQ0g7O0FBTERMLGNBQUFBO0FBS0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXQtaXQtc25vdy8uL3NyYy9qcy9zZXR0aW5ncy50cz9jNDIxIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBza3k6IHtcclxuICAgICAgICBncmFkaWVudDogW1wiaHNsKDIxOSw5MyUsMTElKVwiLCBcImhzbCgyMTksMTAwJSwxOSUpXCJdXHJcbiAgICB9LFxyXG4gICAgc25vd2ZsYWtlOiB7XHJcbiAgICAgICAgcmFkaXVzOiB7bWluOiAyLCBtYXg6IDEyfSxcclxuICAgICAgICBvcGFjaXR5OiB7bWluOiAwLjUsIG1heDogMC45fSxcclxuICAgICAgICBzcGVlZDoge3g6e21pbjogMSwgbWF4OiA0fSwgeTp7bWluOiAxLCBtYXg6IDZ9IH0sXHJcbiAgICAgICAgY29sb3JzOiAnd2hpdGUnLFxyXG4gICAgICAgIG1heENvdW50OiAxLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbjpudW1iZXIsIG1heDpudW1iZXIsIGNlaWw6Ym9vbGVhbiA9IHRydWUpe1xyXG4gICAgaWYoY2VpbCl7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heC1taW4pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4LW1pbikpO1xyXG59OyJdLCJuYW1lcyI6WyJleHBvcnRzIiwic2t5IiwiZ3JhZGllbnQiLCJzbm93Zmxha2UiLCJyYWRpdXMiLCJtaW4iLCJtYXgiLCJvcGFjaXR5Iiwic3BlZWQiLCJ4IiwieSIsImNvbG9ycyIsIm1heENvdW50IiwicmFuZG9tIiwiY2VpbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0LWl0LXNub3cvLi9zcmMvc2Nzcy9tYWluLnNjc3M/ZjdlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/Main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklet_it_snow"] = self["webpackChunklet_it_snow"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/Main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;