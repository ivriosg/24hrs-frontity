webpackHotUpdate("24hrs",{

/***/ "./packages/24hrs-theme/src/components/Principales.js":
/*!************************************************************!*\
  !*** ./packages/24hrs-theme/src/components/Principales.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Link */ \"./packages/24hrs-theme/src/components/Link.js\");\n/* harmony import */ var _components_Featured__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Featured */ \"./packages/24hrs-theme/src/components/Featured.js\");\nvar Principales=(_ref)=>{var{state,actions}=_ref;// Buscamos el último post publicado en la sección Carrousel\nObject(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(()=>{actions.source.fetch(\"/category/image_gallery/\");},[]);var data=state.source.get(\"/category/image_gallery/\");if(data.isCategory){var carrousel=state.source.category[data.id];var posts=data.items.map((_ref2)=>{var{type,id}=_ref2;return state.source[type][id];});return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,posts.slice(0,1).map(post=>Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"article\",{key:post.id},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_components_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{href:post.link},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"h1\",{dangerouslySetInnerHTML:{__html:post.title.rendered}})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"p\",{dangerouslySetInnerHTML:{__html:post.excerpt.rendered}}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"span\",null,\"POR: \"),\" - \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"span\",null,\"FECHA\"))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_components_Featured__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{img_id:post.featured_media})))));}return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"p\",null,\"Loading information\");};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Principales));var FiveBlock=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"eptwx3d0\",label:\"FiveBlock\"})( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9EZXNhcnJvbGxvLzI0aHJzL3BhY2thZ2VzLzI0aHJzLXRoZW1lL3NyYy9jb21wb25lbnRzL1ByaW5jaXBhbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdENEIiLCJmaWxlIjoiL0Rlc2Fycm9sbG8vMjRocnMvcGFja2FnZXMvMjRocnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvUHJpbmNpcGFsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGNzcyB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlua1wiO1xuaW1wb3J0IEZlYXR1cmVkIGZyb20gXCIuLi9jb21wb25lbnRzL0ZlYXR1cmVkXCI7XG5cbmNvbnN0IFByaW5jaXBhbGVzID0gKHsgc3RhdGUsIGFjdGlvbnMgfSkgPT4ge1xuICAvLyBCdXNjYW1vcyBlbCDDumx0aW1vIHBvc3QgcHVibGljYWRvIGVuIGxhIHNlY2Npw7NuIENhcnJvdXNlbFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFjdGlvbnMuc291cmNlLmZldGNoKFwiL2NhdGVnb3J5L2ltYWdlX2dhbGxlcnkvXCIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoXCIvY2F0ZWdvcnkvaW1hZ2VfZ2FsbGVyeS9cIik7XG5cbiAgaWYgKGRhdGEuaXNDYXRlZ29yeSkge1xuICAgIGNvbnN0IGNhcnJvdXNlbCA9IHN0YXRlLnNvdXJjZS5jYXRlZ29yeVtkYXRhLmlkXTtcbiAgICBjb25zdCBwb3N0cyA9IGRhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtwb3N0cy5zbGljZSgwLCAxKS5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICA8YXJ0aWNsZSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cG9zdC5saW5rfT5cbiAgICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC50aXRsZS5yZW5kZXJlZCB9fVxuICAgICAgICAgICAgICAgID48L2gxPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmV4Y2VycHQucmVuZGVyZWQgfX1cbiAgICAgICAgICAgICAgPjwvcD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5QT1I6IDwvc3Bhbj4gLSA8c3Bhbj5GRUNIQTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGZWF0dXJlZCBpbWdfaWQ9e3Bvc3QuZmVhdHVyZWRfbWVkaWF9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICkpfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiA8cD5Mb2FkaW5nIGluZm9ybWF0aW9uPC9wPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUHJpbmNpcGFsZXMpO1xuXG5jb25zdCBGaXZlQmxvY2sgPSBzdHlsZWQuZGl2YFxuICBcbmA7Il19 */\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy8yNGhycy10aGVtZS9zcmMvY29tcG9uZW50cy9QcmluY2lwYWxlcy5qcz9iMGI3Il0sIm5hbWVzIjpbIlByaW5jaXBhbGVzIiwic3RhdGUiLCJhY3Rpb25zIiwidXNlRWZmZWN0Iiwic291cmNlIiwiZmV0Y2giLCJkYXRhIiwiZ2V0IiwiaXNDYXRlZ29yeSIsImNhcnJvdXNlbCIsImNhdGVnb3J5IiwiaWQiLCJwb3N0cyIsIml0ZW1zIiwibWFwIiwidHlwZSIsInNsaWNlIiwicG9zdCIsImxpbmsiLCJfX2h0bWwiLCJ0aXRsZSIsInJlbmRlcmVkIiwiZXhjZXJwdCIsImZlYXR1cmVkX21lZGlhIiwiY29ubmVjdCIsIkZpdmVCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsR0FBTUEsWUFBVyxDQUFHLFFBQXdCLElBQXZCLENBQUVDLEtBQUYsQ0FBU0MsT0FBVCxDQUF1QixNQUMxQztBQUNBQyx1REFBUyxDQUFDLElBQU0sQ0FDZEQsT0FBTyxDQUFDRSxNQUFSLENBQWVDLEtBQWYsQ0FBcUIsMEJBQXJCLEVBQ0QsQ0FGUSxDQUVOLEVBRk0sQ0FBVCxDQUlBLEdBQU1DLEtBQUksQ0FBR0wsS0FBSyxDQUFDRyxNQUFOLENBQWFHLEdBQWIsQ0FBaUIsMEJBQWpCLENBQWIsQ0FFQSxHQUFJRCxJQUFJLENBQUNFLFVBQVQsQ0FBcUIsQ0FDbkIsR0FBTUMsVUFBUyxDQUFHUixLQUFLLENBQUNHLE1BQU4sQ0FBYU0sUUFBYixDQUFzQkosSUFBSSxDQUFDSyxFQUEzQixDQUFsQixDQUNBLEdBQU1DLE1BQUssQ0FBR04sSUFBSSxDQUFDTyxLQUFMLENBQVdDLEdBQVgsQ0FBZSxhQUFDLENBQUVDLElBQUYsQ0FBUUosRUFBUixDQUFELGFBQWtCVixNQUFLLENBQUNHLE1BQU4sQ0FBYVcsSUFBYixFQUFtQkosRUFBbkIsQ0FBbEIsRUFBZixDQUFkLENBRUEsTUFDRSxzSEFDR0MsS0FBSyxDQUFDSSxLQUFOLENBQVksQ0FBWixDQUFlLENBQWYsRUFBa0JGLEdBQWxCLENBQXVCRyxJQUFELEVBQ3JCLHFFQUFTLEdBQUcsQ0FBRUEsSUFBSSxDQUFDTixFQUFuQixFQUNFLHFFQUNFLDBEQUFDLHdEQUFELEVBQU0sSUFBSSxDQUFFTSxJQUFJLENBQUNDLElBQWpCLEVBQ0UsZ0VBQ0UsdUJBQXVCLENBQUUsQ0FBRUMsTUFBTSxDQUFFRixJQUFJLENBQUNHLEtBQUwsQ0FBV0MsUUFBckIsQ0FEM0IsRUFERixDQURGLENBTUUsK0RBQ0UsdUJBQXVCLENBQUUsQ0FBRUYsTUFBTSxDQUFFRixJQUFJLENBQUNLLE9BQUwsQ0FBYUQsUUFBdkIsQ0FEM0IsRUFORixDQVNFLHFFQUNFLDhFQURGLE9BQ3VCLDhFQUR2QixDQVRGLENBREYsQ0FjRSxxRUFDRSwwREFBQyw0REFBRCxFQUFVLE1BQU0sQ0FBRUosSUFBSSxDQUFDTSxjQUF2QixFQURGLENBZEYsQ0FERCxDQURILENBREYsQ0F3QkQsQ0FFRCxNQUFPLDBGQUFQLENBQ0QsQ0F2Q0QsQ0F5Q2VDLHVIQUFPLENBQUN4QixXQUFELENBQXRCLEVBRUEsR0FBTXlCLFVBQVMsMDNFQUFmIiwiZmlsZSI6Ii4vcGFja2FnZXMvMjRocnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvUHJpbmNpcGFsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGNzcyB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlua1wiO1xuaW1wb3J0IEZlYXR1cmVkIGZyb20gXCIuLi9jb21wb25lbnRzL0ZlYXR1cmVkXCI7XG5cbmNvbnN0IFByaW5jaXBhbGVzID0gKHsgc3RhdGUsIGFjdGlvbnMgfSkgPT4ge1xuICAvLyBCdXNjYW1vcyBlbCDDumx0aW1vIHBvc3QgcHVibGljYWRvIGVuIGxhIHNlY2Npw7NuIENhcnJvdXNlbFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFjdGlvbnMuc291cmNlLmZldGNoKFwiL2NhdGVnb3J5L2ltYWdlX2dhbGxlcnkvXCIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoXCIvY2F0ZWdvcnkvaW1hZ2VfZ2FsbGVyeS9cIik7XG5cbiAgaWYgKGRhdGEuaXNDYXRlZ29yeSkge1xuICAgIGNvbnN0IGNhcnJvdXNlbCA9IHN0YXRlLnNvdXJjZS5jYXRlZ29yeVtkYXRhLmlkXTtcbiAgICBjb25zdCBwb3N0cyA9IGRhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtwb3N0cy5zbGljZSgwLCAxKS5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICA8YXJ0aWNsZSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cG9zdC5saW5rfT5cbiAgICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC50aXRsZS5yZW5kZXJlZCB9fVxuICAgICAgICAgICAgICAgID48L2gxPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmV4Y2VycHQucmVuZGVyZWQgfX1cbiAgICAgICAgICAgICAgPjwvcD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5QT1I6IDwvc3Bhbj4gLSA8c3Bhbj5GRUNIQTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGZWF0dXJlZCBpbWdfaWQ9e3Bvc3QuZmVhdHVyZWRfbWVkaWF9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICkpfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiA8cD5Mb2FkaW5nIGluZm9ybWF0aW9uPC9wPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUHJpbmNpcGFsZXMpO1xuXG5jb25zdCBGaXZlQmxvY2sgPSBzdHlsZWQuZGl2YFxuICBcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/24hrs-theme/src/components/Principales.js\n");

/***/ })

})