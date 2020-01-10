// // 导出方式一 直接导出变量
// export let name = 'harry Potty'
// export const fun1 = function(arg1,arg2){
//   return arg1+arg2;
// }
// 导出方式二 导出对象
// let age = 23;
// const hobby=['plagfootball','reading','computer']
// let multiply = function(param1,param2){
//   return param1 * param2
// }
// export {
//     age,
//     hobby,
//   multiply,
// }
// 导出方式三 导出类
// export class Person{
//   show(){
//     console.log('hello world!')
//   }
// }
// 导出方式四 默认导出
export default function(param1,param2){
  return param1 / param2
}
