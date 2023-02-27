var name = '小明';
var age = 18;
var flag = true;

function sum(num1, num2) {
    return num1 + num2;
}

if (flag) {
    console.log(sum(20, 30));
}

//导出
export {
    flag, sum
}


// 导出函数/类
export function mul(num1, num2) {
    return num1 + num2;
}
export class Person {
    run() {
        console.log('奔跑');
    }
}