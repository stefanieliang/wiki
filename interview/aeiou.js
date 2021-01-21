const aeiou = ['a', 'e', 'i', 'o', 'u']

/** 
 * 判断一个小写字母是元音字母
 * @param {String} param 
 * @returns {Boolean} 
 */
const judge = function (param) {
    return aeiou.includes(param)
}

/**
 * 判断一个全是小写字母的字符串是否符合规则
 * @param {String} str 
 * @returns {Boolean} 
 */
const check = function (str) {
    let flag = false;
    let newStr = str.toLowerCase(),
        len = str.length;
    if (len < 1) {
        flag = false
    }

    // 判断至少包含一个元音字母
    for (let i = 0; i < len; i++) {
        if (judge(newStr[i])) {
            flag = true;
        }
    }
    // 判断不可连续三个元音字母 || 辅音字母
    for (let i = 0; i < len - 2; i++) {
        if (judge(newStr[i]) && judge(newStr[i + 1]) && judge(newStr[i + 2])) {
            flag = false
        }
        if (!judge(newStr[i]) && !judge(newStr[i + 1]) && !judge(newStr[i + 2])) {
            flag = false
        }
    }

    // 判断不可两个连续字母相同，e,o除外
    for (let i = 0; i < len - 1; i++) {
        if (newStr[i] === newStr[i + 1] && newStr[i] !== 'e' && newStr[i] !== 'o') {
            flag = false
        }
    }

    return flag ? "满足" : "不满足"
}

console.log(check('a'))
console.log(check('tv'))
console.log(check('ptoui'))
console.log(check('bontres'))
console.log(check('zoggax'))
console.log(check('wiinq'))
console.log(check('eep'))
console.log(check('houctuh'))