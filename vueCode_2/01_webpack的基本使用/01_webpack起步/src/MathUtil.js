// 使用commonjs模块化导出
function add(value1,value2){
  return value1 + value2;
}
function sub(value1,value2){
  return value1 - value2;
}
function multiply(value1,value2){
  return value1 * value2;
}
// commonJS导出方式
module.exports={
  add,
  sub,
  multiply
}
