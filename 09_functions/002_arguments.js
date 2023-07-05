myFun01(1, 2);
function myFun01() {
    console.log("\n---- arguments is: ", arguments);
    console.log("---- ...arguments is: ", ...arguments);
    console.log("---- Object.values(arguments) is: ", Object.values(arguments));
}

const myFun02 = function () {
    console.log("\n---- arguments is: ", arguments);
    console.log("---- ...arguments is: ", ...arguments);
    console.log("---- Object.values(arguments) is: ", Object.values(arguments));
}
myFun02(1, 2);

const myFun03 = (...args) => {
    console.log("\n\n---- args is: ", args);
    console.log("---- Object.values(args) is: ", Object.values(args));
    console.log("---- arguments is: ", arguments);
}
myFun03(1, 2);