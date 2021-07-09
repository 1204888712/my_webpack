
    (function(modules){
      //创建require函数， 它接受一个模块ID（这个模块id是数字0，1，2） ，它会在我们上面定义 modules 中找到对应是模块.
      function require(id){
        const [fn, mapping] = modules[id];
        function localRequire(relativePath){
          //根据模块的路径在mapping中找到对应的模块id
          return require(mapping[relativePath]);
        }
        const module = {exports:{}};
        //执行每个模块的代码。
        fn(localRequire,module,module.exports);
        return module.exports;
      }
      //执行入口文件，
      require(0);
    })({0:[
      function (require, module, exports){
        "use strict";

/*
 * @Author: liguobiao
 * @Date: 2021-07-09 11:57:23
 * @LastEditors: liguobiao
 * @LastEditTime: 2021-07-09 11:57:24
 * @FilePath: \my_webpack\example\entry.js
 */
console.log(2);
      },
      {},
    ],})
  