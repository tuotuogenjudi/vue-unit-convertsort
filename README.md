# vue-unit-convertsort

> 存储单位的转换和排序

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

启动后访问http://localhost:8080/
如图：

使用方法：
1. npm install vue-unit-convertsort
2. import storageUnit from 'vue-unit-convertsort/convertsort';
3. convertsort.convertToB('2MB'); // 将B、MB、KB等转为字节接口
4. convertsort.convertBTo(20000, 2); // 将字节转为MB等；
5. convertsort.convertToB('2MB'); // 将B、MB、KB等转为字节接口
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 好的插件要具备三个特点:
``` bash
# 通用性 // 能够满足大部分用户需求
# 可订制性 // 能够满足用户针对不同业务环境进行订制
# 可扩展性 // 能够满足用户对其他方面的拓展
```
