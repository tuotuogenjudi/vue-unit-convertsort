<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <!-- <h2>Essential Links</h2> -->
    <ul>
      <li>
        <div>转换为最小单位B</div>
        <div>20G: {{ test }}B</div>
      </li>
      <li>
        <div>转换为最小单位B</div>
        <div>20M: {{ testM }}B</div>
      </li>
      <li>
        <div>默认2位小数</div>
        <div>20474736330B: {{ testBTo1 }}</div>
      </li>
      <li>
        <div>保留3位小数,并转为MB</div>
        <div>20474736330B: {{ testBTo2 }}</div>
      </li>
      <li></li>
    </ul>
    <h2>排序</h2>
    <div>
      <table border="1" style="width: 350px; margin: 0 auto;">
        <tr>
          <th>indexName<a href="javascript:void(0)" @click="customSort('string', 'asc', 'indexName')"><span style="font-size: 10px;">(升序)</span></a></th>
          <th>docCount<a href="javascript:void(0)" @click="customSort('num', 'desc', 'docCount')"><span style="font-size: 10px;">(降序)</span></a></th>
          <th>storeSize<a href="javascript:void(0)" @click="customSort('num', 'asc', 'storeSize', 'unit')"><span style="font-size: 10px;">(升序)</span></a></th>
        </tr>
        <tr v-for="item of dataList" :key="item.indexName">
          <td>{{ item.indexName }}</td>
          <td>{{ item.docCount }}</td>
          <td>{{ item.storeSize }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import storageUnit from '../src/lib/index';
export default {
  name: 'app',
  data () {
    return {
      msg: '使用样例',
      test: '',
      testM: '',
      testBTo1: '',
      testBTo2: '',
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
    }
  },
  mounted() {
    this.dataListTmp = JSON.parse(JSON.stringify(this.dataList));
    this.test = storageUnit.convertToB('20GB');
    this.testM = storageUnit.convertToB('20MB');
    this.testBTo1 = storageUnit.convertBTo('20474736330').numUnit;
    this.testBTo2 = storageUnit.convertBTo('20474736330', 3, 'MB').numUnit;
  },
  methods: {
    customSort(...para) {
      const paraTmp = para;
      this.dataList = storageUnit.sortExp(paraTmp[0], paraTmp[1], paraTmp[2], this.dataListTmp, paraTmp[3] ? paraTmp[3] : '');
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
