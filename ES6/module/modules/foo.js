const name = "codewhy";
const age = 18;
let message = "my name is codewhy";

function hello() {
  console.log("hello" + name);
}

// 方式一  在语句声明的前面直接加上export关键字

// 方式二  将所有需要导出的标识符，放到export后面的 {}中
export { name, age, message, hello };

// 方式三：导出时给标识符起一个别名2
// export {
//   name as fName,
//   age as fAge,
//   message as fMessage,
//   sayHello as fSayHello,
// };



// 默认导出（default export）
// 默认导出export时可以不需要指定名字；
// 在导入时不需要使用 {}，并且可以自己来指定名字；
// 它也方便我们和现有的CommonJS等规范相互操作；
export default function sub(num1, num2) {
  return num1 - num2;
}