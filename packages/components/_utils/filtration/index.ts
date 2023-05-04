/**
 * @name utils
 * @Time 2023年05月04日
 * @description 工具箱主要是一些公用方法
 * {humpConversion}  驼峰转换为短横线命名 例如：dkButton => dk-button
 */

/**
 * @name humpConversion
 * @see replace() 字符串原型方法   使用支持字符串内替换的对象替换字符串中的文本   https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 * @see toLowerCase() 字符串原型方法  将调用字符串值转换为小写形式并返回   https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
 * @param { string } str 需要转换的字符串
 * @description 驼峰转换为短横线命名 例如：dkButton => dk-button
 */

export const humpConversion = (str: string): string => {
  return str.replace(/([A-Z])/g, (match: string, p1: string): string => {
    return '-' + p1.toLowerCase()
  })
}
