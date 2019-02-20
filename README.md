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
3. convertsort.convertToB('2MB'); // 将B、MB、KB等转为字节；
4. convertsort.convertBTo(20000, 2); // 将字节转为最大单位；
5. convertsort.convertBTo(20474736330, 2, 'MB'); // 将B转为指定单位的数据；
6.排序：
数据demo
dataList: [{
  indexName: 'index1',
  docCount: 1000,
  storeSize: '1GB',
}, {
  indexName: 'haha',
  docCount: 245,
  storeSize: '3kb',
}, {
  indexName: 'suoyin',
  docCount: 20,
  storeSize: '6MB',
}, {
  indexName: 'nihao',
  docCount: 1213,
  storeSize: '1000b',
}]
/**
* 参数1(必传): 排序类型(num: 数字排序, string: 字母排序);
* 参数2(必传): 排序顺序(asc或ascending: 升序, desc或descending: 降序);
* 参数3(必传): 排序字段;
* 参数4(必传): 带排序原始数据(num: 数字排序, string: 字母排序);
* 参数5(选传): 单位(是否是带单位的排序,需要统一转换后再排序);
**/
storageUnit.sortExp('num', 'asc', 'storeSize', dataList, 'unit');
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 好的插件要具备三个特点:
``` bash
# 通用性 // 能够满足大部分用户需求
# 可订制性 // 能够满足用户针对不同业务环境进行订制
# 可扩展性 // 能够满足用户对其他方面的拓展
```
