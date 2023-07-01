"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([[179],{

/***/ 7004:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(6699);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(6992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(8783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(3948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(5827);
;// CONCATENATED MODULE: ./src/js/sum.js


var sum = function sum() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args.reduce(function (p, c) {
    return p + c;
  }, 0);
};
;// CONCATENATED MODULE: ./src/main.js






// import "core-js"
// import "core-js/es/promise"

// 引入 Css 资源，Webpack才会对其打包

console.log("hello main");
console.log(sum(1, 2, 3, 4, 5));
var obj = {
  useBuiltIns: "usage",
  corejs: {
    version: "3",
    proposals: true
  }
};
console.log(sum(1, 2, 3, 4));
console.log('tes++++---9990(())(0ssss', obj);
console.log('so da:', [1, 2, 3, 4].includes(1));

// 添加promise代码
var promise = Promise.resolve();
promise.then(function () {
  console.log("hello promise");
});
document.getElementById("btn").addEventListener('click', function () {
  // eslint会对动态导入语法报错，需要修改eslint配置文件
  // webpackChunkName: "count"：这是webpack动态导入模块命名的方式
  // "count"将来就会作为[name]的值显示。
  __webpack_require__.e(/* import() | count */ 800).then(__webpack_require__.bind(__webpack_require__, 192)).then(function (modul) {
    console.log('test+++++829129000', modul);
    console.log('test+++++829129', modul["default"](10, 1));
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [686], () => (__webpack_exec__(7004)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);