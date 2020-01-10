// 使用commonjs导入方式
const {add,sub,multiply} = require('./MathUtil.js');
console.log('add:',add(5,8));
console.log('sub:',sub(5,8));
console.log('multiply:',multiply(5,8));
// 使用es6模块化导入方式
import {name,func} from './info.js'
console.log('name:',name);
console.log('func:',func());
// webpack打包命令 webpack ./src/main.js ./dist/boundle.js
