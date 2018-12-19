webpackJsonp([9],{

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_GoodsList_vue__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_GoodsList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_GoodsList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e108aa6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_GoodsList_vue__ = __webpack_require__(339);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(337)
}
var normalizeComponent = __webpack_require__(145)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0e108aa6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_GoodsList_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e108aa6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_GoodsList_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/goods/GoodsList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(12)
  hotAPI.install(__webpack_require__(4), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e108aa6", Component.options)
  } else {
    hotAPI.reload("data-v-0e108aa6", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "\n.goods-list[data-v-0e108aa6] {\n  display: flex;\n  flex-wrap: wrap;\n  display: flex;\n  padding: 0 5px;\n  justify-content: space-between;\n}\n.goods-list .goods-item[data-v-0e108aa6] {\n    width: 48%;\n    margin-top: 5px;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);\n}\n.goods-list .goods-item img[data-v-0e108aa6] {\n      width: 100%;\n}\n.goods-list .goods-item .title .info[data-v-0e108aa6] {\n      background-color: #eee;\n      color: #fff;\n      display: flex;\n      justify-content: space-between;\n}\n.goods-list .mint-button[data-v-0e108aa6] {\n    margin-top: 10px;\n}\n", ""]);



/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(299);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(144)("4045e092", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(299, function() {
     var newContent = __webpack_require__(299);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mintUi = __webpack_require__(146);

exports.default = {
    name: "GoodsList",
    data: function data() {
        return {
            page: 1,
            goodslist: []
        };
    },
    methods: {
        getGoodsList: function getGoodsList() {
            var _this = this;

            this.$http.get('/getGoodsList?page=' + this.page).then(function (result) {
                if (result.data.status === 0) {
                    _this.goodslist = _this.goodslist.concat(result.data.data.data);
                }
            });
        },
        more: function more() {
            this.page++;
            this.getGoodsList();
            (0, _mintUi.Toast)('加载成功');
        },
        goDetail: function goDetail(id) {
            //编程式导航
            //path 不能和params 一起使用,否则params会被忽略
            this.$router.push({ name: 'goodsinfo', params: { id: id } });
        }
    },
    created: function created() {
        this.getGoodsList();
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
//
//
//
//

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "goods-list" },
    [
      _vm._l(_vm.goodslist, function(item, index) {
        return _c(
          "div",
          {
            key: index,
            staticClass: "goods-item",
            attrs: { tag: "div" },
            on: {
              click: function($event) {
                _vm.goDetail(item.id)
              }
            }
          },
          [
            _c("img", { attrs: { src: item.img_url, alt: "" } }),
            _vm._v(" "),
            _c("div", { staticClass: "title" }, [
              _c("h4", [_vm._v(_vm._s(item.title))]),
              _vm._v(" "),
              _c("div", { staticClass: "info" }, [
                _c("p", { staticClass: "price" }, [
                  _c("span", [_vm._v("原价:$" + _vm._s(item.sell_price))]),
                  _vm._v(" "),
                  _c("span", [_vm._v("现价:$" + _vm._s(item.market_price))])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "sell" }, [
                  _c("span", [_vm._v("热卖中")]),
                  _vm._v(" "),
                  _c("span", [_vm._v("剩余:" + _vm._s(item.stock_quantity))])
                ])
              ])
            ])
          ]
        )
      }),
      _vm._v(" "),
      _c(
        "mt-button",
        {
          attrs: { type: "danger", size: "large", plain: "" },
          on: { click: _vm.more }
        },
        [_vm._v("加载更多")]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(12)      .rerender("data-v-0e108aa6", esExports)
  }
}

/***/ })

});