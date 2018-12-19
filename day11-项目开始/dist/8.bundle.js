webpackJsonp([8],{

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_NewsList_vue__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_NewsList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_NewsList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_224f66c2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_NewsList_vue__ = __webpack_require__(327);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(325)
}
var normalizeComponent = __webpack_require__(145)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-224f66c2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_NewsList_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_224f66c2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_NewsList_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/news/NewsList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(12)
  hotAPI.install(__webpack_require__(4), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-224f66c2", Component.options)
  } else {
    hotAPI.reload("data-v-224f66c2", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "\n.mui-table-view-cell p[data-v-224f66c2]:first-child {\n  color: black;\n}\n.mui-table-view-cell .mui-ellipsis[data-v-224f66c2] {\n  display: flex;\n  justify-content: space-between;\n}\n", ""]);



/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(291);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(144)("0e240c7a", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(291, function() {
     var newContent = __webpack_require__(291);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mintUi = __webpack_require__(146);

exports.default = {
    name: "NewsList",
    data: function data() {
        return {
            newList: []
        };
    },
    created: function created() {
        this.getNewsList();
    },
    methods: {
        getNewsList: function getNewsList() {
            var _this = this;

            this.$http.get('/getNewsList').then(function (result) {
                if (result.data.status == 0) {
                    _this.newList = result.data.data;
                } else {
                    (0, _mintUi.Toast)('图片加载失败...');
                }
            });
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "ul",
      { staticClass: "mui-table-view" },
      _vm._l(_vm.newList, function(item, index) {
        return _c(
          "li",
          { key: index, staticClass: "mui-table-view-cell mui-media" },
          [
            _c("router-link", { attrs: { to: "/home/newsinfo/" + item.id } }, [
              _c("img", {
                staticClass: "mui-media-object mui-pull-left",
                attrs: { src: item.img_url }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "mui-media-body" }, [
                _c("p", { staticClass: "mui-ellipsis" }, [
                  _vm._v(_vm._s(item.title))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "mui-ellipsis" }, [
                  _c("span", [
                    _vm._v(
                      "发表时间:" +
                        _vm._s(_vm._f("dateFormat")(item.created_at))
                    )
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v("点击:" + _vm._s(item.click) + "次")])
                ])
              ])
            ])
          ],
          1
        )
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(12)      .rerender("data-v-224f66c2", esExports)
  }
}

/***/ })

});