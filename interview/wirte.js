console.log(1);
setTimeout(() => {
    console.log(2);
}, 0);
new Promise((resolve, reject) => {
    console.log(3); resolve();
    console.log(4);
}).then(() => {
    console.log(5);
}); console.log(6);