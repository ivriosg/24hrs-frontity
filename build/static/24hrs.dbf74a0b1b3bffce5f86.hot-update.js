webpackHotUpdate("24hrs",{

/***/ "./packages/24hrs-theme/src/components/Principal.js":
/*!**********************************************************!*\
  !*** ./packages/24hrs-theme/src/components/Principal.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module ''\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Link */ \"./packages/24hrs-theme/src/components/Link.js\");\n/* harmony import */ var _components_Featured__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Featured */ \"./packages/24hrs-theme/src/components/Featured.js\");\nvar Principal=(_ref)=>{var{state,actions}=_ref;// Buscamos el último post publicado en la sección Carrousel\nObject(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(()=>{actions.source.fetch(\"/category/image_gallery/\");},[]);var data=state.source.get(\"/category/image_gallery/\");if(data.isCategory){var carrousel=state.source.category[data.id];var posts=data.items.map((_ref2)=>{var{type,id}=_ref2;return state.source[type][id];});return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,posts.slice(0,1).map(post=>Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"article\",{key:post.id},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_components_Link__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{href:post.link},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"h1\",{dangerouslySetInnerHTML:{__html:post.title.rendered}})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"p\",{dangerouslySetInnerHTML:{__html:post.excerpt.rendered}}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"span\",null,\"POR: \"),\" - \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"span\",null,\"FECHA\")),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_components_Featured__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{img_id:post.featured_media}))));}return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"p\",null,\"Loading information\");};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Principal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy8yNGhycy10aGVtZS9zcmMvY29tcG9uZW50cy9QcmluY2lwYWwuanM/OGU5ZiJdLCJuYW1lcyI6WyJQcmluY2lwYWwiLCJzdGF0ZSIsImFjdGlvbnMiLCJ1c2VFZmZlY3QiLCJzb3VyY2UiLCJmZXRjaCIsImRhdGEiLCJnZXQiLCJpc0NhdGVnb3J5IiwiY2Fycm91c2VsIiwiY2F0ZWdvcnkiLCJpZCIsInBvc3RzIiwiaXRlbXMiLCJtYXAiLCJ0eXBlIiwic2xpY2UiLCJwb3N0IiwibGluayIsIl9faHRtbCIsInRpdGxlIiwicmVuZGVyZWQiLCJleGNlcnB0IiwiZmVhdHVyZWRfbWVkaWEiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BLEdBQU1BLFVBQVMsQ0FBRyxRQUF3QixJQUF2QixDQUFFQyxLQUFGLENBQVNDLE9BQVQsQ0FBdUIsTUFDeEM7QUFDQUMsdURBQVMsQ0FBQyxJQUFNLENBQ2RELE9BQU8sQ0FBQ0UsTUFBUixDQUFlQyxLQUFmLENBQXFCLDBCQUFyQixFQUNELENBRlEsQ0FFTixFQUZNLENBQVQsQ0FJQSxHQUFNQyxLQUFJLENBQUdMLEtBQUssQ0FBQ0csTUFBTixDQUFhRyxHQUFiLENBQWlCLDBCQUFqQixDQUFiLENBRUEsR0FBSUQsSUFBSSxDQUFDRSxVQUFULENBQXFCLENBQ25CLEdBQU1DLFVBQVMsQ0FBR1IsS0FBSyxDQUFDRyxNQUFOLENBQWFNLFFBQWIsQ0FBc0JKLElBQUksQ0FBQ0ssRUFBM0IsQ0FBbEIsQ0FDQSxHQUFNQyxNQUFLLENBQUdOLElBQUksQ0FBQ08sS0FBTCxDQUFXQyxHQUFYLENBQWUsYUFBQyxDQUFFQyxJQUFGLENBQVFKLEVBQVIsQ0FBRCxhQUFrQlYsTUFBSyxDQUFDRyxNQUFOLENBQWFXLElBQWIsRUFBbUJKLEVBQW5CLENBQWxCLEVBQWYsQ0FBZCxDQUVBLE1BQ0Usc0hBQ0dDLEtBQUssQ0FBQ0ksS0FBTixDQUFZLENBQVosQ0FBZSxDQUFmLEVBQWtCRixHQUFsQixDQUF1QkcsSUFBRCxFQUNyQixxRUFBUyxHQUFHLENBQUVBLElBQUksQ0FBQ04sRUFBbkIsRUFDRSwwREFBQyx3REFBRCxFQUFNLElBQUksQ0FBRU0sSUFBSSxDQUFDQyxJQUFqQixFQUNFLGdFQUNFLHVCQUF1QixDQUFFLENBQUVDLE1BQU0sQ0FBRUYsSUFBSSxDQUFDRyxLQUFMLENBQVdDLFFBQXJCLENBRDNCLEVBREYsQ0FERixDQU1FLCtEQUFHLHVCQUF1QixDQUFFLENBQUVGLE1BQU0sQ0FBRUYsSUFBSSxDQUFDSyxPQUFMLENBQWFELFFBQXZCLENBQTVCLEVBTkYsQ0FPRSxxRUFDRSw4RUFERixPQUN1Qiw4RUFEdkIsQ0FQRixDQVVFLDBEQUFDLDREQUFELEVBQVUsTUFBTSxDQUFFSixJQUFJLENBQUNNLGNBQXZCLEVBVkYsQ0FERCxDQURILENBREYsQ0FrQkQsQ0FFRCxNQUFPLDBGQUFQLENBQ0QsQ0FqQ0QsQ0FtQ2VDLHVIQUFPLENBQUN4QixTQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvMjRocnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvUHJpbmNpcGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBjc3MgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBCYXNlIGZyb20gXCJcIlxuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlua1wiO1xuaW1wb3J0IEZlYXR1cmVkIGZyb20gXCIuLi9jb21wb25lbnRzL0ZlYXR1cmVkXCI7XG5cbmNvbnN0IFByaW5jaXBhbCA9ICh7IHN0YXRlLCBhY3Rpb25zIH0pID0+IHtcbiAgLy8gQnVzY2Ftb3MgZWwgw7psdGltbyBwb3N0IHB1YmxpY2FkbyBlbiBsYSBzZWNjacOzbiBDYXJyb3VzZWxcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9jYXRlZ29yeS9pbWFnZV9nYWxsZXJ5L1wiKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KFwiL2NhdGVnb3J5L2ltYWdlX2dhbGxlcnkvXCIpO1xuXG4gIGlmIChkYXRhLmlzQ2F0ZWdvcnkpIHtcbiAgICBjb25zdCBjYXJyb3VzZWwgPSBzdGF0ZS5zb3VyY2UuY2F0ZWdvcnlbZGF0YS5pZF07XG4gICAgY29uc3QgcG9zdHMgPSBkYXRhLml0ZW1zLm1hcCgoeyB0eXBlLCBpZCB9KSA9PiBzdGF0ZS5zb3VyY2VbdHlwZV1baWRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7cG9zdHMuc2xpY2UoMCwgMSkubWFwKChwb3N0KSA9PiAoIFxuICAgICAgICAgIDxhcnRpY2xlIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICA8TGluayBocmVmPXtwb3N0Lmxpbmt9PlxuICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QudGl0bGUucmVuZGVyZWQgfX1cbiAgICAgICAgICAgICAgPjwvaDE+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8cCBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuZXhjZXJwdC5yZW5kZXJlZCB9fT48L3A+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3Bhbj5QT1I6IDwvc3Bhbj4gLSA8c3Bhbj5GRUNIQTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEZlYXR1cmVkIGltZ19pZD17cG9zdC5mZWF0dXJlZF9tZWRpYX0gLz5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICkpfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiA8cD5Mb2FkaW5nIGluZm9ybWF0aW9uPC9wPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUHJpbmNpcGFsKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/24hrs-theme/src/components/Principal.js\n");

/***/ })

})