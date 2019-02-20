/**
 * storageUnit对象
 */
const StorageUnit = {};
/**
* 将B、MB、KB等转为字节接口
* @param {带单位的字符串} str
*/
const convertToB = (str) => {
 if (str) {
   const strLenght = str.length;
   const num = Number(str.substring(0, strLenght - 2));
   const unit = str.substring(strLenght - 2, strLenght);
   const k = 1024;
   const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   if (sizes.includes(unit.toUpperCase())) {
     const i = sizes.findIndex(value => value === unit.toUpperCase());
     return Math.floor(num * (k ** i));
   }
   return Number(str.substring(0, strLenght - 1));
   // return Math.floor(Number(num) * 100);
 }
 return 0;
};
/**
 * 将字节转为B、MB、KB等接口(转为最大的单位或特定单位)
 * @param {字节} bytes
 * @param {保留几位小数} fixNum
 */
const convertBTo = (bytes, fixNum, unit) => {
  const bytesTmp = Number(bytes);
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const fixNumTmp = Number(fixNum) >= 0 ? fixNum : 2;
  const result = {
    num: 0,
    unit: 'B',
    numUnit: '0B',
  };
  if (bytesTmp === 0) return result;
  if (unit && sizes.includes(unit.toUpperCase())) {
    const i = sizes.findIndex(value => value === unit.toUpperCase());
    result.num = Number((bytesTmp / (k ** i)).toFixed(fixNumTmp));
    result.unit = unit.toUpperCase();
    result.numUnit = `${result.num}${result.unit}`;
    return result;
  }
  const i = Math.floor(Math.log(bytesTmp) / Math.log(k));
  result.num = Number((bytesTmp / (k ** i)).toFixed(fixNumTmp));
  result.unit = sizes[i];
  result.numUnit = `${result.num}${result.unit}`;
  return result;
};
/**
 * 排序
 * @param  {...any} para
 * 参数： 1.类型(必传)：num、string; 2.排序(必传)： 升序(ascending || asc)、降序(descending || desc)；3.排序字段(必传); 4.按后缀字段、按MB、KB带单位(选传)
 */
const sortArr = (...para) => {
  let result = '';
  result = (obj1, obj2) => {
    let val1 = obj1[para[2]] ? obj1[para[2]] : '';
    let val2 = obj2[para[2]] ? obj2[para[2]] : '';
    if (para[3] === 'suffix') {
      val1 = val1.substring(val1.lastIndexOf('.') + 1, val1.length);
      val2 = val2.substring(val2.lastIndexOf('.') + 1, val2.length);
    }
    if (para[3] === 'unit') {
      val1 = convertToB(val1);
      val2 = convertToB(val2);
    }
    if (para[0] === 'num') {
      val1 = Number(val1);
      val2 = Number(val2);
      return (para[1].toUpperCase() === 'ASCENDING' ||  para[1].toUpperCase() === 'ASC')? (val1 - val2) : (val2 - val1);
    }
    if (val1 < val2) {
      return (para[1].toUpperCase() === 'ASCENDING' || para[1].toUpperCase() === 'ASC') ? -1 : 1;
    } else if (val1 > val2) {
      return (para[1].toUpperCase() === 'ASCENDING' || para[1].toUpperCase() === 'ASC') ? 1 : -1;
    }
    return 0;
  };
  return result;
};
/**
 * table前端排序字段
 * @param  {...any} para
 * 参数: 1.类型(必传)：num、string; 2.排序(必传)： 升序(ascending || asc)、降序(descending || desc)；
 * 3.排序字段(必传)；4.排序数据(必传); 5.后缀字段、按MB、KB带单位(选传)
 */
const sortExp = (...para) => {
  const result = para[3].sort(sortArr(para[0], para[1], para[2], para[4], para[5]));
  return result;
};
StorageUnit.convertToB = convertToB;
StorageUnit.convertBTo = convertBTo;
StorageUnit.sortExp = sortExp;
module.exports = StorageUnit;
