webpackHotUpdate("24hrs",{

/***/ "./packages/24hrs-theme/src/components/Principal.js":
/*!**********************************************************!*\
  !*** ./packages/24hrs-theme/src/components/Principal.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Link */ \"./packages/24hrs-theme/src/components/Link.js\");\n/* harmony import */ var _components_Featured__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Featured */ \"./packages/24hrs-theme/src/components/Featured.js\");\nvar Principal=(_ref)=>{var{state,actions}=_ref;// Buscamos el último post publicado en la sección Carrousel\nObject(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(()=>{actions.source.fetch(\"/category/image_gallery/\");},[]);var data=state.source.get(\"/category/image_gallery/\");if(data.isCategory){var carrousel=state.source.category[data.id];var posts=data.items.map((_ref2)=>{var{type,id}=_ref2;return state.source[type][id];});return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,posts.slice(0,1).map(post=>Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"article\",{key:post.id},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_components_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{href:post.link},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"h1\",{dangerouslySetInnerHTML:{__html:post.title.rendered}})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"p\",{dangerouslySetInnerHTML:{__html:post.excerpt.rendered}}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"span\",null,\"POR: \"),\" - \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"span\",null,\"FECHA\")),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_components_Featured__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{imgID:video.featured_media,element:\"video\"}))));}return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"p\",null,\"Loading information\");};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Principal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy8yNGhycy10aGVtZS9zcmMvY29tcG9uZW50cy9QcmluY2lwYWwuanM/OGU5ZiJdLCJuYW1lcyI6WyJQcmluY2lwYWwiLCJzdGF0ZSIsImFjdGlvbnMiLCJ1c2VFZmZlY3QiLCJzb3VyY2UiLCJmZXRjaCIsImRhdGEiLCJnZXQiLCJpc0NhdGVnb3J5IiwiY2Fycm91c2VsIiwiY2F0ZWdvcnkiLCJpZCIsInBvc3RzIiwiaXRlbXMiLCJtYXAiLCJ0eXBlIiwic2xpY2UiLCJwb3N0IiwibGluayIsIl9faHRtbCIsInRpdGxlIiwicmVuZGVyZWQiLCJleGNlcnB0IiwidmlkZW8iLCJmZWF0dXJlZF9tZWRpYSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBLEdBQU1BLFVBQVMsQ0FBRyxRQUF3QixJQUF2QixDQUFFQyxLQUFGLENBQVNDLE9BQVQsQ0FBdUIsTUFDeEM7QUFDQUMsdURBQVMsQ0FBQyxJQUFNLENBQ2RELE9BQU8sQ0FBQ0UsTUFBUixDQUFlQyxLQUFmLENBQXFCLDBCQUFyQixFQUNELENBRlEsQ0FFTixFQUZNLENBQVQsQ0FJQSxHQUFNQyxLQUFJLENBQUdMLEtBQUssQ0FBQ0csTUFBTixDQUFhRyxHQUFiLENBQWlCLDBCQUFqQixDQUFiLENBRUEsR0FBSUQsSUFBSSxDQUFDRSxVQUFULENBQXFCLENBQ25CLEdBQU1DLFVBQVMsQ0FBR1IsS0FBSyxDQUFDRyxNQUFOLENBQWFNLFFBQWIsQ0FBc0JKLElBQUksQ0FBQ0ssRUFBM0IsQ0FBbEIsQ0FDQSxHQUFNQyxNQUFLLENBQUdOLElBQUksQ0FBQ08sS0FBTCxDQUFXQyxHQUFYLENBQWUsYUFBQyxDQUFFQyxJQUFGLENBQVFKLEVBQVIsQ0FBRCxhQUFrQlYsTUFBSyxDQUFDRyxNQUFOLENBQWFXLElBQWIsRUFBbUJKLEVBQW5CLENBQWxCLEVBQWYsQ0FBZCxDQUVBLE1BQ0Usc0hBQ0dDLEtBQUssQ0FBQ0ksS0FBTixDQUFZLENBQVosQ0FBZSxDQUFmLEVBQWtCRixHQUFsQixDQUF1QkcsSUFBRCxFQUNyQixxRUFBUyxHQUFHLENBQUVBLElBQUksQ0FBQ04sRUFBbkIsRUFDRSwwREFBQyx3REFBRCxFQUFNLElBQUksQ0FBRU0sSUFBSSxDQUFDQyxJQUFqQixFQUNFLGdFQUNFLHVCQUF1QixDQUFFLENBQUVDLE1BQU0sQ0FBRUYsSUFBSSxDQUFDRyxLQUFMLENBQVdDLFFBQXJCLENBRDNCLEVBREYsQ0FERixDQU1FLCtEQUFHLHVCQUF1QixDQUFFLENBQUVGLE1BQU0sQ0FBRUYsSUFBSSxDQUFDSyxPQUFMLENBQWFELFFBQXZCLENBQTVCLEVBTkYsQ0FPRSxxRUFDRSw4RUFERixPQUN1Qiw4RUFEdkIsQ0FQRixDQVVFLDBEQUFDLDREQUFELEVBQVUsS0FBSyxDQUFFRSxLQUFLLENBQUNDLGNBQXZCLENBQXVDLE9BQU8sQ0FBQyxPQUEvQyxFQVZGLENBREQsQ0FESCxDQURGLENBa0JELENBRUQsTUFBTywwRkFBUCxDQUNELENBakNELENBbUNlQyx1SEFBTyxDQUFDekIsU0FBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzLzI0aHJzLXRoZW1lL3NyYy9jb21wb25lbnRzL1ByaW5jaXBhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgY3NzIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vY29tcG9uZW50cy9MaW5rXCI7XG5pbXBvcnQgRmVhdHVyZWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmVhdHVyZWRcIjtcblxuY29uc3QgUHJpbmNpcGFsID0gKHsgc3RhdGUsIGFjdGlvbnMgfSkgPT4ge1xuICAvLyBCdXNjYW1vcyBlbCDDumx0aW1vIHBvc3QgcHVibGljYWRvIGVuIGxhIHNlY2Npw7NuIENhcnJvdXNlbFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFjdGlvbnMuc291cmNlLmZldGNoKFwiL2NhdGVnb3J5L2ltYWdlX2dhbGxlcnkvXCIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoXCIvY2F0ZWdvcnkvaW1hZ2VfZ2FsbGVyeS9cIik7XG5cbiAgaWYgKGRhdGEuaXNDYXRlZ29yeSkge1xuICAgIGNvbnN0IGNhcnJvdXNlbCA9IHN0YXRlLnNvdXJjZS5jYXRlZ29yeVtkYXRhLmlkXTtcbiAgICBjb25zdCBwb3N0cyA9IGRhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtwb3N0cy5zbGljZSgwLCAxKS5tYXAoKHBvc3QpID0+ICggXG4gICAgICAgICAgPGFydGljbGUga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Bvc3QubGlua30+XG4gICAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC50aXRsZS5yZW5kZXJlZCB9fVxuICAgICAgICAgICAgICA+PC9oMT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5leGNlcnB0LnJlbmRlcmVkIH19PjwvcD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuPlBPUjogPC9zcGFuPiAtIDxzcGFuPkZFQ0hBPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RmVhdHVyZWQgaW1nSUQ9e3ZpZGVvLmZlYXR1cmVkX21lZGlhfSBlbGVtZW50PVwidmlkZW9cIiAvPlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgKSl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIDxwPkxvYWRpbmcgaW5mb3JtYXRpb248L3A+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQcmluY2lwYWwpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/24hrs-theme/src/components/Principal.js\n");

/***/ })

})