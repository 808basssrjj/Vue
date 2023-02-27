// 方式一：import {标识符列表} from '模块'；
// import { name, age, message, hello } from './modules/foo.js';

// 方式二：导入时给标识符起别名
// import { name as n, age as a, message as m, hello as h } from './modules/foo.js';

// 方式三：将模块功能放到一个模块功能对象（a module object）上
import * as foo from "./modules/foo.js";
console.log(foo.name);
console.log(foo.age);

import jia from "./modules/foo.js";
console.log(jia(20, 30));
