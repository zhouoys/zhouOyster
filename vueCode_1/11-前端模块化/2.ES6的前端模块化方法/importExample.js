// // 导入方式一
// // import {name,fun1} from './exportExample.js'
// // console.log(,name)
// // console.log('importExample data:',fun1(3,5))

// //导入方式二
// import {age,hobby,multiply} from "./exportExample.js";
// console.log('importExample data:',age)// importExample data: 23
// console.log('importExample data:',hobby) //importExample data: (3) ["plagfootball", "reading", "computer"]
// console.log('importExample data:',multiply(20,40))// importExample data: 800

// // 导入方式三
// import {Person} from "./exportExample.js";
// const person = new Person();
// person.show()

// 导入方式四
import divide from './exportExample.js'
console.log('importExample data:',divide(20,40))


