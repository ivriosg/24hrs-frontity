webpackHotUpdate("24hrs",{

/***/ "./packages/24hrs-theme/src/components/Principales.js":
/*!************************************************************!*\
  !*** ./packages/24hrs-theme/src/components/Principales.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Link */ \"./packages/24hrs-theme/src/components/Link.js\");\n/* harmony import */ var _components_Featured__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Featured */ \"./packages/24hrs-theme/src/components/Featured.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var Principales=(_ref)=>{var{state,actions}=_ref;// Buscamos el último post publicado en la sección Carrousel\nObject(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(()=>{actions.source.fetch(\"/category/image_gallery/\");},[]);var data=state.source.get(\"/category/image_gallery/\");if(data.isCategory){var carrousel=state.source.category[data.id];var posts=data.items.map((_ref2)=>{var{type,id}=_ref2;return state.source[type][id];});return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,posts.slice(0,1).map(post=>Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"article\",{key:post.id},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(FiveBlock,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_components_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{href:post.link},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"h1\",{dangerouslySetInnerHTML:{__html:post.title.rendered}})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"p\",{dangerouslySetInnerHTML:{__html:post.excerpt.rendered}}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"span\",null,\"POR: \"),\" - \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"span\",null,\"FECHA\"))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(FiveBlock,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_components_Featured__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{img_id:post.featured_media})))));}return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"p\",null,\"Loading information\");};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Principales));var FiveBlock=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"eptwx3d0\",label:\"FiveBlock\"})( false?undefined:{name:\"1c9g3xr\",styles:\"width:50%;display:flex;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9EZXNhcnJvbGxvLzI0aHJzL3BhY2thZ2VzLzI0aHJzLXRoZW1lL3NyYy9jb21wb25lbnRzL1ByaW5jaXBhbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdENEIiLCJmaWxlIjoiL0Rlc2Fycm9sbG8vMjRocnMvcGFja2FnZXMvMjRocnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvUHJpbmNpcGFsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGNzcyB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlua1wiO1xuaW1wb3J0IEZlYXR1cmVkIGZyb20gXCIuLi9jb21wb25lbnRzL0ZlYXR1cmVkXCI7XG5cbmNvbnN0IFByaW5jaXBhbGVzID0gKHsgc3RhdGUsIGFjdGlvbnMgfSkgPT4ge1xuICAvLyBCdXNjYW1vcyBlbCDDumx0aW1vIHBvc3QgcHVibGljYWRvIGVuIGxhIHNlY2Npw7NuIENhcnJvdXNlbFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFjdGlvbnMuc291cmNlLmZldGNoKFwiL2NhdGVnb3J5L2ltYWdlX2dhbGxlcnkvXCIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoXCIvY2F0ZWdvcnkvaW1hZ2VfZ2FsbGVyeS9cIik7XG5cbiAgaWYgKGRhdGEuaXNDYXRlZ29yeSkge1xuICAgIGNvbnN0IGNhcnJvdXNlbCA9IHN0YXRlLnNvdXJjZS5jYXRlZ29yeVtkYXRhLmlkXTtcbiAgICBjb25zdCBwb3N0cyA9IGRhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtwb3N0cy5zbGljZSgwLCAxKS5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICA8YXJ0aWNsZSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgPEZpdmVCbG9jaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cG9zdC5saW5rfT5cbiAgICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC50aXRsZS5yZW5kZXJlZCB9fVxuICAgICAgICAgICAgICAgID48L2gxPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmV4Y2VycHQucmVuZGVyZWQgfX1cbiAgICAgICAgICAgICAgPjwvcD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5QT1I6IDwvc3Bhbj4gLSA8c3Bhbj5GRUNIQTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0ZpdmVCbG9jaz5cbiAgICAgICAgICAgIDxGaXZlQmxvY2s+XG4gICAgICAgICAgICAgIDxGZWF0dXJlZCBpbWdfaWQ9e3Bvc3QuZmVhdHVyZWRfbWVkaWF9IC8+XG4gICAgICAgICAgICA8L0ZpdmVCbG9jaz5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICkpfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiA8cD5Mb2FkaW5nIGluZm9ybWF0aW9uPC9wPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUHJpbmNpcGFsZXMpO1xuXG5jb25zdCBGaXZlQmxvY2sgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBcbmA7Il19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy8yNGhycy10aGVtZS9zcmMvY29tcG9uZW50cy9QcmluY2lwYWxlcy5qcz9iMGI3Il0sIm5hbWVzIjpbIlByaW5jaXBhbGVzIiwic3RhdGUiLCJhY3Rpb25zIiwidXNlRWZmZWN0Iiwic291cmNlIiwiZmV0Y2giLCJkYXRhIiwiZ2V0IiwiaXNDYXRlZ29yeSIsImNhcnJvdXNlbCIsImNhdGVnb3J5IiwiaWQiLCJwb3N0cyIsIml0ZW1zIiwibWFwIiwidHlwZSIsInNsaWNlIiwicG9zdCIsImxpbmsiLCJfX2h0bWwiLCJ0aXRsZSIsInJlbmRlcmVkIiwiZXhjZXJwdCIsImZlYXR1cmVkX21lZGlhIiwiY29ubmVjdCIsIkZpdmVCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3FSQUtBLEdBQU1BLFlBQVcsQ0FBRyxRQUF3QixJQUF2QixDQUFFQyxLQUFGLENBQVNDLE9BQVQsQ0FBdUIsTUFDMUM7QUFDQUMsdURBQVMsQ0FBQyxJQUFNLENBQ2RELE9BQU8sQ0FBQ0UsTUFBUixDQUFlQyxLQUFmLENBQXFCLDBCQUFyQixFQUNELENBRlEsQ0FFTixFQUZNLENBQVQsQ0FJQSxHQUFNQyxLQUFJLENBQUdMLEtBQUssQ0FBQ0csTUFBTixDQUFhRyxHQUFiLENBQWlCLDBCQUFqQixDQUFiLENBRUEsR0FBSUQsSUFBSSxDQUFDRSxVQUFULENBQXFCLENBQ25CLEdBQU1DLFVBQVMsQ0FBR1IsS0FBSyxDQUFDRyxNQUFOLENBQWFNLFFBQWIsQ0FBc0JKLElBQUksQ0FBQ0ssRUFBM0IsQ0FBbEIsQ0FDQSxHQUFNQyxNQUFLLENBQUdOLElBQUksQ0FBQ08sS0FBTCxDQUFXQyxHQUFYLENBQWUsYUFBQyxDQUFFQyxJQUFGLENBQVFKLEVBQVIsQ0FBRCxhQUFrQlYsTUFBSyxDQUFDRyxNQUFOLENBQWFXLElBQWIsRUFBbUJKLEVBQW5CLENBQWxCLEVBQWYsQ0FBZCxDQUVBLE1BQ0Usc0hBQ0dDLEtBQUssQ0FBQ0ksS0FBTixDQUFZLENBQVosQ0FBZSxDQUFmLEVBQWtCRixHQUFsQixDQUF1QkcsSUFBRCxFQUNyQixxRUFBUyxHQUFHLENBQUVBLElBQUksQ0FBQ04sRUFBbkIsRUFDRSwwREFBQyxTQUFELE1BQ0UsMERBQUMsd0RBQUQsRUFBTSxJQUFJLENBQUVNLElBQUksQ0FBQ0MsSUFBakIsRUFDRSxnRUFDRSx1QkFBdUIsQ0FBRSxDQUFFQyxNQUFNLENBQUVGLElBQUksQ0FBQ0csS0FBTCxDQUFXQyxRQUFyQixDQUQzQixFQURGLENBREYsQ0FNRSwrREFDRSx1QkFBdUIsQ0FBRSxDQUFFRixNQUFNLENBQUVGLElBQUksQ0FBQ0ssT0FBTCxDQUFhRCxRQUF2QixDQUQzQixFQU5GLENBU0UscUVBQ0UsOEVBREYsT0FDdUIsOEVBRHZCLENBVEYsQ0FERixDQWNFLDBEQUFDLFNBQUQsTUFDRSwwREFBQyw0REFBRCxFQUFVLE1BQU0sQ0FBRUosSUFBSSxDQUFDTSxjQUF2QixFQURGLENBZEYsQ0FERCxDQURILENBREYsQ0F3QkQsQ0FFRCxNQUFPLDBGQUFQLENBQ0QsQ0F2Q0QsQ0F5Q2VDLHVIQUFPLENBQUN4QixXQUFELENBQXRCLEVBRUEsR0FBTXlCLFVBQVMsc2lGQUFmIiwiZmlsZSI6Ii4vcGFja2FnZXMvMjRocnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvUHJpbmNpcGFsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGNzcyB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlua1wiO1xuaW1wb3J0IEZlYXR1cmVkIGZyb20gXCIuLi9jb21wb25lbnRzL0ZlYXR1cmVkXCI7XG5cbmNvbnN0IFByaW5jaXBhbGVzID0gKHsgc3RhdGUsIGFjdGlvbnMgfSkgPT4ge1xuICAvLyBCdXNjYW1vcyBlbCDDumx0aW1vIHBvc3QgcHVibGljYWRvIGVuIGxhIHNlY2Npw7NuIENhcnJvdXNlbFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFjdGlvbnMuc291cmNlLmZldGNoKFwiL2NhdGVnb3J5L2ltYWdlX2dhbGxlcnkvXCIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoXCIvY2F0ZWdvcnkvaW1hZ2VfZ2FsbGVyeS9cIik7XG5cbiAgaWYgKGRhdGEuaXNDYXRlZ29yeSkge1xuICAgIGNvbnN0IGNhcnJvdXNlbCA9IHN0YXRlLnNvdXJjZS5jYXRlZ29yeVtkYXRhLmlkXTtcbiAgICBjb25zdCBwb3N0cyA9IGRhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtwb3N0cy5zbGljZSgwLCAxKS5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICA8YXJ0aWNsZSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgPEZpdmVCbG9jaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cG9zdC5saW5rfT5cbiAgICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC50aXRsZS5yZW5kZXJlZCB9fVxuICAgICAgICAgICAgICAgID48L2gxPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmV4Y2VycHQucmVuZGVyZWQgfX1cbiAgICAgICAgICAgICAgPjwvcD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5QT1I6IDwvc3Bhbj4gLSA8c3Bhbj5GRUNIQTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0ZpdmVCbG9jaz5cbiAgICAgICAgICAgIDxGaXZlQmxvY2s+XG4gICAgICAgICAgICAgIDxGZWF0dXJlZCBpbWdfaWQ9e3Bvc3QuZmVhdHVyZWRfbWVkaWF9IC8+XG4gICAgICAgICAgICA8L0ZpdmVCbG9jaz5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICkpfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiA8cD5Mb2FkaW5nIGluZm9ybWF0aW9uPC9wPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUHJpbmNpcGFsZXMpO1xuXG5jb25zdCBGaXZlQmxvY2sgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/24hrs-theme/src/components/Principales.js\n");

/***/ })

})