// 1.解构赋值
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};
// const { a, b, c, d, e } = obj || {} //给空值防止为underfind或null时报错
const { a: a1 } = obj; //别名
console.log(a1);

// 2.合并数组/对象
const arr1 = [1, 2, 3];
const arr2 = [1, 5, 6];
const newArr = [...new Set([...arr1, ...arr2])];
console.log(newArr);

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const newObj = { ...obj1, ...obj2 };
console.log(newObj);

//3.模板字符串中可以写表达式
const name = "小明";
const score = 59;
const result = `${name}${score > 60 ? "及格" : "不及格"}`;
console.log(result);

//4.if的多条件判断
// if(   type == 1 ||type == 2 ||type == 3 ||type == 4 ||){
//    //...
// }
const type = 1;
const condition = [1, 2, 3, 4];
if (condition.includes(type)) {
  console.log("我叫你多条件这样判断你龙吗");
}

//5.find
const fin = [1, 2, 3, 4, 5];
const res = fin.find((item) => item === 3);
console.log(res);

//6.扁平化数组
const deps = {
  采购部: [1, 2, 3],
  人事部: [5, 8, 12],
  行政部: [5, 14, 79],
  运输部: [3, 64, 105],
};
let member = Object.values(deps).flat(Infinity); //flat参数为降维次数 infinity为无线
console.log(member);

//7.获取对象属性值 可选连
const nameObj = { name: "张三" };
// const name1 = nameObj && nameObj.name;
const name1 = nameObj?.name;
console.log(name1);

//8.添加对象属性 属性名是动态变化
const obj8 = {};
let index = 1;
obj8[`topic${index}`] = "话题内容";
console.log(obj8);

//9.关于输入框非空的判断
// if (value !== null && value !== undefined && value !== "") {
//   //...
// }
// ??，只有undefined和null才算假值
let value = 'null';
if (value ?? "" !== "") {
  console.log("不为空");
} else {
  console.log("为空");
}