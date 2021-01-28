function diPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        // 参数判断
        if (!Array.isArray(promises)) {
            throw new TypeError("promises must be an array")
        }
        let result = [] // 存放结果
        let count = 0 // 记录有几个resolved
        promises.forEach((promise, index) => {
            promise.then((res) => {
                result[index] = res
                count++
                count === promises.length && resolve(result) // 判断是否已经完成
            }, (err) => {
                reject(err)
            })
        })
    })
}
let p1 = Promise.resolve(1),
    p2 = Promise.resolve(2),
    p3 = Promise.resolve(3);

diPromiseAll([p1, p2, p3]).then((res) => {
    console.log(res, 'res')
}, (err) => {
    console.log(err, 'err')
})

// [1, 2, 3]

let q1 = Promise.reject(1),
    q2 = Promise.resolve(2),
    q3 = Promise.resolve(3);
diPromiseAll([q1, q2, q3]).then((res) => {
    console.log(res, 'res')
}, (err) => {
    console.log(err, 'err')
})
// 1 "err"
